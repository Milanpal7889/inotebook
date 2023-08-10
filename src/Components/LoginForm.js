import React, { useState } from 'react'

const LoginForm = () => {
    
    const[note, setNote]=useState({email:"",password:""})

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
        setNote({email:"",password:""})
        const json = await response.json()
        console.log(json) 
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full max-w-sm mt-4">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Your Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={onChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" name='email' type="email" value={note.email} placeholder="Your Email" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={onChange} value={note.password} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name='password' id="inline-password" type="password" placeholder="******************" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            LogIn
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
