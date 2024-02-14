export function LanguagesSection(props) {
    let list = props.languagesList
    console.log(list)
    return (
        <div className="languages-section">
            <h2 id="languages-h2">Languages</h2>
            <div className="languages-list-section">
             
                <ul>
                    {list.map(item => (<li key={item.id}>{item.title}</li>) ) }
                </ul>
            </div>
        </div>
    )
}