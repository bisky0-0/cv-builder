import deleteBtn from "../../assets/xmark-solid.svg"
import { v4 as uuidv4 } from 'uuid';

export function Languages({ languagesList, setLanguagesList }) {
  
    function AddLanguage(input) {
        // e.preventDefault()
        if (input.value !== '') {
            const list = [...languagesList, { id: uuidv4(), title: input.value }]
            input.value = ''
            setLanguagesList(list)
        }
        // props.skillsList.push({ id: props.skillsList.length++, title: input.value})
    }


    function toggleList() {
        let list =  document.getElementById('languages-list')
        list.style.display === "none" ? 
            list.style.display = "flex" :
            list.style.display = "none"
    }

    function deleteLang(stateList, id) {
        let list = [...stateList]
        let index = list.indexOf(list.find((elem) => elem.id === id))
        list.splice(index, 1)
        setLanguagesList(list)
    }

    return (
        <div className="languages">
            <h2>Languages</h2>
            
            <label htmlFor="languages-name">Languages</label>
            <input type="text" name="languages-name" placeholder="Enter languages you can speak" id="languages-input" />
            
            <button id="add-languages-btn" onClick={() => AddLanguage(document.getElementById('languages-input'))}>Add</button>
            
            <div id="languages-box">

                <button id="drop-languages-list" onClick={() => toggleList()}>Show Languages List</button>
                
                <div id="languages-list">
                    {languagesList.map((language => {
                        return (
                            <div className="list-item" key={language.id}>
                                <span className="languages-title">{language.title}</span>
                               <img src={deleteBtn} alt="trashpin" className="delete-language" onClick={()=> deleteLang(languagesList, language.id)}/>
                            </div>
                   )
                    }))}
                </div>

            </div>

        </div>
    )
}