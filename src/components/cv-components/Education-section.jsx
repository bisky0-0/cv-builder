export function Education({ education }) {
    return (
        <div id="education-section">
            <h2 id="education-heading">Educatiion</h2>
            {education.map(edu => {
                return (
                    <>
                <div className="education-box">
                <div className="left-edu-box">
                <div className="education-date">
                <div className="education-start-date">{ edu['startDate']}</div>
                <div className="education-end-date">{ edu['endDate'] }</div>
                </div>
                <div id="edu-location">{edu['location'] }</div>
                </div>
    
                    <div className="degree-uni">
                    <div className="university">{ edu['school'] }</div>
                        <div className="degree">{ edu['degree']}</div>
                                <div className="edu-discription">{ edu['discription'] }</div>
                </div>
                    </div>
                </>
                )
            })}
           
        </div>
    )
}