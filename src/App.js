import Music from "./Music";
import Main from "./Main";
import Login from "./Login";
import logo from "./img/audio-wave-64.png";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo">
          <Link to="/"><img src={logo} alt="logo"></img></Link>
          </div>
          <div className="menu">
          <li >
              <Link className="active" to="/">Home</Link>
            </li>
            <li>
              <Link to="/music">Concert</Link>
            </li>
            <li>
              <Link to="/">Library</Link>
            </li>
            <li>
              <button>
                <Link to="/login"><span>Login</span></Link>
              </button>
            </li>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/music" component={Music} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
