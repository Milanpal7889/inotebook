import {
    Card,
    Input,
    Button,
    Typography,
    Textarea
} from "@material-tailwind/react";
import noteContext from '../context/notes/NoteContext'
import { useContext, useState } from "react";

const AddNote = () => {
    const context = useContext(noteContext)
    let { addNote, getNotes } = context

    const [note, setNote] = useState({ tittle: "", description: "", tag: "default" })
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const onClick = (e) => {
        addNote(note.tittle, note.description, note.tag)
        getNotes()
        setNote({ tittle: "", description: "", tag: "default" })

    }

    return (
        <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
                Add a Note
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input required minLength={5} onChange={onChange} size="lg" id="tittle" value={note.tittle} name="tittle" label="Tittle" />
                    <Textarea required minLength={5} onChange={onChange} id="description" value={note.description} name="description" label="Description" />
                    <Input onChange={onChange} size="lg" id="tag" name="tag" label="Tag" value={note.tag} />
                </div>
                <Button disabled={
                    !(note.tittle && note.tittle.length > 5) ||  // Check if note.title is defined and has length > 5
                    !(note.description && note.description.length > 5) // Check if note.description is defined and not empty
                } onClick={onClick} className="mt-6" fullWidth>
                    AddNote
                </Button>
            </form>
        </Card>
    );
}

export default AddNote

