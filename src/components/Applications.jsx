import "./Applications.css";
import Card from "./Card";
import { useEffect, useState } from "react";

function Applications() {
  const [Jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    appliedDate: "",
    status: "Applied",
    domain: "",
  });
  function handleAddJob(e) {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      title: formData.company,
      category: formData.role,
      appliedDate: formData.appliedDate,
      status: formData.status,
      brand: formData.domain.replace(".com", ""),
    };
    setJobs((prev) => [...prev, newJob]);
    setFormData({
      company: "",
      role: "",
      appliedDate: "",
      status: "Applied",
      domain: "",
    });
    setShowModal(false);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

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
          <button className="add-job-btn" onClick={() => setShowModal(true)}>
            + Add Job
          </button>
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
            key={job.id}
            company={job.title}
            role={job.category}
            appliedDate="15 Jan 2024"
            status={job.status || updateStatus(job.id)}
            domain={job.brand + ".com"}
          />
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Job Application</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleAddJob}>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Google"
                  required
                />
              </div>
              <div className="form-group">
                <label>Job Role</label>
                <input
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Frontend Developer"
                  required
                />
              </div>
              <div className="form-group">
                <label>Company Domain</label>
                <input
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder="e.g. google.com"
                />
              </div>
              <div className="form-group">
                <label>Applied Date</label>
                <input
                  type="date"
                  name="appliedDate"
                  value={formData.appliedDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interviewing">Interviewing</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Applications;
