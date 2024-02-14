import { v4 as uuidv4 } from 'uuid';
import trashpin from "../../assets/xmark-solid.svg"


export function Education({ setEducation, education }) {

    function updateEducationObject(prop, value) {
        const list = [...education];
        let lastIndex = list.length -1

        list[lastIndex][prop] = value;
        setEducation(list);
    }

    function setEmptyInputs() {
        const inputFields = document.querySelectorAll('.education input, .education textarea');
        console.log(inputFields)
        inputFields.forEach((input) => {
            input.value = '';
        });
    }

    function addEductaion() {
        
        const list = [...education, {
            id: uuidv4(),
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            discription: '',
            added: false
        }]

        list[list.length - 2]['id'] = uuidv4()
        
        if (Object.values(list[list.length - 2]).every(val => val !== '')) {
            list[list.length - 2]['added'] = true
            setEmptyInputs();
            setEducation(list);
        } 
    }

    function toggleList() {
        let list = document.getElementById('edu-list')
        list.style.display === "none" ?
            list.style.display = "flex" :
            list.style.display = "none"
    }

    function deletItem(stateList, id) {
        let list = [...stateList]
        let index = list.indexOf(list.find((elem) => elem.id === id))
        list.splice(index, 1)
        console.log(list)
        setEducation(list)
    }


    
    
    return(
        <div className="education">
        <h2>Education</h2>
        <label htmlFor="school">School</label>
        <input type="text" name="school" placeholder=" Enter school / university" onChange={(e)=> updateEducationObject('school', e.target.value)}/>
        
        <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" placeholder="Enter Degree / Field Of Study" onChange={(e)=> updateEducationObject('degree', e.target.value)}/>
        
        <label htmlFor="start-date">Start Date</label>
        <input type="date" name="start-date" placeholder="Enter Start Date" onChange={(e)=> updateEducationObject('startDate', e.target.value)}/>
        
        <label htmlFor="end-date">End Date</label>
        <input type="date" name="end-date" placeholder="Enter End Date" onChange={(e)=> updateEducationObject('endDate', e.target.value)}/>
        
        <label htmlFor="location">Location</label>
            <input type="text" name="location" placeholder="Enter Location" onChange={(e) => updateEducationObject('location', e.target.value)} />
            <label htmlFor="work-discription">Discription</label>
            <textarea name="work-discription"onChange={(e)=> updateEducationObject('discription', e.target.value)} maxLength={400}/>
            
            <button id="add-edu-btn" onClick={() => addEductaion()}>Add</button>
            
            <div id="education-box">

           <button id="drop-edu-list" onClick={() => toggleList()}>show skills list</button>

          <div id="edu-list">
                    {education.map((item => {
                        if(item.added === true)return (
                      <div className="list-item" key={item.id}>
                          <span id="education-title">{item.school}</span>
                         <img src={trashpin} alt="trashpin" className="delete-education" onClick={()=> deletItem(education, item.id)}/>
                      </div>
             )
              }))}
          </div>

</div>
        </div>
    )
}
