import React from "react";
import { AvatarStyled } from "./UserInfo.styled";
import { useSelector } from "react-redux";
import { Settings, AvatarContainer } from "../pages/Main.styled.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Avatar = () => {
  const avatar_url = useSelector((state) => state.skillsSlice.avatar_url);
  const navigate = useNavigate();
  const [isSettingsVisible, setisSettingsVisible] = useState(false);
  const [isAvatarBlur, setIsAvatarBlur] = useState(false);
  const style = {
    filter: `blur(4px)`,
  };
  return (
    <AvatarContainer
      onClick={() => {
        navigate("/settings");
      }}
      onMouseOver={() => {
        setisSettingsVisible(true);
      }}
      onMouseOut={() => {
        setisSettingsVisible(false);
      }}
    >
      <AvatarStyled
        src={avatar_url}
        alt=""
        style={isAvatarBlur ? style : null}
      />
      {isSettingsVisible ? (
        <Settings
          onMouseOver={() => {
            setIsAvatarBlur(true);
          }}
          onMouseOut={() => {
            setIsAvatarBlur(false);
          }}
        >
          {" "}
          Settings{" "}
        </Settings>
      ) : null}
    </AvatarContainer>
  );
};
