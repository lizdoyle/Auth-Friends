import React from 'react';
import {Switch, Route} from "react-router-dom";

import Login from "./Components/Login/Login.js";
import Friends from "./Components/Friends/Friends.js";
import PrivateRoute from "./Components/PrivateRoute";

import './App.css';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Friends} />
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/friends" component={Friends} />
     </Switch>
    </div>
  );
}

export default App;
