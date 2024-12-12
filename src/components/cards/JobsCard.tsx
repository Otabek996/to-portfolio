const jobsData = [
    {
        role: "Intern Sales Manager",
        company: "Plum Technologies",
        date: "October 2024 - Present",
        period: "3 months",
    },
    {
        role: "Intern Frontend Developer",
        company: "Itransition Group",
        date: "April 2024 - June 2024",
        period: "3 months",
    },
];

const JobItem = ({job, active}: {job: any; active?: boolean}) => {
    const { role, company, date, period } = job;

    return (
        <div className="job-item">
            <h5 className="job-item-date">{date}</h5>
            <h1 className="job-item-role">{role}</h1>
            <h3 className="job-item-company">{company}</h3>
        </div>
    )
}

const JobsCard = () => {
    return (
        <div className="jobs-card">
            <div className="jobs-card-header">
                <h4>3 Months of</h4>
                <h1>Experience</h1>
            </div>

            <div className="jobs-card-body">
                <JobItem job={jobsData[0]} active />

                {jobsData.slice(1).map((job, index) => (
                    <JobItem key={index} job={job} />
                ))}
            </div>
        </div>
    )
}

export default JobsCard;
