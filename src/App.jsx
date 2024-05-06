import { useState } from "react";
import {
  experienceOptions,
  minSalaryOptions,
  noOfEmployeesOptions,
  roleOptions,
  workCultureOptions,
} from "./constants/options";
import MultiSelect from "./components/MultiSelect";
import "./App.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

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
        <div className="input-item">
          <MultiSelect
            label="Roles"
            options={roleOptions}
            value={roles}
            onChange={handleRoleChange}
          />
        </div>
        <div className="input-item">
          <MultiSelect
            label="Number Of Employees"
            options={noOfEmployeesOptions}
            value={noOfEmployees}
            onChange={handleEmployeeChange}
          />
        </div>
        <div className="input-item">
          <FormControl className="select">
            <InputLabel id="demo-simple-select-label">Experience</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={experience}
              label="Experience"
              onChange={handleExperienceChange}
            >
              {experienceOptions.map((val, idx) => (
                <MenuItem value={val} key={idx}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="input-item">
          <MultiSelect
            label="Work Culture"
            options={workCultureOptions}
            value={workCulture}
            onChange={handleWorkCultureChange}
          />
        </div>
        <div className="input-item">
          <MultiSelect
            label="Minimum Base Pay Salary"
            options={minSalaryOptions}
            value={minSalary}
            onChange={handleMinSalaryChange}
          />
        </div>
        <div className="input-item">
          <TextField
            id="outlined-basic"
            label="Search Company Name"
            variant="outlined"
            value={companyName}
            onChange={handleCompanyNameChange}
          />
        </div>
      </div>
      <div className="jobs">{/* Jobs */}</div>
    </div>
  );
}

export default App;
