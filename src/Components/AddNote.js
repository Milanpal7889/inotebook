import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import noteContext from '../context/notes/NoteContext'
import { useContext, useState } from "react";

const AddNote = () => {
    const context = useContext(noteContext)
    let { addNote } = context

    const[note, setNote] = useState({tittle: "default", description: "default", tag: "default"}) 
    const onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})  
    }

    const onClick = (e) =>{
        e.preventDefault()
        addNote(note.tittle, note.description, note.tag)
    }

    return (
        <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
                Add a Note
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input onChange={onChange} size="lg" id="tittle" name="tittle" label="Tittle" />
                    <Input onChange={onChange} size="lg" id="description" name="description" label="Description" />
                    <Input onChange={onChange} size="lg" id="tag" name="tag" label="Tag" />
                </div>
                <Button onClick={onClick} className="mt-6" fullWidth>
                    AddNote
                </Button>
            </form>
        </Card>
    );
}

export default AddNote

