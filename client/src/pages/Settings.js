import api from "../services/api";
import { useState } from "react";
import {
  AvatarImage,
  AvatarsContainer,
  SettingsTitle,
  SettingsButton,
  SaveButton,
  HiddenInput,
  AvatarImageLabel,
} from "./Main.styled";
import { LogInTitle } from "../components/LoginForm.styled";

export const Settings = () => {
  const [listOfAvatars, setListOfAvatars] = useState([]);
  const [isChangeAvatarClicked, setIsChangeAvatarClicked] = useState(false);
  api.get("/avatars?aligment=good").then((res) => {
    console.log(res.data);
    setListOfAvatars(res.data);
  });
  return (
    <>
      <SettingsTitle>Settings</SettingsTitle>
      <LogInTitle
        onClick={() => {
          setIsChangeAvatarClicked((state) => !state);
        }}
      >
        {isChangeAvatarClicked ? (
          <SettingsButton>Choose avatar</SettingsButton>
        ) : (
          <SettingsButton>Change Avatar</SettingsButton>
        )}
      </LogInTitle>
      <AvatarsContainer>
        {isChangeAvatarClicked &&
          listOfAvatars &&
          listOfAvatars.map((el) => (
            <>
              <AvatarImageLabel for={el.id}>
                <AvatarImage
                  src={`${el.avatar_url}`}
                  // if clicked (change state) => change border to red
                  height="200px"
                />

                <HiddenInput
                  type="radio"
                  id={el.id}
                  value={el.avatar_url}
                  name="avatar"
                  // onChange={() => `style=${style}`}
                  // if el.avatar_url === original avatar url from redux => checked=true
                  //1/ if clicked => change state to true/
                  //2/ if true => border-color: red
                  //3/ if false => no border color
                />
              </AvatarImageLabel>
            </>
          ))}
      </AvatarsContainer>
      {isChangeAvatarClicked && <SaveButton>Save</SaveButton>}
    </>
  );
};
