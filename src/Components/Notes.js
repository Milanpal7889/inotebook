import React, { useContext, useEffect } from "react";
import noteContext from '../context/notes/NoteContext'
import NotesItem from "./NotesItem";
import AddNote from "./AddNote";
import { EditNote } from "../Dialogues/EditNote";

const Notes = () => {
    const context = useContext(noteContext)
    const {notes, getNotes} = context
    useEffect(()=>{
        getNotes()
        //eslint-disable-next-line
    },[])
    
    return (
        <>
            <AddNote/>
            <EditNote/> 
            <h1>
                Your notes
            </h1>
            <div className="flex flex-row flex-wrap">
            {notes.map((note) => {
                return <><NotesItem key={note._id} note={note} /></>
            })}
            </div>
        </>
    )
}

export default Notes
