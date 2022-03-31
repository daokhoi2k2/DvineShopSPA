import React, { useState } from 'react';
import { string } from 'yup';
import { DateSelectionTag, LabelTag, SelectWrapper } from './styles';


interface IDateSelect {
    title: string;
    className?: string;
    name?: string;
    id?: string;
    onChange?: (e: React.ChangeEvent<any>) => void;
    onBlur?: (e: React.FocusEvent<any, Element>) => void;
}

const DateSelect:React.FC<IDateSelect> = (props) => {
    const {title, className, ...rest} = props;
    return (
        <SelectWrapper className={className}>
            <DateSelectionTag {...rest} type="date" placeholder="dd-mm-yyyy">
            </DateSelectionTag> 
            <LabelTag className="labelInputDynamic">{title}</LabelTag>
        </SelectWrapper>
    );
};

export default DateSelect;