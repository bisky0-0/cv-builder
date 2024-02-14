import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Form } from "./form-components/Form"
import { CVPaper } from "./cv-components/CV-paper"




export function Main() {
    const intialEduArr = [{
        id: uuidv4(),
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
        discription: '',
        added: false
    }]

    const intialWorkArr = [{
        id: uuidv4(),
        startDate: '',
        endDate: '',
        location: '',
        company: '',
        position: '',
        discription: '',
        added: false,
    }]
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [address, setAddress] = useState(''); 
    const [intro, setIntro] = useState('');

    const [education, setEducation] = useState(intialEduArr)
    const [work, setWork] = useState(intialWorkArr)

    const [skillsList, setSkillsList] = useState([])
    const [languagesList, setLanguagesList] = useState([])

    const [picture, setPicture] = useState('')

    const pdfRef = useRef()



    console.log(education)
    return (
        <div id="main">
            <Form
                setName={setName}
                setJobTitle={setJobTitle}
                setEmail={setEmail}
                setNumber={setNumber}
                setAddress={setAddress}
                setGender={setGender}
                setSkillsList={setSkillsList}
                skillsList={skillsList}
                setLanguagesList={setLanguagesList}
                languagesList={languagesList}
                setIntro={setIntro}
                education={education}
                setEducation={setEducation}
                work={work}
                setWork={setWork}
                setPicture={setPicture}
            />



            <CVPaper
                name={name}
                email={email}
                number={number}
                address={address}
                gender={gender}
                jobTitle={jobTitle}
                skillsList={skillsList}
                languagesList={languagesList}
                intro={intro}
                education={education}
                work={work}
                pdfRef={pdfRef}
                picture={picture}
            />

        
        </div>
    )
}