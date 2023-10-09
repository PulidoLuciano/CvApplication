import { useState } from "react";
import Display from "./display";

function Generator(){
    
    const [addingJob, setAddingJob] = useState(false);
    const [addingStudy, setAddingStudy] = useState(false);
    const [personalData, setPersonalData] = useState({name:"", email:"", phone:"", location:""});
    
    function handlePersonalChange(event){
        let field = event.target.name;
        let newPersonal = {...personalData};
        newPersonal[field] = event.target.value;
        setPersonalData(newPersonal);
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
                    <form onSubmit={() => {preventDefault()}}>
                        <label htmlFor="">School</label>
                        <input type="text" name="school"/>
                        <label htmlFor="">Degree</label>
                        <input type="text" name="degree"/>
                        <label htmlFor="">Start Date</label>
                        <input type="text" name="startDate"/>
                        <label htmlFor="">End Date</label>
                        <input type="text" name="endDate"/>
                        <label htmlFor="">Location</label>
                        <input type="text" name="location"/>
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
                    <form onSubmit={() => {preventDefault(); }}>
                        <label htmlFor="">Company Name</label>
                        <input type="text" name="company"/>
                        <label htmlFor="">Position</label>
                        <input type="text" name="position"/>
                        <label htmlFor="">Start Date</label>
                        <input type="text" name="startDate"/>
                        <label htmlFor="">End Date</label>
                        <input type="text" name="endDate"/>
                        <label htmlFor="">Location</label>
                        <input type="text" name="location"/>
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="" cols="40" rows="7" maxLength="250"></textarea>
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