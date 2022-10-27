import React from "react";
import { Logo } from "../components/Logo";
import { MainStyled } from "./Main.styled";
import { Map } from "../components/Map";
import { UserInfo } from "../components/UserInfo";

export const Main = () => {
  return (
    <MainStyled>
      <Logo />
      <div className="flex">
        <UserInfo />
        <Map />
      </div>
    </MainStyled>
  );
};
