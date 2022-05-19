import React, {useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Singledog from "./components/singledog"
import Alldogs from "./components/alldogs"

function App() {
  const [singledog, setSingledog] = useState({});
  const setSingleDogPage = (image,name,age,description,breed) => {
    setSingledog({image: image, name: name, age: age, description: description,breed: breed})
 }

  return (
    <div className="App">
      <Helmet>
        <title>JRR Dog Adoption Center</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
      </Helmet> 
      <Router> 
      <Navbar />
      <Routes >
        <Route exact path= "/" element= { <Homepage />}/>
        <Route exact path= "/singledog" element= { <Singledog singledog={singledog}/>}/> 
        <Route exact path= "/alldogs" element= { <Alldogs setSingleDogPage={setSingleDogPage}/>}/> 
      </Routes>
      </Router>
   
    </div>
  );
}

export default App;
