import React, { BaseSyntheticEvent } from 'react';
import {
  MultiSelectBoxWrapper,
  SelectList,
  TagItem,
  TagItemInner,
} from './styles';

interface IMultiSelectBox {
  selectList: any;
  selectedTags: any;
  onChange: any;
  isOpenSelectBox: boolean;
}

const MultiSelectBox: React.FC<IMultiSelectBox> = (props) => {
  const { selectList, selectedTags, isOpenSelectBox, onChange } = props;

  const handleSelectTag = (e: BaseSyntheticEvent) => {
    const tagId = e.currentTarget.dataset.tag;

    const isExists = selectedTags.includes(tagId);

    if (isExists) {
      const result = selectedTags.filter((item: any) => {
        return item !== tagId;
      });

      onChange(result);
      return result;
    }
    const result = [...selectedTags, tagId];
    onChange(result);
    return result;
  };

  return (
    <MultiSelectBoxWrapper className={isOpenSelectBox ? "block" : "hidden"}>
      <SelectList>
        {selectList.map((selectItem: any) => {
          return (
            <TagItem
              key={selectItem._id}
              data-tag={selectItem._id}
              onClick={handleSelectTag}
            >
              <TagItemInner selected={selectedTags.includes(selectItem._id)}>
                <div className="w-full items-center flex">
                  <div className="mx-2 leading-6">{selectItem.tag_name}</div>
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
