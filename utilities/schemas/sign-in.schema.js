import * as yup from "yup";
export const SignInSchema = yup.object().shape({
  email: yup.string().required("required"),
  password: yup.string().required("required")
});
