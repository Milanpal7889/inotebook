import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const Notes = [
        {
            "_id": "64ce0ad8771ef264560a0271",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:52.357Z",
            "__v": 0
        },
        {
            "_id": "64ce0adb771ef264560a0272",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:55.774Z",
            "__v": 0
        },
        {
            "_id": "64ce0add771ef264560a0273",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:57.632Z",
            "__v": 0
        },
        {
            "_id": "64ce0adb771ef264560a0274",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:55.774Z",
            "__v": 0
        },
        {
            "_id": "64ce0add771ef264560a0275",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:57.632Z",
            "__v": 0
        },
        {
            "_id": "64ce0adb771ef264560a0276",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:55.774Z",
            "__v": 0
        },
        {
            "_id": "64ce0add771ef264560a0277",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:57.632Z",
            "__v": 0
        },
        {
            "_id": "64ce0adb771ef264560a0278",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:55.774Z",
            "__v": 0
        },
        {
            "_id": "64ce0add771ef264560a0279",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:57.632Z",
            "__v": 0
        },
        {
            "_id": "64ce0adb771ef264560a0280",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:55.774Z",
            "__v": 0
        },
        {
            "_id": "64ce0add771ef264560a0281",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new laptop",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:57.632Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(Notes) 

    // Add a note 
    const addNote = (tittle, description, tag) =>{
        // todo api call
        let  note = {
            "_id": "64ce0add771ef264560a0282",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": "my new laptp",
            "description": "i got new new addded",
            "tag": "new laptop",
            "date": "2023-08-05T08:39:57.632Z",
            "__v": 0
        }
        setNotes(notes.push(note))
    }

    // Delete a note
    const deleteNote = () =>{

    }

    // Edit a note
    const editNote = () =>{
        
    }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children }
        </NoteContext.Provider>
    )
}


export default NoteState