import React, { useRef } from 'react';
import { FileUploadWrapper, ImgPreview } from './styles';

interface IFileUpload {
  onChange: (e: React.ChangeEvent<any>) => void;
  isPreviewImg?: boolean;
  value: any;
}

const FileUpload: React.FC<IFileUpload> = (props) => {
  const { onChange, isPreviewImg, value } = props;
  let previewImg: any = useRef();
  const handleChange = (e: any) => {
    if (isPreviewImg) {
      previewImg.current = URL.createObjectURL(e.target.files[0]);
      console.log('Change', previewImg);
    }
    onChange(e);
  };

  return (
    <FileUploadWrapper>
      {!value && !previewImg.current && (
        <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">
            Tải hình ảnh lên
          </span>
          <input onChange={handleChange} type="file" className="hidden" />
        </label>
      )}

      {value && isPreviewImg && previewImg.current && (
        <ImgPreview src={previewImg.current} />
      )}
    </FileUploadWrapper>
  );
};

export default FileUpload;
