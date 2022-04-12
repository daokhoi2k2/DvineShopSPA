import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LabelTag, SelectionTag, SelectWrapper } from './styles';

interface IInput {
  placeholder: string;
  options: any;
  className?: string;
  onChange?: any;
  value?: any;
  selected?: any;
  name?: string;
  specifyFieldValue?: any;
  specifyFieldTitle?: any;
  noneSelect?: any;
  onChangeDispatch?: any;
  onChangeResetOtherValue?: any;
  formik?: any;
}

const Select: React.FC<IInput> = (props) => {
  const dispatch = useDispatch();
  const {
    placeholder,
    options,
    onChange,
    selected,
    name,
    specifyFieldValue,
    specifyFieldTitle,
    noneSelect,
    onChangeDispatch,
    onChangeResetOtherValue,
    formik,
    ...rest
  } = props;
  const selectedOption = options.find(
    (option: any) => option[specifyFieldValue || 'value'] === selected
  ) || {_id: '-1'}

  const handleOptionChange = (selectedOption: any) => {
    const selectedValue = selectedOption.target.value;
    if (onChangeDispatch) {
      dispatch(onChangeDispatch(selectedValue));
    }

    if(onChangeResetOtherValue) {
      onChangeResetOtherValue.forEach((name: string) => {
        formik?.setFieldValue(name, "")
      })
    }

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    onChange(changeEvent);
  };  

  return (
    <SelectWrapper {...rest}>
      <SelectionTag
        onChange={handleOptionChange}
        className={'selectCustomArrow'}
        value={selectedOption?.[specifyFieldValue || 'value']}
      >
        <option value={-1}>-</option>
        {options.map((option: any) => (
          <option
            key={option[specifyFieldValue] || option.value}
            value={option[specifyFieldValue] || option.value}
          >
            {option[specifyFieldTitle || "name"]}
          </option>
        ))}
      </SelectionTag>
      <LabelTag className="labelInputDynamic">{placeholder}</LabelTag>
    </SelectWrapper>
  );
};

export default Select;
