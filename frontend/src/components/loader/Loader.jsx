import React from 'react';
import { FillingBottle } from 'react-cssfx-loading';
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <FillingBottle height="100px" width="100px" color="#5867F8" />
    </div>
  );
};

export default Loader;
