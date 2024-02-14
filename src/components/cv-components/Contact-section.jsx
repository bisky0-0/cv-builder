import phone_icon from "../../assets/phone-solid.svg"
import envelope_icon from "../../assets/envelope-solid.svg"
import address_icon from "../../assets/location-dot-solid.svg"
import gender_icon from "../../assets/circle-user-solid.svg"

export function ContactsSection(props) {
    return (
        <div id="contacts-section">
            <h2 id="contacts-section-h2">CONTACTS</h2>
            <div className="contacts-box">
            <p id="cv-gender"><img  src={gender_icon}/>  { props.gender}</p>
            <p id="cv-number"><img  src={phone_icon}/>  { props.number}</p>
            <p id="cv-email"><img   src={envelope_icon}/> { props.email}</p>
            <p id="cv-address"><img src={address_icon} />  {props.address}</p>
                </div>
        </div>
    )
}