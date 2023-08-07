import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const NotesInitial = []
    const [notes, setNotes] = useState(NotesInitial)

    // Fetch all notes
    const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
        method : 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZDA5MDM4MzZiMzRlMzRjMGNjOGIyIn0sImlhdCI6MTY5MTM5NjEzNH0.ENqZW0CdBBjjD0itF1OeEdW3-Ol6Y_41KC54o3zptzA'
        }
    })
    const json = await response.json()
    console.log(json)
    setNotes(json)
    }


    // Add a note 
    const addNote = async (tittle, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZDA5MDM4MzZiMzRlMzRjMGNjOGIyIn0sImlhdCI6MTY5MTM5NjEzNH0.ENqZW0CdBBjjD0itF1OeEdW3-Ol6Y_41KC54o3zptzA'
            },
            body: JSON.stringify({tittle, description, tag})
        })

        console.log("adding a new note")
        const note = {
            "_id": "64ce0add771ef264560a0282",
            "user": "64cd0903836b34e34c0cc8b2",
            "tittle": tittle,
            "description": description,
            "tag": tag,
            "date": "2023-08-05T08:39:57.632Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    // Delete a note
    const deleteNote = (id) => {
        console.log("deleting the note with id ", id)
        let newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a note
    const editNote = async (id, tittle, description, tag) => {

        // API call
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZDA5MDM4MzZiMzRlMzRjMGNjOGIyIn0sImlhdCI6MTY5MTM5NjEzNH0.ENqZW0CdBBjjD0itF1OeEdW3-Ol6Y_41KC54o3zptzA'
            },
            body: JSON.stringify({tittle, description, tag})
        })
        const json = response.json()

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.tittle = tittle;
                element.description = description;
                element.tag = tag
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, getNotes ,addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState