import { useFormik } from "formik";
import * as Yup from "yup";
import { NEW_CONSTANT } from "../constants/constants";
import {
  GlobalStyle,
  Logo,
  LogInTitle,
  PasswordErrorIcon,
  UserNameErrorIcon,
  UserNameErrorMessage,
  PasswordErrorMessage,
  CheckBoxIcon,
  LogInForm,
  InputField,
  FormContainer,
  LogInButton,
  LoginContainer,
  RulesContainer,
  RulesDescription,
  RulesList,
  LogInDataError,
} from "../components/LoginForm.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const validationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string()
    .min(8, "Password must have 8 characters and more")
    .required(),
});

export const SignUpForm = () => {
  const [checkedEye, setCheckedEye] = useState(false);
  const [isHoveringUserName, setIsHoveringUserName] = useState(false);
  const [isHoveringPassword, setisHoveringPassword] = useState(false);
  const [isUserNameExist, setIsUserNameExist] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (values) => {
    api.post("/auth/signup", values).then((res) => {
      console.log(res);
      if (res.data === "Created") {
        navigate("/");
      } else if (res.data === "Such username already exists") {
        setIsUserNameExist(true);
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
          <LogInTitle>Sign Up</LogInTitle>
          <LogInForm onSubmit={formik.handleSubmit} noValidate>
            <InputField
              {...formik.getFieldProps("username")}
              placeholder="Username"
            />
            {formik.errors.username && formik.touched.username && (
              <>
                <UserNameErrorIcon
                  src={NEW_CONSTANT.errorMark}
                  onMouseOver={() => setIsHoveringUserName(true)}
                  onMouseOut={() => setIsHoveringUserName(false)}
                />
                {isHoveringUserName && (
                  <UserNameErrorMessage>
                    {formik.errors.username}
                  </UserNameErrorMessage>
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
                <PasswordErrorIcon
                  src={NEW_CONSTANT.errorMark}
                  onMouseOver={() => setisHoveringPassword(true)}
                  onMouseOut={() => setisHoveringPassword(false)}
                />
                {isHoveringPassword && (
                  <PasswordErrorMessage>
                    {formik.errors.password}
                  </PasswordErrorMessage>
                )}
              </>
            )}
            <CheckBoxIcon
              src={checkedEye ? NEW_CONSTANT.openEye : NEW_CONSTANT.closedEye}
              onClick={() => setCheckedEye(!checkedEye)}
            />
            {isUserNameExist ? (
              <LogInDataError>Such username already exists</LogInDataError>
            ) : null}
            <LogInButton type="submit" disabled={formik.isSubmitting}>
              Sign up
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
