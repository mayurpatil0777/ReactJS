import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UseEffectSimple from './UseEffectSimple'
import UseEffectMouseOver from './UseEffectMouseOver'

function UseEffectParent(){
    return (
        <Router>
          <div className="row">
        <div className="col-3">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className=" mr-auto">
            <li><Link to={'/hooks-useEffect/useEffectSimple'} className="nav-link"> Use Effect Simple/Unmounting </Link></li>
            <li><Link to={'/hooks-useEffect/useEffectMouseOver'} className="nav-link"> Use Effect Mouse Over </Link></li>
            
          </ul>
          </nav>
          </div>
          <div className="col-3">
          <Switch>
              <Route exact path='/hooks-useEffect/useEffectSimple' component={UseEffectSimple} />
              <Route exact path='/hooks-useEffect/useEffectMouseOver' component={UseEffectMouseOver} />

             
          </Switch>
        </div>
        <div className="col-6" style={{'background':'#ededed'}}>
        <h4>Notes:</h4>
        <ol>
          <li>UseEffect needs useState to set initial value</li>
          <li>useEffect accepts two parameters as: <b>useEffect(()=>{},[])</b></li>
          <li>First Parameter is a <b>callback function</b></li>
          <li>Second Parameter is a <b>state that we need to update</b> passed in array</li>
          <li>For running useEffect only once: <b>Pass an empty array []</b></li>
          <li>Only call hoks from React Functions</li>
          <li>Call them from within React Functions and not from any JavaScript functions</li>

        </ol>
        </div>
        </div>
      </Router>
    );
};

export default UseEffectParent;