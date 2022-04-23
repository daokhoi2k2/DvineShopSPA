import ImgFallBack, { ImgFallBackLoading } from 'designs/ImgFallback';
import React from 'react';
import {
  MoreThumbNailWrapper,
  ThumbNailInner,
  ThumbNailPrimary,
  ThumNailMoreButton,
} from './styles';

interface IMoreThumbNail {
  thumb_nail: string;
}

const MoreThumbNailLoading = () => {
  return (
    <ThumbNailInner>
      <ThumbNailPrimary>
        <ImgFallBackLoading />
      </ThumbNailPrimary>
      <ThumNailMoreButton>Xem thêm ảnh</ThumNailMoreButton>
    </ThumbNailInner>
  );
};

const MoreThumbNail: React.FC<IMoreThumbNail> = (props) => {
  const { thumb_nail } = props;
  return (
    <MoreThumbNailWrapper>
      {!thumb_nail ? (
        <MoreThumbNailLoading />
      ) : (
        <ThumbNailInner>
          <ThumbNailPrimary>
            <ImgFallBack
              src={`${process.env.REACT_APP_API_URL}/${thumb_nail}`}
              alt={thumb_nail}
            />
          </ThumbNailPrimary>
          <ThumNailMoreButton>Xem thêm ảnh</ThumNailMoreButton>
        </ThumbNailInner>
      )}
    </MoreThumbNailWrapper>
  );
};

export default MoreThumbNail;
