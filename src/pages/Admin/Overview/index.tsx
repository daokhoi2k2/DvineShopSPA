import NavDrawer from "components/Admin/NavDrawer";
import TopHeader from "components/Admin/TopHeader";
import Input from "components/Input";
import React, { useState }  from "react";
import {
  Container,
  Content,
  ControlUIWrapper,
  Layout,
  SearchInput,
  Wrapper,
} from "./styles";

const Overview: React.FC = () => {  
  const [searchValue, setSearchValue] = useState("");

  const onBlurSearch = () => {
    console.log(searchValue);
  }

  return (
    <Wrapper>
      <Layout>
        <NavDrawer></NavDrawer>
        <Container>
          <TopHeader
            subBreadCumb="Bảng điều khiển"
            mainBreadCumb="Tổng quan"
          ></TopHeader>
          <Content>
            <ControlUIWrapper>
              <SearchInput>
                <Input
                  title="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  name="search"
                  onBlur={onBlurSearch}
                />
              </SearchInput>
            </ControlUIWrapper>
          </Content>
        </Container>
      </Layout>
    </Wrapper>
  );
};

export default Overview;
