import React from "react";
import avatar from "../assets/images/thor.jpg";
import { AvatarStyled } from "./UserInfo.styled";

export const Avatar = () => {
  return <AvatarStyled src={avatar} alt="" />;
};
