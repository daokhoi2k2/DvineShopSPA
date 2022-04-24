import checkImageValid from 'common/functions/uploadFile';
import React, { BaseSyntheticEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import { FileUploadWrapper, ImgPreview } from './styles';

interface IFileUpload {
  onChange: (e: React.ChangeEvent<any>) => void;
  isPreviewImg?: boolean;
  value: any;
}

const FileUpload: React.FC<IFileUpload> = (props) => {
  const { onChange, isPreviewImg, value } = props;
  let previewImg: any = useRef();
  const handleChange = (e: BaseSyntheticEvent) => {
    const thumbnailFile = e.target.files[0]
    if (isPreviewImg) {
      previewImg.current = URL.createObjectURL(thumbnailFile);
    }

    const imageIsValid = checkImageValid(thumbnailFile, 5000);
    
    if(!imageIsValid) {
      toast.error("Hình ảnh không hợp lệ vui lòng chọn ảnh khác");
    } else {
      onChange(e as any);
    }
  };

  if (typeof value === 'string') {
    previewImg.current = `${process.env.REACT_APP_API_URL}/images/thumb_nails/${value}`;
  }

  if (value === null) {
    previewImg.current = '';
  }

  return (
    <FileUploadWrapper>
      {isPreviewImg && previewImg.current && (
        <ImgPreview src={previewImg.current} />
      )}
      <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Tải hình ảnh lên</span>
        <input onChange={handleChange} type="file" className="hidden" accept='image/*' />
      </label>
    </FileUploadWrapper>
  );
};

export default FileUpload;
