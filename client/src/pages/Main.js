import React from "react";
import { Logo } from "../components/Logo";
import { GameContainer, MainDiv } from "./Main.styled";
import { Map } from "../components/Map";
import { UserInfo } from "../components/UserInfo";
import axios from "axios";
import { Buttons } from "../components/Buttons";

export const Main = () => {
  return (
    <MainDiv>
      <UserInfo />
      <Buttons/>
      <GameContainer>
        <Logo />
        <Map />
      </GameContainer>
    </MainDiv>
  );
};
