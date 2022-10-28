import React from "react";
import { AvatarStyled } from "./UserInfo.styled";
import { useSelector } from "react-redux";


export const Avatar = () => {
  const avatar_url = useSelector((state) => state.skillsSlice.avatar_url);
  return <AvatarStyled src={avatar_url} alt="" />;
};
