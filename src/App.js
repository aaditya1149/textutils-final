import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [texts, settexts] = useState("Enable DarkMode")

  const [alert, setalert] = useState(null)
  const showAlert =(message, type) =>{
    setalert({
      msg : message,
      type : type
    })
  }
  setTimeout(() => {
    setalert(null);
  }, 1500);

  const [mode, setmode] = useState("light")
  const toggleMode =() => {
    if (mode === "light"){
      setmode("dark");
      settexts("Enable LightMode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Activated", "success");
    }
    else {
      setmode("light");
      settexts("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Activated", "success");

    }
  }

  return (
    <>
    <Router>
    <Navbar title = "TextUtils" mode ={mode} toggleMode = {toggleMode} texts = {texts} />
    <Alert alert = {alert}/>

    <div className="container my-3" >
    <Routes>

    <Route exact path="/" element= {<TextForm showAlert={showAlert} heading ="Enter your text below to analyze." mode ={mode}/>} />

     <Route exact path ="/about" element={<About mode={mode}/>} />  
    </Routes>
    </div>

    </Router>
   </>
  );
}

export default App;

