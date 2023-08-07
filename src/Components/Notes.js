import React, { useContext } from "react";
import noteContext from '../context/notes/NoteContext'
import NotesItem from "./NotesItem";
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, addNotes } = context
    return (
        <>
            <AddNote/>
            <h1>
                Your notes
            </h1>
            <div className="flex flex-row flex-wrap">
            {notes.map((note) => {
                return <><NotesItem note={note} /></>
            })}
            </div>
        </>
    )
}

export default Notes
