import NoteContext from "./noteContext";
import { useState } from 'react';

const NoteState = (props) =>{
  const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get all Note
    const getNotes = async () => {
      // API Call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyYzQ0ZDhlNjU2YTk3MmMzOTA1OTIxIn0sImlhdCI6MTY5NzQ3NTA0M30.Qj01rMHPB6eE658JYOaqzHUQPOmkv5bHaULk90cY9Zs"
        },
      })
      const json = await response.json()
      console.log(json);
      setNotes(json)
    }
    
    // Add a Note
    const addNote = async (title, description, tag) => {
      // Todo: API Call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyYzQ0ZDhlNjU2YTk3MmMzOTA1OTIxIn0sImlhdCI6MTY5NzQ3NTA0M30.Qj01rMHPB6eE658JYOaqzHUQPOmkv5bHaULk90cY9Zs"
        },
        body: JSON.stringify({title, description, tag}), 
      })

      console.log("Adding a note")
      const note ={
        "_id": "6530311fd06067b77da3574f",
        "user": "652c44d8e656a972c3905921",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-10-18T19:25:19.720Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id) => {
      // ToDo: API Call
      console.log("delete note with id" + id)
      const newNotes= notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
      // API Call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyYzQ0ZDhlNjU2YTk3MmMzOTA1OTIxIn0sImlhdCI6MTY5NzQ3NTA0M30.Qj01rMHPB6eE658JYOaqzHUQPOmkv5bHaULk90cY9Zs"
        },
        body: JSON.stringify({title, description, tag}), 
      });
    
      // logic to edit in Client
      for(let index=0; index<notes.length; index++){
        const element = notes[index];
        if(element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    }

    return (
        <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;