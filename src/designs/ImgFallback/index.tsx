import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface IImgFallBack {
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  src: string;
  isStaticImg?: boolean;
  isSkeleton?: boolean;
}

const ImgFallBackLoading: React.FC = (props) => {
  return (
    <div className="rounded relative pt-[50%] bg-fallback">
      <Skeleton className='rounded-md absolute w-full h-full top-0' />
    </div>
  );
};

const ImgFallBack: React.FC<IImgFallBack> = (props) => {
  const { className = '', alt, src, isStaticImg = false, ...rest } = props;
  return (
    <div className="relative pt-[50%] bg-fallback">
      <img
        onLoad={(e: any) => {
          e.target.parentElement.classList.remove('bg-fallback');
        }}
        onError={(e: any) => {
          e.target.parentElement.classList.remove('bg-fallback');
        }}
        alt={alt}
        className={`rounded-md absolute w-full h-full top-0 ${className}`}
        src={isStaticImg ? require(`../../assets/images/${src}`) : src}
        {...rest}
      />
    </div>
  );
};

export { ImgFallBackLoading };
export default ImgFallBack;
