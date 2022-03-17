import React from "react";
import "../../assets/css/loading.css"

const Loading: React.FC = () => {
  return (
    <div className="fix-loading">
      <div className="spinner-loading"></div>
      <h2>loading</h2>
    </div>
  );
};

export default Loading;
