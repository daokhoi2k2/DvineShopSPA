import NavDrawer from "components/Admin/NavDrawer";
import TopHeader from "components/Admin/TopHeader";
import React from "react";

import { Container, Layout, Wrapper } from "./styles";

const Overview: React.FC = () => {


  return (
    <Wrapper>
      <Layout>
        <NavDrawer>
          
        </NavDrawer>
        <Container>
          <TopHeader subBreadCumb="Bảng điều khiển" mainBreadCumb="Tổng quan">

          </TopHeader>
        </Container>
      </Layout>
    </Wrapper>
  );
};

export default Overview;
