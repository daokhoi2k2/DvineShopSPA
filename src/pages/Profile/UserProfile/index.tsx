import Input from 'components/Input';
import Select from 'components/Select';
import { FastField, useFormik } from 'formik';
import useAuth from 'hooks/useAuth';
import React, { useEffect, useMemo } from 'react';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import {
  AvatarButton,
  AvatarButtonWrapper,
  AvatarContent,
  AvatarControlWrapper,
  AvatarDescription,
  AvatarWrapper,
  FormList,
  FormWrapper,
  Hr,
  HrY,
  InfoItem,
  InfoTitle,
  InfoUserWrapper,
  InfoValue,
  ListInfo,
  SubmitBtn,
  Title,
  UserProfileWrapper,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllDistrictByCity,
  getAllWardByDistrict,
  getCityLocation,
} from 'redux/actions/location';
import { RootState } from 'redux/reducers';
import { updateUser } from 'redux/actions/user';
import { setAuthModalBox } from 'redux/actions/config';

const UserProfile: React.FC = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location);
  const userInfo: any = auth.accountInfo;

  const formik = useFormik({
    initialValues: {
      fullName: userInfo?.fullName || '',
      phoneNumber: userInfo?.phoneNumber || '',
      citizenIdentificationNumber: userInfo?.citizenIdentificationNumber || '',
      address: userInfo?.address || '',
      sex: userInfo?.sex || '-1',
      city: userInfo?.city || '-1',
      district: userInfo?.district || '-1',
      ward: userInfo?.ward || '-1',
    },
    onSubmit: (values) => {
      const newUserInfo = values;
      if (values.city === '-1') {
        newUserInfo.district = '-1';
        newUserInfo.ward = '-1';
      }

      if (values.district === '-1') {
        newUserInfo.ward = '-1';
      }

      dispatch(updateUser({ data: newUserInfo, id: userInfo?._id }));
    },
    enableReinitialize: true, // Khởi tạo formik lúc đó chưa có userInfo
  });

  useEffect(() => {
    if (auth.isAuth) {
      dispatch(getCityLocation());

      if (
        userInfo?.city &&
        userInfo?.city !== '-1' &&
        Object.keys(userInfo).length
      ) {
        dispatch(getAllDistrictByCity(userInfo?.city));
      }

      if (
        userInfo?.district &&
        userInfo?.district !== '-1' &&
        Object.keys(userInfo).length
      ) {
        dispatch(getAllWardByDistrict(userInfo?.district));
      }
    }
  }, [userInfo?.city, userInfo?.district]);

  const fakeData = useMemo(
    () => [
      {
        title: 'Email',
        value: userInfo?.email || '',
      },
      {
        title: 'Tên đăng nhập',
        value: userInfo?.username || '',
      },
      {
        title: 'Họ và tên',
        value: userInfo?.fullName || '',
      },
      {
        title: 'Nhóm khách hàng',
        value: userInfo?.membership || '',
      },
      {
        title: 'Số dư',
        value: (
          <NumberFormat
            value={userInfo?.balance || 0}
            displayType={'text'}
            decimalSeparator=","
            thousandSeparator="."
            suffix={'đ'}
          />
        ),
      },
      {
        title: 'Đã tích lũy',
        value: (
          <NumberFormat
            value={userInfo?.accumulated || 0}
            displayType={'text'}
            decimalSeparator=","
            thousandSeparator="."
            suffix={'đ'}
          />
        ),
      },
      {
        title: 'Ngày tham gia',
        value: moment(userInfo?.createdAt).format('YYYY-DD-MM hh:mm:ss'),
      },
    ],
    [userInfo]
  );

  const selectSexData = [
    {
      value: '0',
      name: 'Nữ',
    },
    {
      value: '1',
      name: 'Nam',
    },
  ];

  const handleOpenLogin = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: 'login',
      })
    );
  };

  return (
    <UserProfileWrapper>
      <InfoUserWrapper>
       
      </InfoUserWrapper>
    </UserProfileWrapper>
  );
};

export default UserProfile;
