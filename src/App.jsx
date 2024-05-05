import { useState } from "react";
import "./App.css";

function App() {
  const [roles, setRoles] = useState([]);
  const [noOfEmployees, setNoOfEmployees] = useState([]);
  const [experience, setExperience] = useState([]);
  const [workCulture, setWorkCulture] = useState([]);
  const [minSalary, setMinSalary] = useState([]);
  const [companyName, setCompanyName] = useState("");

  const handleRoleChange = (e) => {
    setRoles(e.target.value);
  };
  const handleEmployeeChange = (e) => {
    setNoOfEmployees(e.target.value);
  };
  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };
  const handleWorkCultureChange = (e) => {
    setWorkCulture(e.target.value);
  };
  const handleMinSalaryChange = (e) => {
    setMinSalary(e.target.value);
  };
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  return (
    <div className="container">
      <div className="inputs">{/* Inputs */}</div>
      <div className="jobs">{/* Jobs */}</div>
    </div>
  );
}

export default App;
