import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { ErrorMsg, InputTag, InputWrapper, LabelTag, Tooltip } from './styles';
interface IInput {
  title: string;
  value?: string;
  className?: string;
  name?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<any>, callback?: Function) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  defaultValue?: string;
  errorMsg?: any;
  touched?: any;
  isTooltip?: any;
  readOnly?: boolean;
  disabled?: boolean;
  handleDependentFieldOf?: Function;
}

const Input: React.FC<IInput> = (props) => {
  const {
    title,
    value,
    className = '',
    name,
    defaultValue,
    errorMsg,
    onChange,
    touched,
    isTooltip,
    handleDependentFieldOf,
    ...rest
  } = props;

  const formik = useFormikContext();

  const handleChange = (e: React.ChangeEvent<any>) => {
    // handleDependentFieldOf && handleDependentFieldOf(formik)
    if (handleDependentFieldOf) {
      handleDependentFieldOf(e.target.value, formik);
    }
    onChange && onChange(e);
  };

  return (
    <InputWrapper className={'group ' + className}>
      <InputTag
        isInvalid={errorMsg && touched}
        name={name}
        onChange={handleChange}
        {...rest}
        className={'inputPeer' + (value || defaultValue ? ' isHaveValue' : '')}
        defaultValue={defaultValue}
        value={value}
      />
      <LabelTag isInvalid={errorMsg && touched} className="labelInputDynamic">
        {title}
      </LabelTag>
      {isTooltip && (
        <Tooltip isError={!!errorMsg && !!touched}>{errorMsg}</Tooltip>
      )}
    </InputWrapper>
  );
};

export default Input;
