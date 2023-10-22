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
        }     
      ]

    const [notes, setNotes] = useState(notesInitial)  

    return (
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;