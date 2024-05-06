import avatarImage from "../assets/avatar.png";
import avatarUser from "../assets/user2.jpg";
import "./jobCard.scss";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const JobCard = ({ job }) => {
  const {
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    location,
    minExp,
    jobRole,
    companyName,
    logoUrl,
  } = job;
  return (
    <div className="job-card">
      <div className="job-card-posted-date">
        ⏳ Posted {getRandomNumber()} days ago
      </div>
      <div className="job-card-header">
        <img className="job-card-logo" src={logoUrl} alt={companyName} />
        <div className="job-card-wrapper">
          <p className="job-card-wrapper-title">{companyName}</p>
          <p className="job-card-wrapper-role">{jobRole}</p>
          <p className="job-card-wrapper-location">{location}</p>
        </div>
      </div>
      <div className="job-card-body">
        <p className="job-card-salary">
          Estimated Salary: ₹{minJdSalary} - ₹{maxJdSalary} LPA ✅
        </p>
        <p className="aboutCompany">About Company:</p>
        <p className="aboutUs">About us</p>
        <div
          className="job-card-description"
          dangerouslySetInnerHTML={{ __html: jobDetailsFromCompany }}
        />
        <div className="minExp">
          <p className="min">Minimum Experience</p>
          <p className="yrs">{minExp} years</p>
        </div>
        <div className="job-card-actions">
          <button className="job-card-actions-button-apply">
            ⚡ Easy Apply
          </button>
          <button className="job-card-actions-button-unlock">
            <img height="25" width="25" src={avatarImage} alt="avatar" />
            <img height="20" width="20" src={avatarUser} alt="avatar" />
            Unlock referral asks
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
