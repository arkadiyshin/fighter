import { useFormik } from "formik";
import * as Yup from "yup";
import { NEW_CONSTANT } from "../constants/constants";
// import { useDispatch, useSelector } from "react-redux";
import {} from "./LoginForm.styled";
import {
  GlobalStyle,
  Logo,
  LogInTitle,
  SignUpButton,
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
} from "./LoginForm.styled";
import axios from "axios";
// import {
//   handleIsLoggedIn,
//   handleUserData,
//   signInCheckedEye,
//   signInIsEmailHovered,
//   signInIsPasswordHovered,
// } from "../../redux/inspectorsSlice";
// import { RootState } from "redux/store";
import { useState } from "react";

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
  // const { checkedEye, isHoveringEmail, isHoveringPassword } = useSelector(
  //   (state) => state.inspectorsSlice
  // );
  // const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.inspectorsSlice.userData);

  // const handleSignIn = (values) => {
  //   const response = login.checkTheUser(values.email, values.password);
  //   console.log(response);

  //   dispatch(handleUserData(response));
  // };

  const handleSignIn = (values) => {};

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
