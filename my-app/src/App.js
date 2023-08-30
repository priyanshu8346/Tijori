import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert'
import Signup from './components/Signup';
import Login from './components/Login';
import Notes from './components/Notes'
import { useState} from "react";

function App() {
  const [alert, setalert] = useState(null);
    const showAlert = (msg, color)=>{
      setalert({
        message: msg,
        color: color
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }
  return (
    <>
   < NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className='containerFirst'>
        <Routes>
        <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/home" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/notes" element={<Notes />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
        </Routes>
        </div>
      </Router>
   </ NoteState>
 </>
  );
}

export default App;
