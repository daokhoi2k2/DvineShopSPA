import TitleList from 'components/TitleList';
import { ProductInner, ProductListWrapper } from 'pages/Home/styles';
import React from 'react';
import { BoxItem, BoxItemContent, BoxItemLayout, ListBox } from './styles';

const HotKeyword: React.FC = () => {
  return (
    <ProductListWrapper>
      <ProductInner>
        <TitleList title="Từ khóa nổi bật" />
        <ListBox>
          <BoxItem>
            <BoxItemLayout className="bg-[#3D5A80]" to="/search?q=Làm+việc">
              <BoxItemContent>Làm việc</BoxItemContent>
            </BoxItemLayout>
          </BoxItem>
          <BoxItem>
            <BoxItemLayout className="bg-[#98C1D9]" to="/search?q=Giải+trí">
              <BoxItemContent>Giải trí</BoxItemContent>
            </BoxItemLayout>
          </BoxItem>
          <BoxItem>
            <BoxItemLayout className="bg-[#EE6C4D]" to="/search?q=Học+tập">
              <BoxItemContent>Học tập</BoxItemContent>
            </BoxItemLayout>
          </BoxItem>
          <BoxItem>
            <BoxItemLayout className="bg-[#293241]" to="/search?q=Spotify">
              <BoxItemContent>Spotify</BoxItemContent>
            </BoxItemLayout>
          </BoxItem>
          <BoxItem>
            <BoxItemLayout className="bg-[#545B67]" to="/search?q=Wallet">
              <BoxItemContent>Wallet</BoxItemContent>
            </BoxItemLayout>
          </BoxItem>
          <BoxItem>
            <BoxItemLayout className="bg-[#767C85]" to="/search?q=Youtube">
              <BoxItemContent>Youtube</BoxItemContent>
            </BoxItemLayout>
          </BoxItem>
        </ListBox>
      </ProductInner>
    </ProductListWrapper>
  );
};

export default HotKeyword;
