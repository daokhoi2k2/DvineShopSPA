import React, { useState } from 'react';
import { InputTag, InputWrapper, LabelTag } from './styles';

interface IInput {
    title: string;
    value?: string;
    className?: string;
    name?: string;
    id?: string;
    onChange?: (e: React.ChangeEvent<any>) => void;
    onBlur?: (e: React.FocusEvent<any, Element>) => void;
    defaultValue?: string;
}

const Input:React.FC<IInput> = (props) => {
    const {title, value, className, defaultValue, ...rest} = props;

    return (
        <InputWrapper className={className}>
            <InputTag {...rest} className={"inputPeer" + (value || defaultValue ? " isHaveValue" : "")} defaultValue={defaultValue} value={value} />
            <LabelTag className="labelInputDynamic">{title}</LabelTag>
        </InputWrapper>
    );
};

export default Input;