import React, { useContext, useEffect } from "react";
import NoteContext from '../context/notes/NoteContext';
import NotesItem from "./NotesItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, getNotes} = context;
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")){
            // Use Redirect to navigate to the login page
            getNotes();
        } else {
            navigate('/login');
        }
    }, []);

    return (
        <>
            <AddNote />
            <h1>Your notes</h1>
            <div className="flex flex-row flex-wrap">
                {notes.length===0 && "No notes are present"}
                {notes.map((note) => {
                    return <NotesItem key={note._id} note={note} />;
                })}
            </div>
        </>
    );
}

export default Notes;
