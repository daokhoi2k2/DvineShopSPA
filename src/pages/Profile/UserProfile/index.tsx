import Input from "components/Input";
import Select from "components/Select";
import { useFormik } from "formik";
import React from "react";
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
} from "./styles";

const UserProfile: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      cmnd: "",
      address: "",
      sex: 1,
      city: "",
      district: "",
      ward: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const fakeData = [
    {
      title: "Email",
      value: "daoducminhkhoi@gmail.com",
    },
    {
      title: "Tên đăng nhập",
      value: "mariokiller",
    },
    {
      title: "Họ và tên",
      value: "Khôi Đào Đức Minh",
    },
    {
      title: "Nhóm khách hàng",
      value: "Vip Vàng",
    },
    {
      title: "Số dư",
      value: "7.839đ",
    },
    {
      title: "Đã tích lũy",
      value: "5.713.550đ",
    },
    {
      title: "Ngày tham gia",
      value: "2017-06-24 18:45:17",
    },
  ];

  const selectSexData = [
    {
      value: 0,
      name: "-",
    },
    {
      value: 1,
      name: "Nam",
    },
    {
      value: 2,
      name: "Nữ",
    },
  ];

  const cityData = [
    {
      value: 0,
      name: "-",
    },
    {
      value: 1,
      name: "Thành phố Hồ Chí Minh",
    },
  ];

  const districtData = [
    {
      value: 0,
      name: "-",
    },
    {
      value: 1,
      name: "Thành phố Hồ Chí Minh",
    },
  ];

  const wardData = [
    {
      value: 0,
      name: "-",
    },
    {
      value: 1,
      name: "Xã Đông Thạnh",
    },
  ];

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
          <AvatarContent name="48384.jpg"></AvatarContent>
          <AvatarControlWrapper>
            <AvatarButtonWrapper>
              <AvatarButton htmlFor="fileAvatar">Sửa ảnh đại diện</AvatarButton>
            </AvatarButtonWrapper>
            <input type="file" id="fileAvatar" hidden />
            <HrY />
            <AvatarDescription>
              <p>Vui lòng chọn ảnh nhỏ hơn 5MB</p> <p> Chọn hình ảnh phù hợp, không phản cảm</p>
            </AvatarDescription>
          </AvatarControlWrapper>
        </AvatarWrapper>
        <Hr />
        <FormWrapper>
          <Title>Cá nhân</Title>
          <FormList>
            <Input
              className="mt-5"
              title="Họ và tên"
              defaultValue="Khôi Đào Đức Minh"
              name="fullName"
              onChange={formik.handleChange}
            />
            <Input
              className="mt-5"
              title="Số điện thoại"
              defaultValue="0979375204"
              name="phoneNumber"
              onChange={formik.handleChange}
            />
            <Input
              className="mt-5"
              title="Chứng minh nhân dân"
              defaultValue="079202018026"
              name="cmnd"
              onChange={formik.handleChange}
            />
            <Input
              className="mt-5"
              title="Số nhà / Đường"
              defaultValue="256/70/19K ĐT2"
              name="address"
              onChange={formik.handleChange}
            />
            <Select className="mt-5" title="Giới tính" data={selectSexData}></Select>
            <Select className="mt-5" title="Tỉnh / Thành phố" data={cityData}></Select>
            <Select className="mt-5" title="Quận / Huyện" data={districtData}></Select>
            <Select className="mt-5" title="Xã / Phường" data={wardData}></Select>
          </FormList>
          <SubmitBtn>Lưu thay đổi</SubmitBtn>
        </FormWrapper>
      </InfoUserWrapper>
    </UserProfileWrapper>
  );
};

export default UserProfile;
