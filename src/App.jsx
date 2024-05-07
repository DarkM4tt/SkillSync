import { useCallback, useEffect, useMemo, useState } from "react";
import {
	experienceOptions,
	minSalaryOptions,
	roleOptions,
	workCultureOptions,
} from "./constants/options";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import MultiSelect from "./components/MultiSelect";
import JobCard from "./components/JobCard";
import "./App.css";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [jobs, setJobs] = useState([]);
	const [roles, setRoles] = useState([]);
	const [experience, setExperience] = useState();
	const [workCulture, setWorkCulture] = useState([]);
	const [minSalary, setMinSalary] = useState();
	const [companyName, setCompanyName] = useState();

  const filteredJobs = useMemo(() => {
    if (!jobs?.jdList) return [];
    let jobsClone = JSON.parse(JSON.stringify(jobs?.jdList));
    
    console.log(workCulture)
    
    if (roles.length)
      jobsClone = jobsClone.filter((v) => roles.some(role => role.toLowerCase() === v.jobRole.toLowerCase()))

    if (experience)
      jobsClone = jobsClone.filter((v) =>  experience >= v.minExp)
    
    if (companyName)
      jobsClone = jobsClone.filter((v) =>  v.companyName.toLowerCase().includes(companyName.toLowerCase()))

    if (minSalary)
      jobsClone = jobsClone.filter((v) =>  parseInt(minSalary.replace('L', '').trim()) <= v.minJdSalary ?? 0)

    if (workCulture.length)
      jobsClone = jobsClone.filter((v) =>  {
        if (workCulture.toLowerCase() === 'remote' && v.location.toLowerCase() === 'remote') return true
        if (workCulture.toLowerCase() === 'on site' && v.location.toLowerCase() !== 'remote') return true
        return false
      })

    return jobsClone
  }, [companyName, experience, jobs?.jdList, minSalary, roles, workCulture])

	const handleRoleChange = (e) => {
		setRoles(e.target.value);
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

	const fetchJobs = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				limit: 10,
				offset: jobs?.jdList?.length ?? 0,
			}),
		};

		const req = await fetch(
			"https://api.weekday.technology/adhoc/getSampleJdJSON",
			requestOptions
		);
		const res = await req.json();
    if (res?.jdList?.length > 0) {
      setJobs((v) => ({
        jdList: [...(v?.jdList ?? []), ...res.jdList],
        totalCount: v?.totalCount
      }));
    }
      
    setIsLoading(false);
	}, [isLoading, jobs]);

	useEffect(() => {
		const handleScroll = () => {
			if (document.documentElement.scrollTop + document.documentElement.clientHeight + 300 >= document.documentElement.scrollHeight) {
        fetchJobs()
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [fetchJobs]);
  
  useEffect(() => {
    fetchJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

	return (
		<div className="container">
			<div className="inputs">
      <div className="input-item">
					<FormControl className="select">
						<InputLabel id="demo-simple-select-label">
							Experience
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={experience}
							label="Experience"
							onChange={handleExperienceChange}
						>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
							{experienceOptions.map((val, idx) => (
								<MenuItem value={val} key={idx}>
									{val}
								</MenuItem>
							))}
						</Select>
					</FormControl>
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
        <div className="input-item">
					<FormControl className="select">
						<InputLabel id="demo-simple-select-label">
              Work Culture
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={workCulture}
							label="Work Culture"
							onChange={handleWorkCultureChange}
						>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
							{workCultureOptions.map((val, idx) => (
								<MenuItem value={val} key={idx}>
									{val}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<div className="input-item">
					<MultiSelect
						label="Roles"
						options={roleOptions}
						value={roles}
						onChange={handleRoleChange}
					/>
				</div>
        <div className="input-item">
					<FormControl className="select">
						<InputLabel id="demo-simple-select-label">
              Minimum Base Pay Salary
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={minSalary}
							label="Minimum Base Pay Salary"
							onChange={handleMinSalaryChange}
						>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
							{minSalaryOptions.map((val, idx) => (
								<MenuItem value={val} key={idx}>
									{val}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</div>
			<div className="jobs">
				{filteredJobs?.map((job, i) => (
					<JobCard key={`${job?.jdUid}-${job.companyName}-${i}`} job={job} />
				))}
			</div>
		</div>
	);
}

export default App;
