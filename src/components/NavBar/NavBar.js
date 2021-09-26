import { Fragment } from "react";
import railsIcon from "../../images/railsIcon.jpg";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <Fragment>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <i className="fa fa-train big-train" />
            <img
              src={railsIcon}
              alt="Powered By National Rail Enquiries"
              height="32"
            ></img>
          </div>
          <i className="middle-heading">
            <em>RaiLocate</em>
          </i>
          <i className="navbar-right" href="#">
            <img
              src={railsIcon}
              alt="Powered By National Rail Enquiries"
              height="32"
            ></img>
            <i className="fa fa-train big-train"></i>
          </i>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
