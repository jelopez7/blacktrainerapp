import { httpConToken } from "../helpers/http";

export async function getRoutinesByUser(idUser) {
  try {
    const { data } = await httpConToken.get(
      `/api/routines?filters[$and][0][user][id][$eq]=${idUser}&populate[exercise][populate][image]=*`
    );
    return data.data;
  } catch (error) {
    console.log(error);

    return [];
  }
}
