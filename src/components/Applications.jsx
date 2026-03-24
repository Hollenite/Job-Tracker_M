import "./Applications.css";
import Card from "./Card";

function Applications() {
  return (
    <div className="applications-page">
      <div className="applications-header">
        <h1>My Applications</h1>
        <p>Track and manage all your job applications</p>
      </div>

      <div className="application-card-container">
        <Card company="Google" role="SWE Intern" appliedDate="01 Jan 2024" status="Applied" domain="google.com" />
        <Card company="Microsoft" role="Frontend Dev" appliedDate="05 Jan 2024" status="Interviewing" domain="microsoft.com" />
        <Card company="Atlassian" role="React Developer" appliedDate="10 Jan 2024" status="Offer" domain="atlassian.com" />
        <Card company="Amazon" role="SDE-1" appliedDate="12 Jan 2024" status="Rejected" domain="amazon.com" />
      </div>
    </div>
  );
}

export default Applications;