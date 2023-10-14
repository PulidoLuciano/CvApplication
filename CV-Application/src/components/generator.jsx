import { useState } from "react";
import Display from "./display";

function Generator(){
    
    const [addingJob, setAddingJob] = useState(false);
    const [addingStudy, setAddingStudy] = useState(false);
    const [personalData, setPersonalData] = useState({name:"", email:"", phone:"", location:""});
    const [newStudy, setNewStudy] = useState({id:"", school:"", degree:"", startDate:"", endDate:"", location:""});
    const [newJob, setNewJob] = useState({id:"", company:"", position:"", startDate:"", endDate:"", location:"", description:""});
    const [jobs, setJobs] = useState([]);
    const [studies, setStudies] = useState([]);
    
    function handlePersonalChange(event){
        let field = event.target.name;
        let newPersonal = {...personalData};
        newPersonal[field] = event.target.value;
        setPersonalData(newPersonal);
    }

    function handleStudyChange(event){
        let field = event.target.name;
        let study = {...newStudy};
        study[field] = event.target.value;
        study.id = Math.trunc(Math.random() * 1000);
        setNewStudy(study);
    }

    function handleJobChange(event){
        let field = event.target.name;
        let job = {...newJob};
        job[field] = event.target.value;
        job.id = Math.trunc(Math.random() * 1000);
        setNewJob(job);
    }

    function handleStudySubmit(event){
        event.preventDefault();
        let study = {id:Math.trunc(Math.random() * 1000), ...newStudy};
        let newStudies = studies.concat(study);
        setStudies(newStudies);
        setNewStudy({id:"", school:"", degree:"", startDate:"", endDate:"", location:""});
        event.target.reset();
    }

    function handleJobSubmit(event){
        event.preventDefault();
        let job = {id: Math.trunc(Math.random() * 1000), ...newJob};
        let newJobs = jobs.concat(job);
        setJobs(newJobs);
        setNewJob({id:"", company:"", position:"", startDate:"", endDate:"", location:"", description:""});
        event.target.reset();
    }

    function handleDeleteJob(job){
        let newJobs = [].concat(jobs.filter(j => j != job));
        setJobs(newJobs);
    }

    function handleDeleteStudy(study){
        let newStudy = [].concat(studies.filter(j => j != study));
        setStudies(newStudy);
    }

    return (
        <main>
            <section id="inputs-section">
                <div id="personal-section">
                    <h2>Personal data</h2>   
                    <label>Full Name
                        <input type="text" name="name" onChange={handlePersonalChange}/>
                    </label>
                    <label>Email
                        <input type="email" name="email" onChange={handlePersonalChange}/>
                    </label>
                    <label>Phone Number
                        <input type="tel" name="phone" onChange={handlePersonalChange}/>
                    </label>
                    <label>Location
                        <input type="text" name="location" onChange={handlePersonalChange}/>
                    </label>
                </div>
                <div id="studies-section">
                    <h2>Studies</h2>
                    <ul>
                        {
                            studies.map(study => {
                                return (
                                    <li key={study.id}>
                                        <p>{study.school} <button onClick={() => handleDeleteStudy(study)} className="delete">Delete</button></p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                    !addingStudy 
                    ? <button onClick={() => setAddingStudy(true)}>Add new study</button>
                    : <>
                        <form onSubmit={handleStudySubmit}>
                            <label>School
                                <input type="text" name="school" onChange={handleStudyChange} required/>
                            </label>
                            <label>Degree
                                <input type="text" name="degree" onChange={handleStudyChange}/>
                            </label>
                            <label>Start Date
                                <input type="date" name="startDate" onChange={handleStudyChange}/>
                            </label>
                            <label>End Date
                                <input type="date" name="endDate" onChange={handleStudyChange}/>
                            </label>
                            <label>Location
                                <input type="text" name="location" onChange={handleStudyChange}/>
                            </label>
                            <button>Add</button>
                            <button onClick={() => setAddingStudy(false)}>Cancel</button>
                        </form>
                    </>
                    }
                    
                </div>
                <div id="experience-section">
                    <h2>Experience</h2>
                    <ul>
                        {
                            jobs.map(job => {
                                return (
                                    <li key={job.id}>
                                        <p>{job.company} <button onClick={() => handleDeleteJob(job)} className="delete">Delete</button></p>
                                        
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                    !addingJob 
                    ? <button onClick={() => setAddingJob(true)}>Add new experience</button>
                    : <>
                        <form onSubmit={handleJobSubmit}>
                            <label>Company Name
                                <input type="text" name="company" onChange={handleJobChange} required/>
                            </label>
                            <label>Position
                                <input type="text" name="position" onChange={handleJobChange}/>
                            </label>
                            <label>Start Date
                                <input type="date" name="startDate" onChange={handleJobChange}/>
                            </label>
                            <label>End Date
                                <input type="date" name="endDate" onChange={handleJobChange}/>
                            </label>
                            <label>Location
                                <input type="text" name="location" onChange={handleJobChange}/>
                            </label>
                            <label>Description
                                <textarea name="description" id="" cols="40" rows="7" maxLength="250" onChange={handleJobChange}></textarea>
                            </label>
                            <button>Add</button>
                            <button onClick={() => setAddingJob(false)}>Cancel</button>
                        </form>
                    </>
                    }
                </div>
            </section>
            
            <Display personal={personalData} jobs={jobs} studies={studies}></Display>
        </main>
    )
}

export default Generator;