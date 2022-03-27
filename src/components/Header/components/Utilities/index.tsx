import { FCGift, FCHand, FCPhone, FCVip } from 'designs/icons/Drawer';
import React from 'react';
import { UtiIco, UtiItem, UtiList, UtilitiesWrapper, UtiText } from './styles';

const Utilities: React.FC = () => {
    return (
        <UtilitiesWrapper>
            <UtiList>
                <UtiItem>
                    <UtiIco>
                        <FCPhone />
                    </UtiIco>
                    <UtiText>
                        Nạp thẻ & Tiện ích
                    </UtiText>
                </UtiItem>
                <UtiItem>
                    <UtiIco>
                        <FCGift />
                    </UtiIco>
                    <UtiText>
                        Giới thiệu bạn bè
                    </UtiText>
                </UtiItem>
                <UtiItem>
                    <UtiIco>
                        <FCHand />
                    </UtiIco>
                    <UtiText>
                        Liên hệ hợp tác
                    </UtiText>
                </UtiItem>
                <UtiItem>
                    <UtiIco>
                        <FCVip />
                    </UtiIco>
                    <UtiText>
                        Ưu đãi khách hàng VIP
                    </UtiText>
                </UtiItem>
            </UtiList>
        </UtilitiesWrapper>
    );
};

export default Utilities;