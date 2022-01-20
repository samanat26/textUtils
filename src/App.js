import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbook from './components/Textbook';
import React, { useState } from 'react'
import Alert from './components/Alert';

//router...................................
import {
  
  Routes,
  Route,

} from "react-router-dom";

function App() {
const [mode, setMode] = useState('light'); //wheater mode is light or dark
const [alert, setAlert] = useState(null)

const showAlert = (message,type)=>{
  setAlert({
    msg :   message,
    type : type
  })

  setTimeout(() => {
    setAlert(null);
  }, 1500);

}

// const removeBodyCls = ()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')
//   document.body.classList.remove('bg-primary')
// }

const toggle = () =>{
  // removeBodyCls();

  // document.body.classList.add('bg-' +cls)
  if (mode === 'light') {
    setMode( 'dark')
    document.body.style.backgroundColor = '#051a38';
    showAlert("Dark mode has been enabled", "success");
    // document.title= 'TextUtils - Dark Mode';
    

  } else {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    // document.title = 'TextUtiles - Light Mode';
  }}

  return (
    <>
  <Navbar title = "TextUtils"  about = "Info"  mode = {mode} toggle={toggle}/> 
  <Alert alert={alert}/>
  <div className="container my-4">
    
    <Routes>
      
    <Route path="/" element={<Textbook heading = "Try TextUtils - Word Counter | Remove Extra Spaces" mode = {mode} showAlert = {showAlert}  />}>
      </Route>

          <Route path="/about" element = { <About mode = {mode} />}>
          
          </Route>
        
      </Routes>

  </div>

    </>
  );
}

export default App;
