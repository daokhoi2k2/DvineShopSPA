import React from "react";
import {
  InfoItem,
  InfoTitle,
  InfoUserWrapper,
  InfoValue,
  ListInfo,
  Title,
  UserProfileWrapper,
} from "./styles";

const UserProfile = () => {
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
      </InfoUserWrapper>
    </UserProfileWrapper>
  );
};

export default UserProfile;
