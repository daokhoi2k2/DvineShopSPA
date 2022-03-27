import { CardIcon, DiscIcon, EyeIcon, FlameIcon, MapIcon } from 'designs/icons/Drawer';
import React from 'react';
import { IconControl, ItemControl, SubControlWrapper, TextControl } from './styles';

const SubControl: React.FC = () => {
    return (
        <SubControlWrapper>
          <ItemControl>
            <IconControl>
              <EyeIcon className="w-[21px] h-[21px] text-white" />
            </IconControl>
            <TextControl>Sản phẩm bạn vừa xem</TextControl>
          </ItemControl>
          <ItemControl>
            <IconControl>
              <FlameIcon className="w-[21px] h-[21px] text-white" />
            </IconControl>
            <TextControl>Sản phẩm mua nhiều</TextControl>
          </ItemControl>
          <ItemControl>
            <IconControl>
              <DiscIcon className="w-[21px] h-[21px] text-white" />
            </IconControl>
            <TextControl>Sản phẩm khuyến mãi</TextControl>
          </ItemControl>
          <ItemControl>
            <IconControl>
              <MapIcon className="w-[21px] h-[21px] text-white" />
            </IconControl>
            <TextControl>Đại lý giao dịch</TextControl>
          </ItemControl>
          <ItemControl>
            <IconControl>
              <CardIcon className="w-[21px] h-[21px] text-white" />
            </IconControl>
            <TextControl>Hình thức thanh toán</TextControl>
          </ItemControl>
        </SubControlWrapper>
    );
};

export default SubControl;