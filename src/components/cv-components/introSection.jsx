export function Intro(props) {
    return (
        <div id="intro-section">
            <h2>ABOUT ME</h2>
            <p id="intro-para">
               {props.intro}
            </p>
        </div>
    )
}