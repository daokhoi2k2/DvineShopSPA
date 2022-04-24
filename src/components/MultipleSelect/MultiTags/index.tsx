import { ArrowIcon } from 'designs/icons/Drawer';
import React, { BaseSyntheticEvent } from 'react';
import {
  MultiTagsWrapper,
  TagsContent,
  TagSelectedItem,
  TagsIconWrapper,
} from './styles';
interface IMultiTags {
  tagsSelecetedValue: any;
  onClickCloseTag: any;
  selectedIds: number[];
  setIsOpenSelectBox: any;
  setFilterValue: any;
  isOpenSelectBox: boolean;
  filterValue: string;
}

const MultiTags: React.FC<IMultiTags> = (props) => {
  const {
    tagsSelecetedValue,
    onClickCloseTag,
    selectedIds,
    setIsOpenSelectBox,
    isOpenSelectBox,
    setFilterValue,
    filterValue,
  } = props;

  const handleClick = (e: BaseSyntheticEvent) => {
    const id = e.currentTarget.dataset.id;
    const result = selectedIds.filter((item) => {
      return item !== id;
    });

    onClickCloseTag(result);
  };

  const handleToggleSelectBox = () => {
    setIsOpenSelectBox((state: boolean) => {
      return !state;
    });
  };

  const handleFocusSelectBox = () => {
    setIsOpenSelectBox(true);
  };

  const handleFilterTags = (e: BaseSyntheticEvent) => {
    const value = e.target.value;
    setFilterValue(value);
  };

  return (
    <MultiTagsWrapper>
      <div className="my-2 p-1 flex border border-gray-200 bg-white rounded">
        <TagsContent>
          {tagsSelecetedValue?.map((tag: any) => {
            return (
              <TagSelectedItem key={tag._id}>
                <div className="text-xs font-normal leading-none max-w-full flex-initial">
                  {tag.tag_name}
                </div>
                <div
                  className="flex flex-auto flex-row-reverse"
                  data-id={tag._id}
                  onClick={handleClick}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                    >
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </TagSelectedItem>
            );
          })}

          <div className="flex-1">
            <input
              onFocus={handleFocusSelectBox}
              onChange={handleFilterTags}
              className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
              value={filterValue}
            />
          </div>
        </TagsContent>
        <TagsIconWrapper>
          <button
            type="button"
            onClick={handleToggleSelectBox}
            className={
              'cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none transition-transform ' +
              (isOpenSelectBox ? 'rotate-0' : 'rotate-180')
            }
          >
            <ArrowIcon />
          </button>
        </TagsIconWrapper>
      </div>
    </MultiTagsWrapper>
  );
};

export default MultiTags;
