import NavDrawer from 'components/Admin/NavDrawer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Layout, Wrapper } from './styles';

const LayoutAdmin = () => {
  return (
    <Wrapper>
      <Layout>
        <NavDrawer></NavDrawer>
        <Container className="w-full">
            <Outlet />
        </Container>
      </Layout>
    </Wrapper>
  );
};

export default LayoutAdmin;
