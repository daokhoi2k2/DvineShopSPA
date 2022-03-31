import React, { useState } from 'react';
import { LabelTag, SelectionTag, SelectWrapper } from './styles';
import img from "assets/svg/arrowDown.svg";


interface IInput {
    title: string;
    data: any;
    className?: string;
}

const Select:React.FC<IInput> = (props) => {
    const {title, data, ...rest} = props;
    return (
        <SelectWrapper {...rest} >
            <SelectionTag className={"selectCustomArrow"}>
                {
                    data.map((option: any) => <option key={option.value} value={option.value}>{option.name}</option>)
                }
            </SelectionTag>
            <LabelTag className="labelInputDynamic">{title}</LabelTag>
        </SelectWrapper>
    );
};

export default Select;