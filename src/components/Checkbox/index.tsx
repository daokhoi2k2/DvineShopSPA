import React, { ChangeEvent } from 'react';

interface ICheckbox {
  name: string;
  isChecked?: boolean;
  placeholder: string;
  onChange: (event: any) => void;
  onBlur?: (event: React.FocusEvent) => void;
}

const Checkbox: React.FC<ICheckbox> = ({
  name,
  isChecked,
  placeholder,
  onBlur,
  onChange,
}) => {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const changeEvent = {
        target: {
          name,
          value: true,
        },
      };
      onChange(changeEvent);
    } else {
      const changeEvent = {
        target: {
          name,
          value: false,
        },
      };
      onChange(changeEvent);
    }
  };
  return (
    <div className="form-check">
      <input
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        onChange={handleChangeCheckbox}
        id={name}
        onBlur={onBlur}
        checked={isChecked}
      />
      <label
        className="form-check-label inline-block text-gray-800"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Checkbox;
