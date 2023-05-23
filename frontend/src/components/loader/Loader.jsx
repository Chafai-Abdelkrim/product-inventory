import { FillingBottle } from 'react-cssfx-loading';
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <FillingBottle height="100px" width="100px" color="#9922ff" />
    </div>
  );
};

export default Loader;
