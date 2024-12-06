import * as Yup from "yup";

export function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    identifier: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });
}
