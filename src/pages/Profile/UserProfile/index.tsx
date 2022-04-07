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
      if(values.city === "-1") {
        newUserInfo.district = "-1";
        newUserInfo.ward = "-1";
      }

      if(values.district === "-1") {
        newUserInfo.ward = "-1";
      }

      dispatch(updateUser({ data: newUserInfo, id: userInfo?._id }));
    },
    enableReinitialize: true, // Khởi tạo formik lúc đó chưa có userInfo
  });

  useEffect(() => {
    dispatch(getCityLocation());

    if(userInfo?.city !== "-1" && Object.keys(userInfo).length) {
      dispatch(getAllDistrictByCity(userInfo?.city));
    }

    if(userInfo?.district !== "-1" && Object.keys(userInfo).length) {
      dispatch(getAllWardByDistrict(userInfo?.district));
    }

  }, [userInfo.city, userInfo.district]);

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

  // Reset value hidden when location change but value still have in formik
  // useEffect(() => {
  //   formik.setFieldValue('district', formik.initialValues.district);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.district]);

  // useEffect(() => {
  //   formik.setFieldValue('ward', formik.initialValues.ward);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.ward]);

  return (
    <UserProfileWrapper>
      <InfoUserWrapper>
        <Title>Tổng quan</Title>
        <ListInfo>
          {fakeData.map((item) => (
            <InfoItem key={item.title}>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoValue>{item.value}</InfoValue>
            </InfoItem>
          ))}
        </ListInfo>
        <Hr />
        <AvatarWrapper>
          <AvatarContent
            src={require('../../../assets/images/trend-avatar-1-73987.jpg')}
          ></AvatarContent>
          <AvatarControlWrapper>
            <AvatarButtonWrapper>
              <AvatarButton htmlFor="fileAvatar">Sửa ảnh đại diện</AvatarButton>
            </AvatarButtonWrapper>
            <input type="file" id="fileAvatar" hidden />
            <HrY />
            <AvatarDescription>
              <p>Vui lòng chọn ảnh nhỏ hơn 5MB</p>{' '}
              <p> Chọn hình ảnh phù hợp, không phản cảm</p>
            </AvatarDescription>
          </AvatarControlWrapper>
        </AvatarWrapper>
        <Hr />
        <FormWrapper>
          <Title>Cá nhân</Title>
          <FormList onSubmit={formik.handleSubmit}>
            <Input
              className="mt-5"
              title="Họ và tên"
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            <Input
              className="mt-5"
              title="Số điện thoại"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            <Input
              className="mt-5"
              title="Chứng minh nhân dân"
              name="citizenIdentificationNumber"
              onChange={formik.handleChange}
              value={formik.values.citizenIdentificationNumber}
            />
            <Input
              className="mt-5"
              title="Số nhà / Đường"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <Select
              name="sex"
              className="mt-5"
              placeholder="Giới tính"
              options={selectSexData}
              onChange={formik.handleChange}
              selected={formik.values.sex}
            ></Select>
            <Select
              className="mt-5"
              name="city"
              placeholder="Tỉnh / Thành phố"
              options={location.city}
              onChange={formik.handleChange}
              selected={formik.values.city}
              specifyFieldValue="matp"
              noneSelect={{ value: '-1', name: '-' }}
              onChangeDispatch={getAllDistrictByCity}
            ></Select>
            <Select
              className="mt-5"
              placeholder="Quận / Huyện"
              name="district"
              options={location.district}
              onChange={formik.handleChange}
              selected={formik.values.district}
              specifyFieldValue="maqh"
              noneSelect={{ value: '-1', name: '-' }}
              onChangeDispatch={getAllWardByDistrict}
            ></Select>
            <Select
              name="ward"
              className="mt-5"
              placeholder="Xã / Phường"
              options={location.ward}
              onChange={formik.handleChange}
              selected={formik.values.ward}
              specifyFieldValue="xaid"
              noneSelect={{ value: '-1', name: '-' }}
            ></Select>
            <SubmitBtn type="submit">Lưu thay đổi</SubmitBtn>
          </FormList>
        </FormWrapper>
      </InfoUserWrapper>
    </UserProfileWrapper>
  );
};

export default UserProfile;
