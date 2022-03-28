import React from "react";
import { Discover, Main, Sub, Subtitle, Title, TitleListWrapper } from "./styles";

interface IProps {
  title: string;
  discover?: boolean;
  subTitle?: string;
}

const TitleList: React.FC<IProps> = ({ title, discover, subTitle }) => {
  return (
    <TitleListWrapper>
      <Main>
        <Title>{title}</Title>
        {discover && <Discover>Khám phá</Discover>}
      </Main>
      <Sub>
        <Subtitle>{subTitle}</Subtitle>
      </Sub>
    </TitleListWrapper>
  );
};

export default TitleList;
