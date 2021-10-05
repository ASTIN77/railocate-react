import { Fragment } from "react";

import "../TrainResults/Results.css";

const Results = (props) => {
  const services = props.results;
  const listService = props.results.trainServices;
  let listedServices = [];
  for (let i in listService) {
    listedServices.push([i, listService[i]]);
  }
  console.log(listedServices);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 hidden-xs hidden-sm">
            <div className="detailsBoard">
              <p>Depart : {services.locationName} </p>
              <p>Arrive : {services.filterLocationName}</p>
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
                {listedServices.map((data, key) => {
                  return (
                    <div className="departureBoard-row" key={key}>
                      <div className="departureBoard-cell">{data[1].std}</div>
                      <div className="departureBoard-cell">{data[1].etd}</div>
                      <div className="departureBoard-cell">
                        {data[1].platform}
                      </div>
                      {services.isCancelled ? (
                        <div className="departureBoard-cell hidden-xs hidden-sm">
                          {services.cancelReason}
                        </div>
                      ) : services.delayReason ? (
                        <div className="departureBoard-cell hidden-xs hidden-sm">
                          {services.delayReason}
                        </div>
                      ) : (
                        <div className="departureBoard-cell hidden-xs hidden-sm"></div>
                      )}
                    </div>
                  );
                })}
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
