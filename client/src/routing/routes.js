import { SignUpForm } from "../pages/SignUpForm";
import { LoginForm } from "../pages/LoginForm";
import { Main } from "../pages/Main";
import { Fight } from "../pages/Fight";
import { Result } from "../pages/Result";

export const locations = {
  LOGIN: "/",
  SIGNUP: "/signup",
  MAIN: "/main",
  FIGHT: "/fight", 
  RESULT: "/result", 
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
  {
    path: locations.MAIN,
    component: Main,
    name: "Main",
    exact: true,
  },
  {
    path: locations.FIGHT,
    component: Fight,
    name: "Fight",
    exact: true,
  },
  {
    path: locations.RESULT,
    component: Result,
    name: "Result",
    exact: true,
  },
];
