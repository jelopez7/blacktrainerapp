import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../reducers/authReducer";
import { httpSinToken } from "../helpers/http";

export const loginUser = (formData) => async (dispatch) => {
  dispatch(loginStart());

  try {
    const { data } = await httpSinToken.post("/api/auth/local", formData);
    const { user, jwt: token } = data;

    dispatch(loginSuccess({ user, token }));
  } catch (error) {
    dispatch(
      loginFailure(
        error.response?.data?.error?.message || "Error de inicio de sesión"
      )
    );
  }
};
