import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
        msg : message,
        type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeclasslist = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
   
  }
  const toggleMode = (cls) => {
    removeclasslist()
    console.log(cls);
    document.body.classList.add("bg-"+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#191c52";
      showAlert("Dark Mode has been Enables","success");
      // document.title = "Textutiles - Dark Mode";

      // setInterval(() => {
      //   document.title = "Textutiles is amazing";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "installTextutiles";
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enables","success");
      // document.title = "Textutiles - Ligh Mode";
      // setInterval(() => {
      //   document.title = "Textutiles is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutiles";
      // }, 2000);
    }
  };
  return (
    <>
      <Router basename="/mytextutils">
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Try textUtils - word counter,remove extra spaces"
                mode={mode}
                alert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}
 
export default App;
