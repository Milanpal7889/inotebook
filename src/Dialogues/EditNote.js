import React, { useContext, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from "@material-tailwind/react";
import noteContext from '../context/notes/NoteContext';

export function EditNote(props) {
    const context = useContext(noteContext);
    const { editNote } = context;

    const [note, setNote] = useState({ id: props.id, tittle: props.tittle, description: props.description, tag: props.tag ? props.tag : "default" });

    const handleClose = () => {
        props.handleClose(); // Call the handleClose function passed as prop
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const onClick = async(e) => {
        await editNote(note.id, note.tittle, note.description, note.tag);
        handleClose(); // Close the dialog after editing
    };


    return (
        <Dialog open={props.open ? props.open : false} handler={handleClose}>
            <div className="flex items-center justify-between">
                <DialogHeader>Edit Note</DialogHeader>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5 cursor-pointer"
                    onClick={handleClose}
                >
                    <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <DialogBody divider>
                <div className="grid gap-6">
                    <Input required minLength={5} onChange={onChange} id="tittle" name="tittle" label="Title" value={note.tittle} />
                    <Textarea required minLength={5} onChange={onChange} id="description" name="description" label="Description" value={note.description} />
                    <Input onChange={onChange} id="tag" name="tag" label="Tag" value={note.tag} />
                </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
                <Button variant="outlined" color="red" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    disabled={
                        !(note.tittle && note.tittle.length > 5) ||  // Check if note.title is defined and has length > 5
                        !(note.description && note.description.length > 5) // Check if note.description is defined and not empty
                    }
                    variant="gradient"
                    color="green"
                    onClick={onClick}
                >
                    Save Changes
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
