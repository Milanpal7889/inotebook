import React, { useContext, useEffect } from "react";
import NoteContext from '../context/notes/NoteContext';
import NotesItem from "./NotesItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, getNotes} = context;
    const navigate = useNavigate()
    const tokens =localStorage.getItem('token')
    useEffect(() => {
        if (localStorage.getItem(('token').success)===false) {
            console.log("navigate")
            // Use Redirect to navigate to the login page
            navigate('/login');
        } else {
            console.log(tokens)
            getNotes();
        }
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <AddNote />
            <h1>Your notes</h1>
            <div className="flex flex-row flex-wrap">
                {notes.map((note) => {
                    return <NotesItem key={note._id} note={note} />;
                })}
            </div>
        </>
    );
}

export default Notes;
