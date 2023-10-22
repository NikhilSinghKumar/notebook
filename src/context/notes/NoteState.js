import NoteContext from "./noteContext";
import { useState } from 'react';

const NoteState = (props) =>{
    const s1 = {
        "name": "Nikhilanand",
        "class": "Prep"
    }
    const [state, setState] = useState(s1);
    const update = () =>{
        setTimeout(() => {
            setState({
                "name": "Lary",
                'class': "1st"
            })
        })
    }
    return (
        <NoteContext.Provider value = {{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;