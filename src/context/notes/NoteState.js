import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const [notes, setNotes] = useState([]);

    // Fetch all notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZDA5MDM4MzZiMzRlMzRjMGNjOGIyIn0sImlhdCI6MTY5MTM5NjEzNH0.ENqZW0CdBBjjD0itF1OeEdW3-Ol6Y_41KC54o3zptzA'
            }
        })
        const json = await response.json()
        setNotes(json)
    }


    // Add a note 
    const addNote = async (tittle, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZDA5MDM4MzZiMzRlMzRjMGNjOGIyIn0sImlhdCI6MTY5MTM5NjEzNH0.ENqZW0CdBBjjD0itF1OeEdW3-Ol6Y_41KC54o3zptzA'
            },
            body: JSON.stringify({ tittle, description, tag })
        });

        if (response.ok) {
            const note = {
                "tittle": tittle,
                "description": description,
                "tag": tag,
                "date": new Date().toString(),
            };

            setNotes([...notes, note]);
        } else {
            // Handle error
            console.error("Error adding note:", response.statusText);
        }
    };

    // Delete a note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZDA5MDM4MzZiMzRlMzRjMGNjOGIyIn0sImlhdCI6MTY5MTM5NjEzNH0.ENqZW0CdBBjjD0itF1OeEdW3-Ol6Y_41KC54o3zptzA'
            }
        })
        let newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
        const json = await response.json()
        console.log(json)
    }

    // Edit a note
    const editNote = async (id, tittle, description, tag) => {

        // API call
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZDA5MDM4MzZiMzRlMzRjMGNjOGIyIn0sImlhdCI6MTY5MTM5NjEzNH0.ENqZW0CdBBjjD0itF1OeEdW3-Ol6Y_41KC54o3zptzA'
            },
            body: JSON.stringify({ tittle, description, tag })
        })
        const json = await response.json()
        console.log("json edit", json)

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
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;


