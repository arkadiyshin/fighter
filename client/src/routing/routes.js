import { Main } from "../pages/Main";
import { Fight } from "../pages/Fight";

export const locations = {
  Login : "/",
  Main: "/main",
  Fight : "/fight", 
}
export const routes = [
  {
    path: locations.main,
    component: Main,
    name: "Main",
    exact: true,
  },
  {
    path: locations.main,
    component: Main,
    name: "Main",
    exact: true,
  },
  {
    path: locations.Fight,
    component: Fight,
    name: "Fight",
    exact: true,
  },
  
];
