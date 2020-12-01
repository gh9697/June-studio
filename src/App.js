import React, { useState, useEffect } from "react";
import Main from "./pages/Main";
import Music from "./pages/Music";
import Library from "./pages/Library"
import Login from "./pages/Login";
import logo from "./img/audio-wave-64.png";
import fire from "./api/Fire";
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  
  const [user, setUser] = useState("");

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo">
          <Link to="/"><img src={logo} alt="logo"></img></Link>
          </div>
          <div className="menu">
          <li>
            <NavLink activeClassName="active" to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/music" exact>Concert</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/library" exact>Library</NavLink>
          </li>
          <li>
          {!user ? (
            <button>
              <Link to="/login"><span>Login</span></Link>
            </button>):(
            <button onClick={handleLogout}><span>Logout</span></button>
            )}
          </li>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/music" component={Music} />
          <Route path="/library" component={Library} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
