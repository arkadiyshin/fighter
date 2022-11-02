import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainDiv = styled.div`
  display: flex;
  gap: 20px;
  height: 100vh;
`;

export const AvatarsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 50px;
  flex-wrap: wrap;
`;

export const HiddenInput = styled.input.attrs({ type: "radio" })`
  // visibility: hidden;

  &:checked + img {
    width: 200px;
  }
`;

export const AvatarImage = styled.img`
  border-radius: 20px;
  position: relative;
  // border: "20px solid #f00";

  &:hover {
    cursor: pointer;
  }
`;

export const AvatarImageLabel = styled.label``;

export const Settings = styled.h4`
  position: absolute;
  font-size: 2.5rem;
  margin: -50px 30px;
`;

export const AvatarContainer = styled.div`
  cursor: pointer;
`;

export const SettingsTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
`;

export const SettingsButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 2.5rem;
`;

export const SaveButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 0 47%;
  font-size: 2rem;
`;
