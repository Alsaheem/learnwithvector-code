import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // Initialize heistData as null or as an appropriate structure
  const [heistData, setHeistData] = useState(null);

  const heistFetchEndpoint = "https://fetcher.com";
  const heistExecutorEndpoint = "https://executor.com";

  useEffect(() => {
    console.log("Fetching data...");
    fetch("https://catfact.ninja/fact")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setHeistData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means this runs only once

  const fetchHeist = () => {
    console.log("Fetching heist");
    console.log(heistData);
  };

  const executeHeist = () => {
    console.log("Executing heist");
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#">
            HeistPlanner
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="text-center mt-4">
        <button
          onClick={() => fetchHeist()}
          type="button"
          className="btn btn-outline-primary btn-lg mb-3"
        >
          Fetch random heist plan
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Heist Timeline</h6>
                <div id="content">
                  <ul className="timeline">
                    <li className="event" data-date="12:30 - 1:00pm">
                      <h3>Registration</h3>
                      <p>
                        Get here on time, it's first come first serve. Be late,
                        get turned away.
                      </p>
                    </li>
                    <li className="event" data-date="2:30 - 4:00pm">
                      <h3>Opening Ceremony</h3>
                      <p>
                        Get ready for an exciting event, this will kick off in
                        amazing fashion with MOP &amp; Busta Rhymes as an
                        opening show.
                      </p>
                    </li>
                    <li className="event" data-date="5:00 - 8:00pm">
                      <h3>Main Event</h3>
                      <p>
                        This is where it all goes down. You will compete head to
                        head with your friends and rivals. Get ready!
                      </p>
                    </li>
                    <li className="event" data-date="8:30 - 9:30pm">
                      <h3>Closing Ceremony</h3>
                      <p>
                        See how is the victor and who are the losers. The big
                        stage is where the winners bask in their own glory.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-4">
                  <button
                    onClick={() => executeHeist()}
                    type="button"
                    className="btn btn-success btn-lg mb-3"
                  >
                    Execute plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
