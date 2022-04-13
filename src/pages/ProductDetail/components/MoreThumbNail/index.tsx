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

const MoreThumbNail: React.FC<IMoreThumbNail> = (props) => {
  const { thumb_nail } = props;
  return (
    <MoreThumbNailWrapper>
      <ThumbNailInner>
        <ThumbNailPrimary>
          {thumb_nail && (
            <img
              className="rounded-md "
              src={`${process.env.REACT_APP_API_URL}/${thumb_nail}`}
              alt="..."
            />
          )}
        </ThumbNailPrimary>
        <ThumNailMoreButton>Xem thêm ảnh</ThumNailMoreButton>
      </ThumbNailInner>
    </MoreThumbNailWrapper>
  );
};

export default MoreThumbNail;
