import { UserPic } from "./Pic";
import { LanguagesSection } from "./languagesSection";
import { ContactsSection } from "./Contact-section";
import { SkillsSection } from "./Skills-section";

import { NameJob } from "./NameJobTitle";
import { Intro } from "./introSection";
import { Education } from "./Education-section";
import { ExperiencesSection } from "./Work-section";

export function CVPaper(props) {
    return (
        <div className="cv-paper" ref={ props.pdfRef}>
            <div className="left-section">
                <UserPic picture={props.picture} />
                <ContactsSection
                    number={props.number}
                    email={props.email}
                    address={props.address}
                    gender={props.gender}
                    setJobTitle={props.setJobTitle}
                />

                <SkillsSection
                    skillsList={props.skillsList}
                    setSkillsLis={props.setSkillsList}
                />

                <LanguagesSection
                languagesList={props.languagesList}
                setLanguagesList={props.setLanguagesList}
                />
            </div>


            <div className="right-section">
                <NameJob
                    name={props.name}
                    jobTitle={props.jobTitle}
                />

                <Intro intro={props.intro} />
                <Education education={props.education} />
                <ExperiencesSection work={props.work} />
            </div>
        </div>
    )
}