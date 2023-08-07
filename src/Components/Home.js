import React from 'react'
import Notes from './Notes'
import { AlertColors } from './Alert'
const Home = () => {

  return (
    <div>
      <AlertColors/>
      <h1>
        add a note
      </h1>
      <Notes/>
    </div>
  )
}

export default Home
