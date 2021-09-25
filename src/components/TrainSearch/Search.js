import { Fragment } from "react";
import './Search.css';
import NRELogo from '../../images/NRE_Powered_logo.png';
import AutoComplete from '../../JavascriptHelpers/autocomplete';

const Search = (props) => {
    return (

    <Fragment>
            <div className="trainHeadings">
                <h1 className="hidden-xs hidden-sm">RaiLocate - Fast, Reliable Train Information!</h1>
                <h3 className="hidden-md hidden-lg">Enter Your Journey Details Below:</h3>
            </div>
            <div className="container">
                <div className="form-group trainSearch">
                    <form action="/trains" method="POST">
                        <input type="text" id="ajax" list="json-datalist" class="findStation form-control" name="departing" autocomplete="off" />
                        <datalist id="json-datalist" />
                        <input type="text" id="ajax2" list="json-datalist2" class="findStation form-control" name="destination" autocomplete="off" />
                        <datalist id="json-datalist2" />
                        <input id="findButton" class="form-control" type="submit" value="Find Trains!" />
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="NRE">
                        <img className="img-reponsive" src={NRELogo} alt="Powered By National Rail Enquiries" />
                    </div>
                </div>
            </div>
        <script src={AutoComplete} />
    </Fragment>
    )
}

export default Search;