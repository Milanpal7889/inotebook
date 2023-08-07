import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>  
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Home/>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
              <About/>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <LoginForm/>
              </>
            }
          />
          
        </Routes>
      </Router>  
      </NoteState>
    </>
  );
}

export default App;
