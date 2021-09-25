import { Fragment } from 'react';
import railsIcon from '../../images/railsIcon.jpg';
import './NavBar.css';

const NavBar = (props) => {
    return(
        <Fragment>

       <nav class="navbar navbar-default">
       <div class="container-fluid">

       <div class="navbar-header">
           <i class="fa fa-train big-train" /><img src={railsIcon} alt="Powered By National Rail Enquiries" height="32"></img>
       </div>
       <i class="middle-heading"><em>RaiLocate</em></i>
       <i class="navbar-right" href="#"><img src={railsIcon} alt="Powered By National Rail Enquiries" height="32"></img><i class="fa fa-train big-train"></i></i>
       </div>
   </nav>
    </Fragment>
    );

}

export default NavBar;