import { useState, useRef } from "react";
import { Value } from "sass";

export function Contacts(props) {

    return (
        <div className="contacts">
            <h2 className="left-side-h">Contacts</h2>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="First and Last Name" onChange={(e) => props.setName(e.target.value)} />
            
            <label htmlFor="job-title">Job Title</label>
            <input type="text" name="job-title" id="job-title" placeholder="Doctor, Teacher, Developer,....." onChange={(e)=> props.setJobTitle(e.target.value)}/>
            
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="Email" placeholder="Your Email@example.com" onChange={(e) => props.setEmail(e.target.value)}/>

            <label htmlFor="number">Phone Number</label>
            <input type="number" name="number" id="number" placeholder="Enter Phone Number" onChange={(e) => props.setNumber(e.target.value)}/>
            
            <label htmlFor="Address">Address</label>
            <input type="text" placeholder="City, Country" onChange={(e) => props.setAddress(e.target.value)} />
            
            <label htmlFor="gender">Gender</label>
            <input type="text" name="gender" id="gender" placeholder="Male/Female" onChange={(e)=> props.setGender(e.target.value)}/>
        </div>
    )
}