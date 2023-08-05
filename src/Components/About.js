import React, { useEffect } from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

const About = () => {
    const array = useContext(noteContext);
    useEffect(() => {
        // Check if a and a.update exist before calling the update function
        if (array && array.update) {
            array.update(); 
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            This is about {array && array.state ? array.state.name : 'N/A'}
        </div>
    );
};

export default About;
