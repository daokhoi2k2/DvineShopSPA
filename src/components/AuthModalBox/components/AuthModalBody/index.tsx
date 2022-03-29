import SVG from "designs/SVG";
import React from "react";
import LoginBox from "../LoginBox";
import RegisterBox from "../RegisterBox";
import {
  AuthModalBodyWrapper,
} from "./styles";

interface IProps {
  boxName?: "login" | "register";
  isShowBox: boolean;
}

const AuthModalBody: React.FC<IProps> = ({ boxName, isShowBox }) => {
  return (
    <AuthModalBodyWrapper>
      {boxName === "login" ?  <LoginBox /> : <RegisterBox />}
    </AuthModalBodyWrapper>
  );
};

export default AuthModalBody;
