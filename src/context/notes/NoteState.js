import NoteContext from "./noteContext";
import { useState } from 'react';

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "6530311dd06067b77da35749",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:17.030Z",
          "__v": 0
        },
        {
          "_id": "6530311fd06067b77da3574b",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:19.720Z",
          "__v": 0
        },
        {
          "_id": "6530311dd06067b77da35745",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:17.030Z",
          "__v": 0
        },
        {
          "_id": "6530311fd06067b77da35746",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:19.720Z",
          "__v": 0
        },
        {
          "_id": "6530311dd06067b77da35740",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:17.030Z",
          "__v": 0
        },
        {
          "_id": "6530311fd06067b77da3574c",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:19.720Z",
          "__v": 0
        },
        {
          "_id": "6530311dd06067b77da3574k",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:17.030Z",
          "__v": 0
        },
        {
          "_id": "6530311fd06067b77da3574v",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:19.720Z",
          "__v": 0
        },
        {
          "_id": "6530311dd06067b77da3574d",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:17.030Z",
          "__v": 0
        },
        {
          "_id": "6530311fd06067b77da3574x",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:19.720Z",
          "__v": 0
        },
        {
          "_id": "6530311dd06067b77da3574s",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:17.030Z",
          "__v": 0
        },
        {
          "_id": "6530311fd06067b77da3574f",
          "user": "652c44d8e656a972c3905921",
          "title": "Guest List",
          "description": "Adding guests to invite in party",
          "tag": "fest",
          "date": "2023-10-18T19:25:19.720Z",
          "__v": 0
        }     
      ]

    const [notes, setNotes] = useState(notesInitial)
    
    // Add a Note
    const addNote = (title, description, tag) => {
      // Todo API Call
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
      // ToDo API Call
    const deleteNote = (id) => {
      console.log("delete note with id" + id)
      const newNotes= notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }
    // Edit a Note
    const editNote = () => {
      
    }

    return (
        <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;