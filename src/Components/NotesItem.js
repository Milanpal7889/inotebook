import React, { useState } from 'react';
import NoteContext from '../context/notes/NoteContext'; 
import { useContext } from 'react';
import { Button } from "@material-tailwind/react";
import { EditNote } from '../Dialogues/EditNote';

const NotesItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context.notes;
    const { note } = props;
    const [open, setOpen] = useState(null);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-6">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {note.tittle}
                </div>
                <p className="text-gray-700 text-base">
                    {note.description}
                </p>
            </div>
            <div className='flex justify-between pb-2'>
                <Button className='ml-2' onClick={handleOpen}><i className="fa-regular fa-pen-to-square"></i></Button>
                {open && <EditNote open={true} handleClose={handleClose} id={note._id} tittle={note.tittle} description={note.description} tag={note.tag} />}
                <Button className='mr-2' onClick={() => { deleteNote(note._id) }}><i className="fa-solid fa-trash"></i></Button>
            </div>
        </div>
    )
}

export default NotesItem;
