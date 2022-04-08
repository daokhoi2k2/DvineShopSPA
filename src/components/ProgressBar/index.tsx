import React from 'react';
import { ProgressBarInner, ProgressBarWrapper } from './styles';

const ProgressBar: React.FC<{percent: number}> = ({percent}) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarInner>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className={"bg-blue-600 text-xs font-medium text-blue-100 text-center leading-none rounded-md w-0"}
            style={{width: `${percent}%`}}
          >
            {percent}%
          </div>
        </div>
      </ProgressBarInner>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
