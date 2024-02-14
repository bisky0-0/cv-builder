import { v4 as uuidv4 } from 'uuid';
import trashpin from "../../assets/xmark-solid.svg"

export function Skills({ skillsList, setSkillsList }) {
  
    function AddSkill(input) {

        if (input.value !== '') {
            const list = [...skillsList, { id: uuidv4(), title: input.value }]
            input.value = ''
            setSkillsList(list)
        }
    }


    function toggleList() {
        let list =  document.getElementById('skills-list')
        list.style.display === "none" ? 
            list.style.display = "flex" :
            list.style.display = "none"
    }

    function deleteSkill(stateList, id){
        let list = [...stateList]
        let index = list.indexOf(list.find((elem) => elem.id === id))
        list.splice(index, 1)
        setSkillsList(list)
    }

    return (
        <div className="skills">
            <h2>Skills</h2>
            
            <label htmlFor="skill-name">Skill</label>
            <input type="text" name="skill-name" placeholder="Enter Skill" id="skills-input" />
            
            <button id="add-skill-btn" onClick={() => AddSkill(document.getElementById('skills-input'))}>Add</button>
            
            <div id="skills-box">

                <button id="drop-skills-list" onClick={() => toggleList()}>show skills list</button>
                
                <div id="skills-list">
                    {skillsList.map((skill => {
                        return (
                            <div className="list-item" key={skill.id}>
                                <span id="skill-title">{skill.title}</span>
                               <img src={trashpin} alt="trashpin" id="delete-skill" onClick={()=> deleteSkill(skillsList, skill.id)}/>
                            </div>
                   )
                    }))}
                </div>

            </div>

        </div>
    )
}