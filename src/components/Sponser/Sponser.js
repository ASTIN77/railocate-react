import { Fragment } from "react";

import NRELogo from "../../images/NRE_Powered_logo.png";
import "./Sponser.css";

const Sponser = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="NRE">
            <img
              className="img-reponsive"
              src={NRELogo}
              alt="Powered By National Rail Enquiries"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sponser;
