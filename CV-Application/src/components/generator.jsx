import { useState } from "react";
import Display from "./display";

function Generator(){
    
    const [addingJob, setAddingJob] = useState(false);
    const [addingStudy, setAddingStudy] = useState(false);
    const [personalData, setPersonalData] = useState({name:"", email:"", phone:"", location:""});
    const [newStudy, setNewStudy] = useState({school:"", degree:"", startDate:"", endDate:"", location:""});
    const [newJob, setNewJob] = useState({company:"", position:"", startDate:"", endDate:"", location:"", description:""});
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
        setNewStudy(study);
    }

    function handleJobChange(event){
        let field = event.target.name;
        let job = {...newJob};
        job[field] = event.target.value;
        setNewJob(job);
    }

    function handleStudySubmit(event){
        event.preventDefault();
        let study = {school:"", degree:"", startDate:"", endDate:"", location:""};
        for(let i = 0; i < 5; i++){
            study[event.target[i].name] = event.target[i].value;
        }
        let newStudies = studies.concat(study);
        setStudies(newStudies);
        event.target.reset();
    }

    function handleJobSubmit(event){
        event.preventDefault();
        let job = {company:"", position:"", startDate:"", endDate:"", location:"", description:""};
        for(let i = 0; i < 6; i++){
            study[event.target[i].name] = event.target[i].value;
        }
        let newJobs = jobs.concat(job);
        setJobs(newJobs);
        event.target.reset();
    }

    return (
        <section id="main">
            <div id="personal-section">
                <h2>Personal data</h2>   
                <label htmlFor="">Full Name</label>
                <input type="text" name="name" onChange={handlePersonalChange}/>
                <label htmlFor="">Email</label>
                <input type="text" name="email" onChange={handlePersonalChange}/>
                <label htmlFor="">Phone Number</label>
                <input type="text" name="phone" onChange={handlePersonalChange}/>
                <label htmlFor="">Location</label>
                <input type="text" name="location" onChange={handlePersonalChange}/>
            </div>
            <div id="studies-section">
                <h2>Studies</h2>
                {
                !addingStudy 
                ? <button onClick={() => setAddingStudy(true)}>Add new study</button>
                : <>
                    <form onSubmit={handleStudySubmit}>
                        <label htmlFor="">School</label>
                        <input type="text" name="school" onChange={handleStudyChange}/>
                        <label htmlFor="">Degree</label>
                        <input type="text" name="degree" onChange={handleStudyChange}/>
                        <label htmlFor="">Start Date</label>
                        <input type="date" name="startDate" onChange={handleStudyChange}/>
                        <label htmlFor="">End Date</label>
                        <input type="date" name="endDate" onChange={handleStudyChange}/>
                        <label htmlFor="">Location</label>
                        <input type="text" name="location" onChange={handleStudyChange}/>
                        <button>Add</button>
                        <button onClick={() => setAddingStudy(false)}>Cancel</button>
                    </form>
                </>
                }
                
            </div>
            <div id="experience-section">
                <h2>Experience</h2>
                {
                !addingJob 
                ? <button onClick={() => setAddingJob(true)}>Add new experience</button>
                : <>
                    <form onSubmit={handleJobSubmit}>
                        <label htmlFor="">Company Name</label>
                        <input type="text" name="company" onChange={handleJobChange}/>
                        <label htmlFor="">Position</label>
                        <input type="text" name="position" onChange={handleJobChange}/>
                        <label htmlFor="">Start Date</label>
                        <input type="date" name="startDate" onChange={handleJobChange}/>
                        <label htmlFor="">End Date</label>
                        <input type="date" name="endDate" onChange={handleJobChange}/>
                        <label htmlFor="">Location</label>
                        <input type="text" name="location" onChange={handleJobChange}/>
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="" cols="40" rows="7" maxLength="250" onChange={handleJobChange}></textarea>
                        <button>Add</button>
                        <button onClick={() => setAddingJob(false)}>Cancel</button>
                    </form>
                </>
                }
            </div>
            <Display></Display>
        </section>
    )
}

export default Generator;