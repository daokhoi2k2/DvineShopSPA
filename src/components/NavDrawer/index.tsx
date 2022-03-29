import { HomeIconFC, PlusIconFC } from "designs/icons/Components";
import { CloseIcon, PersonIcon } from "designs/icons/Drawer";
import SVG from "designs/SVG";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthModalBox, setNavDrawer } from "redux/actions/config";
import { RootState } from "redux/reducers";
import {
  AuthWrapper,
  CloseDrawer,
  ControlAuthItem,
  ControlAuthWrapper,
  GroupNav,
  IconAuth,
  IconAuthWrapper,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerInner,
  NavDrawerWrapper,
  NavItem,
  NavText,
  RestFixed,
} from "./styles";

const NavDrawer: React.FC = () => {
  const isNavDrawer = useSelector((state: RootState) => state.config.isNavDrawer);
  const dispatch = useDispatch();

  const handleCloseNavDrawer = () => {
    dispatch(setNavDrawer(false));
  };

  const handleShowAuthModalLogin = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: "login",
      })
    );
    handleCloseNavDrawer();
  };

  const handleShowAuthModalRegister = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: "register",
      })
    );
    handleCloseNavDrawer();
  };

  return (
    <NavDrawerWrapper isNavDrawer={isNavDrawer}>
      <NavDrawerInner className="NavDrawerTransition">
        <NavDrawerHeader>
          <AuthWrapper>
            <IconAuthWrapper>
              <IconAuth>
                <PersonIcon className="w-[18.5px] h-[18.5px] text-white" />
              </IconAuth>
            </IconAuthWrapper>
            <ControlAuthWrapper>
              <ControlAuthItem onClick={handleShowAuthModalLogin}>Đăng nhập</ControlAuthItem>
              <ControlAuthItem>/</ControlAuthItem>
              <ControlAuthItem onClick={handleShowAuthModalRegister}>Đăng ký</ControlAuthItem>
            </ControlAuthWrapper>
            <CloseDrawer onClick={handleCloseNavDrawer}>
              <CloseIcon className="w-[24.5px] h-[24.5px] text-white" />
            </CloseDrawer>
          </AuthWrapper>
        </NavDrawerHeader>
        <NavDrawerBody>
          <GroupNav>
            <NavItem to="/giai-tri">
              <HomeIconFC></HomeIconFC>
              <NavText>Trang chủ</NavText>
            </NavItem>
            <NavItem to="/giai-tri">
              <PlusIconFC></PlusIconFC>
              <NavText>Nạp tiền vào tài khoản</NavText>
            </NavItem>
          </GroupNav>
          <GroupNav>
            <NavItem to="/giai-tri">
              <SVG name="giaitri-25627" className="w-[17.5px] h-[17.5px]" />
              <NavText>Giải trí</NavText>
            </NavItem>
            <NavItem to="/giai-tri">
              <SVG name="lamviec-71000" className="w-[17.5px] h-[17.5px]" />
              <NavText>Làm việc</NavText>
            </NavItem>
            <NavItem to="/giai-tri">
              <SVG name="hoctap-68990" className="w-[17.5px] h-[17.5px]" />
              <NavText>Học tập</NavText>
            </NavItem>
          </GroupNav>
        </NavDrawerBody>
      </NavDrawerInner>
      <RestFixed onClick={handleCloseNavDrawer}></RestFixed>
    </NavDrawerWrapper>
  );
};

export default NavDrawer;
