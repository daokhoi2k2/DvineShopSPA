import React from 'react';
import {
  MultiSelectBoxWrapper,
  SelectList,
  TagItem,
  TagItemInner,
} from './styles';

const MultiSelectBox = () => {
  const selectList = [
    {
      id: 1,
      text: 'Python',
      selected: true,
    },
    {
      id: 2,
      text: 'Javascript',
      selected: false,
    },
    {
      id: 3,
      text: 'Ruby',
      selected: false,
    },
    {
      id: 4,
      text: 'Java',
      selected: true,
    },
  ];

  return (
    <MultiSelectBoxWrapper>
      <SelectList>
        {selectList.map((selectItem) => {
          return (
            <TagItem key={selectItem.id}>
              <TagItemInner selected={selectItem.selected}>
                <div className="w-full items-center flex">
                  <div className="mx-2 leading-6">{selectItem.text} </div>
                </div>
              </TagItemInner>
            </TagItem>
          );
        })}
      </SelectList>
    </MultiSelectBoxWrapper>
  );
};

export default MultiSelectBox;
