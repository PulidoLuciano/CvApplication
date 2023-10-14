function Display({personal, jobs, studies}){
    return (
        <section id="display-section">
            <div id="display">
                <header>
                    <h1>{personal.name}</h1>
                    <p><strong>E-Mail:</strong> {personal.email}</p>
                    <p><strong>Phone:</strong> {personal.phone}</p>
                    <p><strong>Location:</strong> {personal.location}</p>
                </header>
                <main>
                    {
                        (studies.length != 0) ? 
                        <section>
                            <h2>Studies</h2>
                            <ul>
                                {
                                    studies.map(e => {
                                        return( 
                                        <li key={e.id}>
                                            <strong>{e.school} - {e.degree}</strong>
                                            <div>
                                                <p><i>{e.startDate} - {(e.endDate != "") ? e.endDate : "Now"}</i></p>
                                                <p><i>{e.location}</i></p>
                                            </div>
                                        </li>)
                                    })
                                }
                            </ul>
                        </section> : null
                    }
                    {
                        (jobs.length != 0) ? 
                        <section>
                            <h2>Jobs</h2>
                            <ul>
                                {
                                    jobs.map(e => {
                                        return( 
                                        <li key={e.id}>
                                            <strong>{e.company} ({e.position})</strong>
                                            <div>
                                                <p><i>{e.startDate} - {(e.endDate != "") ? e.endDate : "Now"}</i></p>
                                                <p><i>{e.location}</i></p>
                                                <p>{e.description}</p>
                                            </div>
                                        </li>)
                                    })
                                }
                            </ul>
                        </section> : null
                    }  
                </main>
                
            </div>    
        </section>
    )
}

export default Display;