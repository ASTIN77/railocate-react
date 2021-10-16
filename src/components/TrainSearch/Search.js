import { Fragment, useState } from "react";
import Results from "../TrainResults/Results";
import axios from "axios";
import "./Search.css";
import "../../Data/railRef";

const Search = (props) => {
  const [enteredStationFrom, setEnteredStationFrom] = useState("");
  const [enteredStationTo, setEnteredStationTo] = useState("");
  const [trainResults, setTrainResults] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const fromStationInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setEnteredStationFrom(event.target.value);
    }
  };

  const toStationInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setEnteredStationTo(event.target.value);
    }
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();

    let departing = enteredStationFrom,
      destination = enteredStationTo;
    let url =
      "https://huxleyapp.azurewebsites.net/departures/" +
      departing +
      "/to/" +
      destination +
      "/?accessToken=420b5ac9-3385-4b10-8419-5cfb557cfe2e&expand=true";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          console.log(
            "success",
            "We have found matching results for your journey."
          );
          setTrainResults(res.data);
          setIsValid(true);
          console.log(trainResults);
        } else {
          console.log("error", "Search criteria returned zero results");
          console.log(trainResults);
        }
      })
      .catch((error) => {
        console.log(error.response.statusText);
        setIsValid(false);
      });
  };
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
          <form onSubmit={(e) => searchSubmitHandler(e)}>
            <input
              type="text"
              className="findStation form-control"
              onChange={fromStationInputHandler}
              value={enteredStationFrom}
            />
            <input
              type="text"
              className="findStation form-control"
              onChange={toStationInputHandler}
              value={enteredStationTo}
            />
            <input
              id="findButton"
              className="form-control"
              type="submit"
              value="Find Trains!"
            />
          </form>
        </div>
      </div>
      {isValid ? <Results results={trainResults} /> : 0}
    </Fragment>
  );
};

export default Search;
