export function SkillsSection(props) {
    let list = props.skillsList
    console.log(list)
    return (
        <div className="skills-section">
            <h2 id="skills-h2">SKILLS</h2>
            <div className="skills-list-section">
             
                <ul>
                    {list.map(item => (<li key={item.id}>{item.title}</li>) ) }
                </ul>
            </div>
        </div>
    )
}