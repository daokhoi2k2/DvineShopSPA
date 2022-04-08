import React, { useState } from 'react';
import { ErrorMsg, InputTag, InputWrapper, LabelTag, Tooltip } from './styles';

interface IInput {
  title: string;
  value?: string;
  className?: string;
  name?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  defaultValue?: string;
  errorMsg?: string;
  touched?: boolean;
  isTooltip?: any;
}

const Input: React.FC<IInput> = (props) => {
  const {
    title,
    value,
    className = '',
    name,
    defaultValue,
    errorMsg,
    touched,
    isTooltip,
    ...rest
  } = props;

  return (
    <InputWrapper className={'group ' + className}>
      <InputTag
        isInvalid={errorMsg && touched}
        name={name}
        {...rest}
        className={'inputPeer' + (value || defaultValue ? ' isHaveValue' : '')}
        defaultValue={defaultValue}
        value={value}
      />
      <LabelTag isInvalid={errorMsg && touched} className="labelInputDynamic">
        {title}
      </LabelTag>
      {isTooltip && <Tooltip isError={!!errorMsg && !!touched}>{errorMsg}</Tooltip>}
    </InputWrapper>
  );
};

export default Input;
