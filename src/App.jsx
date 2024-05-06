import { useState } from "react";
import MultiSelect from "./components/MultiSelect";
import "./App.css";

const roleOptions = [
  "Frontend",
  "Backend",
  "Full Stack",
  "IOS",
  "Flutter",
  "React Native",
  "Android",
  "Swift",
];

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
      <div className="inputs">
        <MultiSelect
          label="Roles"
          options={roleOptions}
          value={roles}
          onChange={handleRoleChange}
        />
        <MultiSelect
          label="Roles"
          options={roleOptions}
          value={roles}
          onChange={handleRoleChange}
        />
        <MultiSelect
          label="Roles"
          options={roleOptions}
          value={roles}
          onChange={handleRoleChange}
        />
        <MultiSelect
          label="Roles"
          options={roleOptions}
          value={roles}
          onChange={handleRoleChange}
        />
        <MultiSelect
          label="Roles"
          options={roleOptions}
          value={roles}
          onChange={handleRoleChange}
        />
      </div>
      <div className="jobs">{/* Jobs */}</div>
    </div>
  );
}

export default App;
