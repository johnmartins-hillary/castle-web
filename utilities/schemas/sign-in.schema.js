import * as yup from "yup";
export const SignInSchema = yup.object().shape({
  username_email: yup.string().required("required"),
  password: yup.string().required("required")
});
