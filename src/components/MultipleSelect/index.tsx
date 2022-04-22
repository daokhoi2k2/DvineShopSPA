import React, { useMemo, useState } from 'react';
import MultiSelectBox from './MultiSelectBox';
import MultiTags from './MultiTags';
import { MultipleSelectWrapper } from './styles';

interface IMultipleSelect {
  tags: any;
  name: string;
  id: string;
  onChange: any;
  value: any;
}

const MultipleSelect: React.FC<IMultipleSelect> = (props) => {
  const [isOpenSelectBox, setIsOpenSelectBox] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const { tags, name, onChange, value } = props;

  const tagsSelecetedValue = tags.filter((tag: any) => {
    return value.includes(tag._id);
  });

  const filterTags = useMemo(() => {
    const regexPattern = new RegExp(`^${filterValue}`);
    const result = tags.filter((tag: any) => {
      return tag.tag_name.toLowerCase().match(regexPattern)
    });

    return result;
  }, [filterValue, tags]);

  const handleChange = (value: any) => {
    const changeEvent = {
      target: {
        name: name,
        value: value,
      },
    };

    onChange(changeEvent);
  };

  return (
    <MultipleSelectWrapper>
      <MultiTags
        tagsSelecetedValue={tagsSelecetedValue}
        isOpenSelectBox={isOpenSelectBox}
        setIsOpenSelectBox={setIsOpenSelectBox}
        selectedIds={value}
        onClickCloseTag={handleChange}
        setFilterValue={setFilterValue}
      />
      <MultiSelectBox
        isOpenSelectBox={isOpenSelectBox}
        selectList={filterTags}
        selectedTags={value}
        onChange={handleChange}
      />
    </MultipleSelectWrapper>
  );
};

export default MultipleSelect;
