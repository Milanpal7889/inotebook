import React from 'react'

const NotesItem = (props) => {
    const { note } = props
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-6">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {note.tittle}
                </div>
                <p className="text-gray-700 text-base">
                    {note.description}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nulla dolore eos facilis officiis iure asperiores. Animi dolorum officiis iure, rem vero ducimus itaque nihil, magnam ipsa, porro fugiat facilis.
                </p>
            </div>
            <i className="fa-solid fa-trash"></i>
            <i className="fa-regular fa-pen-to-square"></i>
        </div>
    )
}

export default NotesItem
