import React from "react";
import {Link} from 'react-router-dom';
import { Logo } from "../components/Logo";
import { GameContainer, MainDiv } from "./Main.styled";
import { Map } from "../components/Map";
import { UserInfo } from "../components/UserInfo";

export const Main = () => {
  return (
    <MainDiv>
      <UserInfo />
      <GameContainer>
        <Logo />
        <button><Link to='/fight'>Fight</Link></button>
        <Map />
      </GameContainer>
    </MainDiv>
  );
};
