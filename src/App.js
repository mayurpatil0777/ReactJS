import React, { Component } from 'react';
import './App.css';
import MainParent from './components/MainParent'
import UseStateParent from './components/Hooks/UseStateParent'
import WithCounter from './components/WithCounter'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Axios from './components/Axios';
import ModalParent from './components/ModalParent';
import ReactAccordion from './components/ReactAccordion';
import ReactCollapsible from './components/ReactCollapsible'
import AppFlow from './components/AppFlow'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  render(){
  
  return (
    <Router>
        <div>
        {this.state.apiResponse}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/axios'} className="nav-link">Axios</Link></li>
            <li><Link to={'/crud'} className="nav-link">Crud</Link></li>
            <li><Link to={'/appFlow'} className="nav-link">App Flow</Link></li>
            <li><Link to={'/hooks-useState/useStateSimple'} className="nav-link">Hooks(Use State)</Link></li>
            <li><Link to={'/hoc'} className="nav-link">HOC</Link></li>
            <li><Link to={'/modal'} className="nav-link">Modal</Link></li>
            <li><Link to={'/reactAccordion'} className="nav-link">React Accordion</Link></li>
            <li><Link to={'/reactCollapsible'} className="nav-link">React Collapsible</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/axios' component={Axios} />
              <Route path='/crud' component={MainParent} />
              <Route path='/hooks-useState/useStateSimple' component={UseStateParent} />
              <Route path='/appFlow' component={AppFlow} />

              <Route path='/reactAccordion' component={ReactAccordion} />
              <Route path='/reactCollapsible' component={ReactCollapsible} />
              
              <Route path='/hoc' component={WithCounter} />
              <Route path='/modal' component={ModalParent} />
          </Switch>
        </div>
      </Router>
    
  );
}
}

export default App;
