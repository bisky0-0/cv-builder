export function NameJob(props) {
    return (
        <div id="name-job">
            <p id="cv-paper-name">{ props.name }</p>
            <p id="cv-paper-job-title">{ props.jobTitle}</p>
        </div>
    )
}