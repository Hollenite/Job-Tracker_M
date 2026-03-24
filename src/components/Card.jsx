import "./Card.css";

function Card({ company, role, appliedDate, status, domain }) {
  return (
    <div className="card">
      <div className="card-header">
        <img
          className="card-logo"
          src={`https://logo.clearbit.com/${domain}`}
          alt={company}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="card-logo-fallback" style={{ display: "none" }}>
          {company?.charAt(0)}
        </div>
        <div>
          <div className="card-company">{company}</div>
          <div className="card-role">{role}</div>
        </div>
      </div>

      <div className="card-divider" />

      <div className="card-info">
        <span>Applied: {appliedDate}</span>
        <span>Salary: ₹12 LPA</span>
      </div>

      <div className="card-footer">
        <span
          className={`status-badge ${status ? `status-${status.toLowerCase()}` : ""}`}
        >
          {status}
        </span>
        <div className="card-actions">
          <button>Edit</button>
          <button>Delete</button>
          <button>Pin</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
