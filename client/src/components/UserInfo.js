import React from "react";
import { Avatar } from "./Avatar";
import { Skills } from "./Skills";
import { UserInfoContainer, UserNameInfo } from "./UserInfo.styled";
import {Link} from 'react-router-dom';

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
      <button><Link to='/fight'>Fight</Link></button>
    </UserInfoContainer>
  );
};
