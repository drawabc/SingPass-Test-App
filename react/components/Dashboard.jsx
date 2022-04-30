import { useState } from "react";
import { useForm } from "react-hook-form";
import Personal from "../components/forms/Personal";
import Contact from "../components/forms/Contact";

const Dashboard = () => {
  const [tabs, setTabs] = useState(1);
  const { register, handleSubmit, setValue } = useForm();
  const redirect = async () => {
    const response = await fetch(
      "http://localhost:8000/api/get_authorised_url",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((res) => {
        window.location = res.url;
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 mt-1">
          <p class="h2">SingPass Test App</p>
        </div>
        <div className="col-sm-2 mt-2">
          <button className="btn btn-primary fs-5" onClick={redirect}>
            Retrieve Info
          </button>
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
          {tabs == 1 ? (
            <Contact register={register}></Contact>
          ) : tabs == 3 ? (
            <Personal register={register} />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
