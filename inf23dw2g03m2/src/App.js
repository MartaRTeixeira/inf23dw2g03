import React, { useEffect, useContext } from 'react';
import './App.css';
import { gapi } from 'gapi-script';
import { AuthProvider } from "./components/authContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from './components/topbar';
import AnimalList from './resources/AnimalList';
import AnimalEdit from './resources/AnimalEdit';
import AnimalNew from './resources/AnimalNew';
import AdoptionList from './resources/AdoptionList';
import AdoptionEdit from './resources/AdoptionEdit';
import AdoptionNew from './resources/AdoptionNew';
import PersonList from './resources/PersonList';
import VolunteerList from './resources/VolunteerList';
import VolunteerEdit from './resources/VolunteerEdit';
import VolunteerNew from './resources/VolunteerNew';
import PersonEdit from './resources/PersonEdit';
import PersonNew from './resources/PersonNew';


const clientId = "146954126349-jlp6bek411g29mj7dl27p70mssiihf9v.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start);
  });

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <TopBar />
          <Routes>
            <Route path="/person" element={<PersonList/>} />
            <Route path="/person/new/*" element={<PersonNew/>}/>
            <Route path="/person/edit/:id/*" element={<PersonEdit/>}/>
            <Route path="/animal" element={<AnimalList/>} />
            <Route path="/animal/new/*" element={<AnimalNew/>}/>
            <Route path="/animal/edit/:id/*" element={<AnimalEdit/>} />
            <Route path="/adoption" element={<AdoptionList/>} />
            <Route path="/adoption/new/*" element={<AdoptionNew/>}/>
            <Route path="/adoption/edit/:id/*" element={<AdoptionEdit/>}/>
            <Route path="/volunteer" element={<VolunteerList/>} />
            <Route path="/volunteer/new/*" element={<VolunteerNew/>}/>
            <Route path="/volunteer/edit/:id/*" element={<VolunteerEdit/>}/>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;