/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';
import AllDogsPage from './pages/AllDogsPage';
import Retriever from './components/retriever';
import Bulldog from './components/bulldog';
import Corgi from './components/corgi';
import Samoyed from './components/samoyed';
import allDogsData from './components/database';

import './App.css';


// function App() {
//   const [singledog, setSingledog] = useState({});
//   const setSingleDogPage = (image, name, age, description, breed, characteristics) => {
//     setSingledog({image: image, name: name, age: age, description: description, breed: breed, characteristics: characteristics});
//   };

//   return (
//     <div className="App">
//       <Helmet>
//         <title>JRR Dog Adoption Center</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com"></link>
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
//         <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
//       </Helmet>
//       <Router>
//         <Navbar />
//         <Routes >
//           <Route exact path= "/" element= { <Homepage />}/>
//           <Route exact path= "/singledog" element= { <Singledog singledog={singledog}/>}/>
//           <Route exact path= "/alldogs" element= { <Alldogs setSingleDogPage={setSingleDogPage}/>}/>
//           <Route exact path= "/retrievers" element= { <Retriever setSingleDogPage={setSingleDogPage}/>}/>
//           <Route exact path= "/bulldogs" element= { <Bulldog setSingleDogPage={setSingleDogPage}/>}/>
//           <Route exact path= "/corgis" element= { <Corgi setSingleDogPage={setSingleDogPage}/>}/>
//           <Route exact path= "/samoyeds" element= { <Samoyed setSingleDogPage={setSingleDogPage}/>}/>
//         </Routes>
//       </Router>

//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Helmet>
        <title>JRR Dog Adoption Center</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Navbar />
      <Switch>
        <Route path='/' exact={true}><Homepage allDogsData={allDogsData}/></Route>
        <Route path='/singledog' exact={true}><AllDogsPage allDogsData={allDogsData} /></Route>
        <Route path='/alldogs' exact={true}><AllDogsPage allDogsData={allDogsData} /></Route>
        <Route path='/retrievers'><Retriever /></Route>
        <Route path='/bulldogs'><Bulldog /></Route>
        <Route path='/corgis'><Corgi /></Route>
        <Route path='/samoyeds'><Samoyed /></Route>
      </Switch>
    </Router>
  );
}

export default App;
