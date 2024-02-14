import { v4 as uuidv4 } from 'uuid';
import trashpin from "../../assets/xmark-solid.svg"


export function Experiences({ work, setWork }) {
    function updateWorkObject(prop, value) {
        const list = [...work];
        let lastIndex = list.length -1

        list[lastIndex][prop] = value;
        setWork(list);
    }

    function setEmptyInputs() {
        const inputFields = document.querySelectorAll('.Experiences input, .Experiences textarea');
        console.log(inputFields)
        inputFields.forEach((input) => {
            input.value = '';
        });
    }

    function addWork() {
        const list = [...work, {
        id: uuidv4(),
        startDate: '',
        endDate: '',
        location: '',
        company: '',
        position: '',
        discription: '',
        added: false
        }]

        console.log(list[list.length - 2])
        if (Object.values(list[list.length - 2]).every(val => val !== '')) {
            list[list.length - 2]['added'] = true
            setEmptyInputs();
            setWork(list);
        } 
    }

    function toggleList() {
        let list =  document.getElementById('work-list')
        list.style.display === "none" ? 
            list.style.display = "flex" :
            list.style.display = "none"
    }

    function deletItem(stateList, id) {
        let list = [...stateList]
        let index = list.indexOf(list.find((elem) => elem.id === id))
        list.splice(index, 1)
        console.log(list)
        setWork(list)
    }




    return (
        <div className="Experiences">
                        <h2>Experiences</h2>
           <label htmlFor="company-name">Company Name</label>
            <input type="text" name="company-name" placeholder="Enter Company Name" onChange={(e)=> updateWorkObject('company', e.target.value)}/>
            
            <label htmlFor="position-title">Position Title</label>
            <input type="text" name="position-title" placeholder="Enter Position Title" onChange={(e)=> updateWorkObject('position', e.target.value)}/>
            
            <label htmlFor="job-start-date">Start Date</label>
            <input type="date" name="job-start-date" id="job-start-date" placeholder="Enter Start Date" onChange={(e)=> updateWorkObject('startDate', e.target.value)}/>

            <label htmlFor="job-end-date">End Date</label>
            <input type="date" name="job-end-date" id="job-end-date" placeholder="Enter End Date" onChange={(e)=> updateWorkObject('endDate', e.target.value)}/>
            
            <label htmlFor="job-location">Location</label>
            <input type="text" name="job-location" onChange={(e)=> updateWorkObject('location', e.target.value)} />
            
            <label htmlFor="job-discription" >Discription</label>
            <textarea name="job-discription" onChange={(e)=> updateWorkObject('discription', e.target.value)} maxLength={400}/>
            
            <button id="add-work-btn" onClick={() => addWork()}>Add</button>
            
            <div id="work-box">

                <button id="drop-work-list" onClick={() => toggleList()}>show skills list</button>
                
                <div id="work-list">
                    {work.map((item => {
                        if (item.added === true) {
                            return (
                            
                                <div className="list-item" key={item.id}>
                                    <span id="work-title">{item.company}</span>
                                    <img src={trashpin} alt="trashpin" className="delete-work" onClick={() => deletItem(work, item.id)} />
                                </div>
                            )
                        }
                        }))}
                </div>

            </div>
        </div>
    )
    
}