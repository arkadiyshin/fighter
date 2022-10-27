import { SignUpForm } from "../pages/SignUpForm";
import { LoginForm } from "../pages/LoginForm";

export const locations = {
  LOGIN: "/",
  SIGNUP: "/signup",
};

export const routes = [
  {
    path: locations.LOGIN,
    component: LoginForm,
    name: "LoginForm",
    exact: true,
  },
  {
    path: locations.SIGNUP,
    component: SignUpForm,
    name: "SignUpForm",
    exact: true,
  },
];
