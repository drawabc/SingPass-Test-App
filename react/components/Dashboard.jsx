import { useState } from "react";

const Dashboard = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <button className="btn btn-primary">Retrieve Info</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <p class="fs-3">Contact Details</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={tabs == 1 ? "nav-link active" : "nav-link"}
                onClick={() => setTabs(1)}
              >
                Contact Info
              </a>
            </li>
            <li className="nav-item">
              <a
                className={tabs == 2 ? "nav-link active" : "nav-link"}
                onClick={() => setTabs(2)}
              >
                Income Info
              </a>
            </li>
            <li className="nav-item">
              <a
                className={tabs == 3 ? "nav-link active" : "nav-link"}
                onClick={() => setTabs(3)}
              >
                Personal Info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
