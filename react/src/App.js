import React, { Component } from 'react';
import { ResultList } from './components/ResultList/ResultList';
import { ResultList2 } from './components/ResultList2/ResultList2';
import About from './components/About';
import Loader from './components/Loader';
import User from './components/User';
import Home from './components/Home';
import Opskrift from './components/Opskrift';
import NewPlan from './components/newPlan';
import facade from './apiFacade';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  BrowserRouter as Router,
  // HashRouter,
  Switch
} from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, username: '', role: '' };
  }
  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  };

  login = async (username, pass) => {
    const res = await facade.login(username, pass);
    this.setState({ loggedIn: true, username: username, role: res.role });
  };
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/user/foodplans">
              <ResultList2 />
            </Route>
            <Route path="/user/newplan">
              <NewPlan />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
            <Route path="/recepie/:id">
              <Opskrift />
            </Route>
            <Route path="/madplaner">
              <ResultList />
            </Route>
            <Route path="/loader" >
              <Loader />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div >
    );
  }
}
export default App;
