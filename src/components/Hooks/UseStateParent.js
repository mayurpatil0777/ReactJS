import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UseStateSimple from './UseStateSimple'
import UseStatePrevState from './UseStatePrevState'
import UseStateWithObject from './UseStateWithObject'
import UseStateWithArray from './UseStateWithArray';


function UseStateParent(){
    return (
        <Router>
          <div className="row">
        <div className="col-3">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className=" mr-auto">
            <li><Link to={'/hooks-useState/useStateSimple'} className="nav-link"> Use State Simple </Link></li>
            <li><Link to={'/hooks-useState/useStatePreviousState'} className="nav-link"> Use State Previous State </Link></li>
            <li><Link to={'/hooks-useState/useStateWithObject'} className="nav-link"> Use State with Object </Link></li>
            <li><Link to={'/hooks-useState/useStateWithArray'} className="nav-link"> Use State with Array </Link></li>

          </ul>
          </nav>
          </div>
          <div className="col-3">
          <Switch>
              <Route exact path='/hooks-useState/useStateSimple' component={UseStateSimple} />
              <Route exact path='/hooks-useState/useStatePreviousState' component={UseStatePrevState} />
              <Route exact path='/hooks-useState/useStateWithObject' component={UseStateWithObject} />
              <Route exact path='/hooks-useState/useStateWithArray' component={UseStateWithArray} />

             
          </Switch>
        </div>
        <div className="col-6" style={{'background':'#ededed'}}>
        <h4>Notes:</h4>
        <ol>
          <li>Call hooks at top level</li>
          <li>Don't call hooks inside loops, conditions, nested functions</li>
          <li>Only call hoks from React Functions</li>
          <li>Call them from within React Functions and not from any JavaScript functions</li>
          <li>Use Spread operator to manually update the state for setter function in useState</li>

        </ol>
        </div>
        </div>
      </Router>
    );
};

export default UseStateParent;