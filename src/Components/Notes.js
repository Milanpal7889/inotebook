import React, { useContext, useEffect } from "react";
import NoteContext from '../context/notes/NoteContext';
import NotesItem from "./NotesItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, token, getNotes } = context;
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            console.log(token)
            // Use Redirect to navigate to the login page
            navigate('/login');
        } else {
            getNotes(token);
        }
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <AddNote />
            <h1>Your notes</h1>
            <div className="flex flex-row flex-wrap">
                {notes.map((note) => {
                    console.log(note._id);
                    return <NotesItem key={note._id} note={note} />;
                })}
            </div>
        </>
    );
}

export default Notes;
