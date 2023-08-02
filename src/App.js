import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>  
        <Routes>
          <Route
            path="/"
            element={
              <>
              </>
            }
          />
        </Routes>
      </Router>  
    </>
  );
}

export default App;
