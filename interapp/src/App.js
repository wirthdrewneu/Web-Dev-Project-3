import React, { useState, useEffect } from "react" ;
import './App.css';
import NavBar from "./components/NavBar.js";
import AppCalendar from "./components/AppCalendar.js";
// import History from "./History.js";
import ApplicationsTable from "./components/ApplicationsTable";
import AppForm from "./components/AppForm.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //  Link
} from "react-router-dom";


function App() {

  // const [show, setShow] = useState(true);
  const [invites, setinvites] = useState([]);

  const getInv = async () => {
    console.log("getting Inv");
    try {
      const _invites = await fetch("/calendar").then((res) => res.json());
      console.log("got posts", _invites);
      setinvites(_invites);
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getInv();
  }, [])  

  return (
    <div className="App">
    <NavBar></NavBar>
    <Router>
        <Switch>
          <Route path="/appliedHistory">
            <ApplicationsTable />
          </Route>
          <Route path="/newApplication">
            <AppForm edit={false} itemDetails={null} />
          </Route>
          <Route path="/">
            <AppCalendar invites = {invites}/>
          </Route>
        </Switch>
    </Router>
    
    

    </div>
  );
}

export default App;

