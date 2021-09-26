import { Fragment } from "react";
import "../TrainResults/Results.css";

const Results = (props) => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 hidden-xs hidden-sm">
            <div className="detailsBoard">
              <p>Depart : </p>
              <p>Arrive : </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="departureBoard">
              <div className="departureBoardHeader"></div>
              <div className="departureHeader-cell">Departure</div>
              <div className="departureHeader-cell">Expected</div>
              <div className="departureHeader-cell">Platform</div>
              <div className="departureHeader-cell hidden-xs hidden-sm">
                Updates
              </div>
              <div id="departureBoardBody">
                <div className="departureBoard-row">
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell hidden-xs hidden-sm" />
                </div>
                <div className="departureBoard-row">
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell hidden-xs hidden-sm" />
                </div>
                <div className="departureBoard-row">
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell hidden-xs hidden-sm" />
                </div>
                <div className="departureBoard-row">
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell hidden-xs hidden-sm" />
                </div>
                <div className="departureBoard-row">
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell hidden-xs hidden-sm" />
                </div>
                <div className="departureBoard-row">
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell hidden-xs hidden-sm" />
                </div>
                <div className="departureBoard-row">
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell" />
                  <div className="departureBoard-cell hidden-xs hidden-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="delayBoard">
              <div className="delayBoardHeader" />
              <div className="delayHeader-cell">Delays</div>
              <div id="delayBoardBody">
                <div className="delayBoard-row">
                  <div className="delayBoard-cell">
                    {" "}
                    No current delays via this route.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Results;
