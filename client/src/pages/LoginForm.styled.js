import styled, { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";

export const GlobalStyle = createGlobalStyle`body {
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
}
`;

export const LoginContainer = styled.div`
  height: 60%;
`;

export const RulesContainer = styled.div`
  margin-top: -200px;
  border-top: 2px outset #cc2229;
  width: 100%;
`;

export const RulesDescription = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-left: -30px;
`;

export const RulesList = styled.li`
  padding-bottom: 10px;
`;

export const Logo = styled.img`
  box-sizing: border-box;
  width: 300px;
  height: 150px;
  display: block;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
  border-radius: 20px;
  padding: 0px 40px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const LogInTitle = styled.h1`
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
  background-color: white;
  border-radius: 50px 20px;

  &::placeholder {
    color: gray;
  }
  }
`;

export const LogInForm = styled.form`
  color: black;
`;

export const LogInLabel = styled.label`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

export const LogInButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  color: white;
  margin-top: 40px;
  background: #CC2229;
  height: 40px;
  // border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
}
`;

export const ErrorIcon = styled.img`
  position: absolute;
  margin-top: -50px;
  margin-left: 220px;
  height: 50px;

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
  margin-top: -55px;
  margin-left: 180px;
  height: 60px;

  &:hover {
    cursor: pointer;
  }
`;
