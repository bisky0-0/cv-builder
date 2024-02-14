import { Contacts } from "./Contacts";
import { Education } from "./Education";
import { Experiences } from "./Experiences";
import { Skills } from "./Skills";
import { Languages } from "./languages";
import { AboutMe } from "./AboutMe";
import { PhotoInput } from "./ProfilePic";


export function Form(props) {

    console.log(props.work)
   
    return (
        
        <div id="form">

            <Contacts
                setName={props.setName}
                setJobTitle={ props.setJobTitle}
                setEmail={props.setEmail}
                setNumber={props.setNumber}
                setAddress={props.setAddress}
                setGender={props.setGender} />
            <Education education={props.education} setEducation={ props.setEducation} />
            <Experiences work={props.work} setWork={props.setWork} />
            <Skills skillsList={props.skillsList} setSkillsList={props.setSkillsList} />

            <Languages
                languagesList={props.languagesList}
                setLanguagesList={props.setLanguagesList}
            />

            <AboutMe setIntro={props.setIntro} />
            
            <PhotoInput setPicture={props.setPicture} />
        </div>
    )

    
}