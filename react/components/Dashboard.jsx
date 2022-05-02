import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Personal from "../components/forms/Personal";
import Contact from "../components/forms/Contact";
import { useRouter } from "next/router";
import Income from "../components/forms/Income";

const Dashboard = () => {
  const [tabs, setTabs] = useState(1);
  const contact = useForm();
  const personal = useForm();
  const [income, setIncome] = useState({});
  const router = useRouter();
  const { slug, code, state } = router.query;

  const get_info = async () => {
    const response = await fetch("http://localhost:8000/api/get_info", {
      method: "POST",
      body: JSON.stringify({ code: code }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((res) => {
        if (res != null) {
          console.log(res);
          contact.reset(res.contact);
          personal.reset(res.personal);
          setIncome(res.income);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (
      (router.isReady && typeof code === "string") ||
      code instanceof String
    ) {
      get_info();
    }
  }, [router.isReady]);

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
          <p className="h2">SingPass Test App</p>
        </div>
        <div className="col-sm-2 mt-2">
          <button className="btn btn-primary fs-5" onClick={redirect}>
            Retrieve Info
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <p className="fs-3">Details</p>
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
            <Contact register={contact.register} />
          ) : tabs == 2 ? (
            <Income income={income} />
          ) : tabs == 3 ? (
            <Personal register={personal.register} />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
