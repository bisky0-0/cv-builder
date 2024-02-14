export function AboutMe(props) {
    return (
        <div id="about-me">
            <h2 id="about-me-heading">About Me</h2>

            <label htmlFor="about-me">Describe Yourself</label>
            <textarea type="text" name="about-me" id="about-me" maxLength={400} placeholder="breifly decribe yourself"
                onChange={(e) => props.setIntro(e.target.value)} />
        </div>
    )
}