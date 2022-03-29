import { CloseIcon } from 'designs/icons/Drawer';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthModalBox } from 'redux/actions/config';
import { RootState } from 'redux/reducers';
import AuthModalBody from './components/AuthModalBody';
import { AuthClose, AuthControl, AuthModalBoxInner, AuthModalBoxWrapper, AuthModalHeader, AuthTitle } from './styles';

const AuthModalBox: React.FC = () => {
    const AuthModalBox = useSelector((state: RootState) => state.config.AuthModalBox);
    const dispatch = useDispatch();

    const handleCloseAuthModalBox = () => {
        dispatch(setAuthModalBox({
            isShow: false
        }));
    }

    const handleShowAuthModalLogin = () => {
        dispatch(setAuthModalBox({
            isShow: true,
            boxName: "login",
        }));
    }

    const handleShowAuthModalRegister = () => {
        dispatch(setAuthModalBox({
            isShow: true,
            boxName: "register",
        }));
    }

    return (
        <AuthModalBoxWrapper isAuthModalBox={AuthModalBox.isShow}>
            <AuthModalBoxInner>
                <AuthModalHeader>
                    <AuthControl>
                        <AuthTitle onClick={handleShowAuthModalLogin} active={AuthModalBox.boxName === "login"}>
                            Đăng nhập
                        </AuthTitle>
                        <AuthTitle onClick={handleShowAuthModalRegister} active={AuthModalBox.boxName === "register"}>
                            Đăng ký
                        </AuthTitle>
                    </AuthControl>
                    <AuthClose>
                        <CloseIcon onClick={handleCloseAuthModalBox} className='w-[17.5px] h-[17.5px] cursor-pointer'/>
                    </AuthClose>
                </AuthModalHeader>
                <AuthModalBody isShowBox={AuthModalBox.isShow} boxName={AuthModalBox.boxName}>

                </AuthModalBody>
            </AuthModalBoxInner>
        </AuthModalBoxWrapper>
    );
};

export default AuthModalBox;