import React from "react";
import { Avatar } from "./Avatar";
import { Skills } from "./Skills";
import { UserInfoContainer, UserNameInfo } from "./UserInfo.styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const UserInfo = () => {
  const username = useSelector((state) => state.skillsSlice.username);
  return (
    <UserInfoContainer>
      <Avatar />
      <UserNameInfo>
        <h1>{username}</h1>
      </UserNameInfo>
      <div>
        <Skills />
      </div>
      <button>
        <Link to="/fight">Fight</Link>
      </button>
    </UserInfoContainer>
  );
};
