import "./Applications.css";
import Card from "./Card";
import { useEffect, useState } from "react";

function Applications() {
  const [Jobs, setJobs] = useState([]);

  async function fetchJobs() {
    const data = await fetch("https://dummyjson.com/products/?limit=10");
    const json = await data.json();
    return json.products;
  }

  useEffect(() => {
    fetchJobs().then((jobs) => {
      setJobs(jobs);
    });
  }, []);

  console.log(Jobs);

  function updateStatus(id) {
    if (id % 2 === 0) return "Applied";
    else if (id % 3 === 0) return "Interviewing";
    else if (id % 5 === 0) return "Offer";
    else return "Rejected";
  }

  return (
    <div className="applications-page">
      <div className="applications-header">
        <div className="applications-title">
          <h1>My Applications</h1>
          <p>Track and manage all your job applications</p>
        </div>

        <div className="applications-actions">
          <div className="sort">
            <button>Sort by Date</button>
            <button>Sort by Status</button>
          </div>

          <div className="search">
            <input type="text" placeholder="Search by company" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      <div className="application-card-container">
        <Card
          company="Google"
          role="SWE Intern"
          appliedDate="01 Jan 2024"
          status="Applied"
          domain="google.com"
        />
        <Card
          company="Microsoft"
          role="Frontend Dev"
          appliedDate="05 Jan 2024"
          status="Interviewing"
          domain="microsoft.com"
        />
        <Card
          company="Amazon"
          role="SDE-1"
          appliedDate="12 Jan 2024"
          status="Rejected"
          domain="amazon.com"
        />
        {Jobs.map((job) => (
          <Card
            company={job.title}
            role={job.category}
            appliedDate="15 Jan 2024"
            status={updateStatus(job.id)}
            domain={job.brand + ".com"}
          />
        ))}
      </div>
    </div>
  );
}

export default Applications;
