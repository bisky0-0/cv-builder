export function ExperiencesSection({work}) {
    console.log(work)
    return (
        <div id="work-section">
            <h2 id="work-h2">Experiences</h2>
            {work.map(item => {
                return (
                    <>
            <div className="work-box">
            <div className="left-work-box">
                <div className="work-date">
                <div className="work-start-date">{item.startDate}</div>
                        <div className="work-end-date">{ item.endDate}</div>
            </div>
                    <div className="work-location">{ item.location }</div>
                </div>

                <div className="right-work-box">
                    <div className="company-name">{item.company}</div>
                    <div className="comany-position">{item.position}</div>
                    <div className="work-discription">{item.discription}</div>
                </div>
            </div>
                    </>
                )
            })}
        </div>
    )
}