import { Fragment } from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <Fragment>
      <div className="trainHeadings">
        <h1 className="hidden-xs hidden-sm">
          RaiLocate - Fast, Reliable Train Information!
        </h1>
        <h3 className="hidden-md hidden-lg">
          Enter Your Journey Details Below:
        </h3>
      </div>
      <div className="container">
        <div className="form-group trainSearch">
          <form action="/trains" method="POST">
            <input
              type="text"
              id="ajax"
              list="json-datalist"
              className="findStation form-control"
              name="departing"
            />
            <datalist id="json-datalist" />
            <input
              type="text"
              id="ajax2"
              list="json-datalist2"
              className="findStation form-control"
              name="destination"
            />
            <datalist id="json-datalist2" />
            <input
              id="findButton"
              className="form-control"
              type="submit"
              value="Find Trains!"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
