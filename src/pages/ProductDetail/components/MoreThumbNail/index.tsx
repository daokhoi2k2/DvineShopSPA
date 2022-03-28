import React from 'react';
import { MoreThumbNailWrapper, ThumbNailInner, ThumbNailPrimary, ThumNailMoreButton } from './styles';

const MoreThumbNail: React.FC = () => {
    return (
        <MoreThumbNailWrapper>
            <ThumbNailInner>
                <ThumbNailPrimary>
                    <img className="rounded-md " src="https://cdn.divineshop.vn/image/catalog/Anh/Banner/NETFLIX1406.png?hash=1623646686" alt="..." />
                </ThumbNailPrimary>
                <ThumNailMoreButton>
                    Xem thêm ảnh
                </ThumNailMoreButton>
            </ThumbNailInner>
        </MoreThumbNailWrapper>
    );
};

export default MoreThumbNail;