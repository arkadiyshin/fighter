import styled, { createGlobalStyle } from "styled-components";
import background from "assets/images/background.jpg";

export const GlobalStyle = createGlobalStyle`body {
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
}
`;

export const Logo = styled.img`
  box-sizing: border-box;
  // box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
  height: 60px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 70%;
`;

export const FormContainer = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  // background: #ecf0f3;
  margin: 5% auto;
  background-color: rgba(0, 0, 0, 0.61);
  backdrop-filter: blur(5px);
`;

export const SignUpTitle = styled.h1`
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: white;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  // box-shadow: inset 6px 6px 6px #cbced1, -6px -6px 6px white;
  background-color: white;

  &::placeholder {
    color: gray;
  }
  }
`;

export const SignUpForm = styled.form`
  color: black;
`;

export const SignUpLabel = styled.label`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

export const SignUpButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  color: white;
  margin-top: 40px;
  background: rgb(226, 0, 26);
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  transition: 0.5s;
}

&:hover {
  box-shadow: 6px 6px 6px white, -6px -6px 6px white;
`;

export const ErrorIcon = styled.img`
  position: absolute;
  margin-top: -75px;
  margin-left: 200px;
  height: 100px;

  &:hover {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  margin-top: -45px;
  margin-left: 100px;
  margin-right: 75px;
  border: solid red 2px;
  text-align: center;
  background-color: rgb(226, 0, 26);
  color: white;
  border-radius: 10px;
  font-size: 0.8rem;
  z-index: 1;
  padding: 5px;
`;

export const CheckBoxIcon = styled.img`
  position: absolute;
  margin-top: -50px;
  margin-left: 200px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;
