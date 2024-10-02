import React, { useEffect, useState } from "react";
import Createnotes from "./Createnotes";
import Note from "./Note";

const Notes = () => {
  const [inputText, setInputText] = useState("")
  const [notes, setNotes] = useState([])
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"))||[];
        setNotes(data);
  }, []);
  const saveHandler = () => {
      if(inputText.trim()=='') {
          const edit= window.alert('Type some thing')
        return edit;
      }else{
        const newData={
            id: Date.now(),
            text: inputText
        
        }
        const newDataes= [...notes,newData];
        setNotes(newDataes)
        localStorage.setItem("Notes", JSON.stringify(newDataes));
      }

      setInputText("")
      setEditToggle(null)
  }
  const deleteHandler = (id) => {
      const newNotes = notes.filter(n => n.id !== id)
      setNotes(newNotes)
  }
return (
  <div className='notes'>
      <Createnotes 
              inputText={inputText}
              setInputText = {setInputText} 
              saveHandler = {saveHandler}
              />
     
      {
          notes.map((note) => (
          
              <Note
                  key={note.id}
                  id={note.id}
                  text={note.text}
                  deleteHandler= {deleteHandler}
              />
          ))
      }
    
  </div>
)
}

export default Notes