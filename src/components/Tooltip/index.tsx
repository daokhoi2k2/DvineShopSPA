import React from 'react';

const Tooltip: React.FC<any> = (props: any) => {
  const { name, errorMsg, touched } = props;

  return (
    <div
      id={"tooltip-" + name}
      role="tooltip"
      className={"absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700 " + (errorMsg && touched ? "inline-block" : "hidden")}
    >
      {errorMsg}
      <div className="tooltip-arrow" data-popper-arrow="" />
    </div>
  );
};

export default Tooltip;
