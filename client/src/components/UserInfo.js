import React from "react";
import { Avatar } from "./Avatar";
import { Skills } from "./Skills";
import { UserInfoContainer, UserNameInfo } from "./UserInfo.styled";

export const UserInfo = () => {
  return (
    <UserInfoContainer>
      <Avatar />
      <UserNameInfo>
        <h1>UserName</h1>
      </UserNameInfo>
      <div>
        <Skills />
      </div>
    </UserInfoContainer>
  );
};
