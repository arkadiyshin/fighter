import { useFormik } from "formik";
import * as Yup from "yup";
import { NEW_CONSTANT } from "../constants/constants";
import {
  GlobalStyle,
  Logo,
  LogInTitle,  
  ErrorIcon,
  ErrorMessage,
  CheckBoxIcon,
  LogInForm,
  InputField,
  FormContainer,
  LogInButton,
  LoginContainer,
  RulesContainer,
  RulesDescription,
  RulesList,
  RegistrationLink,
} from "../components/LoginForm.styled";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string()
    .min(8, "Password must have 8 characters and more")
    .required(),
});

export const LoginForm = () => {
  const [checkedEye, setCheckedEye] = useState(false);
  const [isHoveringUserName, setIsHoveringUserName] = useState(false);
  const [isHoveringPassword, setisHoveringPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = (values) => {
    axios.post("http://localhost:5001/auth/login", values).then((res) => {
      if (res.data === "password right") {
        navigate("/main");
      }
    });
  };

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      handleSignIn(values);
    },
  });
  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <Logo src={NEW_CONSTANT.logo} />
        <FormContainer>
          <LogInTitle>Log In</LogInTitle>
          <LogInForm onSubmit={formik.handleSubmit} noValidate>
            <InputField
              {...formik.getFieldProps("username")}
              placeholder="Username"
            />
            {formik.errors.username && formik.touched.username && (
              <>
                <ErrorIcon
                  src={NEW_CONSTANT.errorMark}
                  onMouseOver={() => setIsHoveringUserName(true)}
                  onMouseOut={() => setIsHoveringUserName(false)}
                />
                {isHoveringUserName && (
                  <ErrorMessage>{formik.errors.username}</ErrorMessage>
                )}
              </>
            )}
            <br />
            <InputField
              {...formik.getFieldProps("password")}
              type={checkedEye ? "text" : "password"}
              placeholder="Password"
            />
            {formik.errors.password && formik.touched.password && (
              <>
                <ErrorIcon
                  src={NEW_CONSTANT.errorMark}
                  onMouseOver={() => setisHoveringPassword(true)}
                  onMouseOut={() => setisHoveringPassword(false)}
                />
                {isHoveringPassword && (
                  <ErrorMessage>{formik.errors.password}</ErrorMessage>
                )}
              </>
            )}
            <CheckBoxIcon
              src={checkedEye ? NEW_CONSTANT.openEye : NEW_CONSTANT.closedEye}
              onClick={() => setCheckedEye(!checkedEye)}
            />
            <RegistrationLink onClick={() => navigate("/signup")}>
              Create new account
            </RegistrationLink>
            <LogInButton type="submit" disabled={formik.isSubmitting}>
              Login
            </LogInButton>
          </LogInForm>
        </FormContainer>
      </LoginContainer>
      <RulesContainer>
        <LogInTitle>Rules</LogInTitle>
        <RulesDescription>
          <RulesList>Rule No.1</RulesList>
          <RulesList>Rule No.2</RulesList>
          <RulesList>Rule No.3</RulesList>
          <RulesList>Rule No.4</RulesList>
        </RulesDescription>
      </RulesContainer>
    </>
  );
};
