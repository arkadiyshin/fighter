import { useFormik } from "formik";
import * as Yup from "yup";
import { NEW_CONSTANT } from "./../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  GlobalStyle,
  Logo,
  FormContainer,
  SignUpTitle,
  SignUpForm,
  InputField,
  SignUpButton,
  ErrorIcon,
  ErrorMessage,
  CheckBoxIcon,
} from "./LoginForm.styled";
import {
  handleIsLoggedIn,
  handleUserData,
  signInCheckedEye,
  signInIsEmailHovered,
  signInIsPasswordHovered,
} from "../../redux/inspectorsSlice";
// import { RootState } from "redux/store";
// import { Api, Users } from "api/api";
// import { useEffect } from "react";

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^([a-zA-Z0-9_\-\.]+@remondis-digital.com)/,
      "Email input must end with @remondis-digital.com"
    )
    .email()
    .required(),
  password: Yup.string()
    .min(8, "Password must have 8 characters and more")
    .required(),
});

export const LoginForm = (): any => {
  const { checkedEye, isHoveringEmail, isHoveringPassword } = useSelector(
    (state: RootState) => state.inspectorsSlice
  );
  const dispatch = useDispatch();
  const userInfo: any =
    useSelector < RootState > ((state) => state.inspectorsSlice.userData);
  const login = new Api();

  interface UsersValidation {
    email: string;
    password: string;
  }

  const handleSignIn = (values: UsersValidation) => {
    const response = login.checkTheUser(values.email, values.password);
    console.log(response);

    dispatch(handleUserData(response));
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    // validationSchema,
    onSubmit: (values: UsersValidation) => {
      handleSignIn(values);
    },
  });

  useEffect(() => {
    if (userInfo.position) dispatch(handleIsLoggedIn());
  }, [userInfo]);

  return (
    <>
      <GlobalStyle />
      <FormContainer>
        <Logo src={NEW_CONSTANT.companyLogo} />
        <SignUpTitle>Sign In</SignUpTitle>
        <SignUpForm onSubmit={formik.handleSubmit} noValidate>
          <InputField {...formik.getFieldProps("email")} placeholder="Email" />
          {formik.errors.email && formik.touched.email && (
            <>
              <ErrorIcon
                src={NEW_CONSTANT.errorMark}
                onMouseOver={() => dispatch(signInIsEmailHovered())}
                onMouseOut={() => dispatch(signInIsEmailHovered())}
              />
              {isHoveringEmail && (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
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
                onMouseOver={() => dispatch(signInIsPasswordHovered())}
                onMouseOut={() => dispatch(signInIsPasswordHovered())}
              />
              {isHoveringPassword && (
                <ErrorMessage>{formik.errors.password}</ErrorMessage>
              )}
            </>
          )}
          <CheckBoxIcon
            src={checkedEye ? NEW_CONSTANT.openEye : NEW_CONSTANT.closedEye}
            onClick={() => dispatch(signInCheckedEye())}
          />
          <SignUpButton type="submit" disabled={formik.isSubmitting}>
            Login
          </SignUpButton>
        </SignUpForm>
      </FormContainer>
    </>
  );
};
