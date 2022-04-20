import React from 'react';
import MultiSelectBox from './MultiSelectBox';
import MultiTags from './MultiTags';
import { MultipleSelectWrapper } from './styles';

const MultipleSelect = () => {
  return (
    <MultipleSelectWrapper>
      <MultiTags />
      <MultiSelectBox />
    </MultipleSelectWrapper>
  );
};

export default MultipleSelect;
