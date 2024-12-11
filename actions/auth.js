import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "../reducers/authReducer";
import { httpConToken, httpSinToken } from "../helpers/http";
import { getToken, setToken } from "../utils/token";
import { TOKEN } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = (formData) => async (dispatch) => {
  dispatch(loginStart());

  try {
    const { data } = await httpSinToken.post("/api/auth/local", formData);
    const { user, jwt: token } = data;

    await setToken(token);
    dispatch(loginSuccess({ user, token }));
  } catch (error) {
    dispatch(
      loginFailure(
        error.response?.data?.error?.message || "Error de inicio de sesión"
      )
    );
  }
};

export const logoutUser = () => async (dispatch) => {
  await AsyncStorage.removeItem(TOKEN);
  dispatch(logout());
};

export const checkingUser = () => async (dispatch) => {
  dispatch(loginStart());
  try {
    const { data: user } = await httpConToken.get("/api/users/me");

    if (user) {
      const token = await getToken();

      dispatch(loginSuccess({ user, token }));
    } else {
      dispatch(logout());
    }
  } catch (error) {
    console.log(error.response?.data?.error?.message);
    dispatch(logout());
  }
};
