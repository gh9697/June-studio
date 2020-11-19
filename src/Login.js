import React, { useState, useEffect } from "react";
import fire from "./Fire";
import Booking from "./Book";
import styled from "styled-components";
import './Login.css'

function Login() {
  const [clicked, setState]= useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    alert();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    alert("sign up" + email + password);
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handletoggleclick = () => {
    setState(true);
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
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
    <LoginPage className="Login">
      {user ? (
        <Booking />
      ) : (
        <div className={clicked ? 'loginContainer active' : 'loginContainer'}>
          <div className="card">
            <h1 className="title">Login</h1>
            <div className="input-container">
              <input type="text" id="lemail" name="lemail" autoFocus required value={email}
            onChange={(e) => setEmail(e.target.value)} />
              <label for="lemail">Email</label>
              <div className="bar errorMsg">{emailError}</div>
            </div>
            <div className="input-container">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="lpassword" name="lpassword"
              />
              <label for="lpassword">Password</label>
              <div className="bar errorMsg">{passwordError}</div>
            </div>
            <div className="button-container">
              <button onClick={handleLogin}>Login</button>
				    </div>
				    <div className="footer"><a href="">Forgot Your Password?</a></div>
          </div>
          <div className="card alt">
            <div className="toggle" onClick={handletoggleclick}></div>
            <h1 className="title">Register
              <div className="close" onClick={() => setState(false)}></div>
            </h1>
            <div className="input-container">
              <input type="text" id="lemail" name="lemail" autoFocus required value={email}
            onChange={(e) => setEmail(e.target.value)} />
              <label for="lemail">Email</label>
              <div className="bar errorMsg">{emailError}</div>
            </div>
            <div className="input-container">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="lpassword" name="lpassword"
              />
              <label for="lpassword">Password</label>
              <div className="bar errorMsg">{passwordError}</div>
            </div>
            <div className="input-container">
              <input
                type="password"
                required
                value={password}
                id="rpassword" name="rpassword"
              />
              <label for="rpassword">Repeat Password</label>
              <div className="bar errorMsg">{passwordError}</div>
            </div>
            <div className="button-container">
              <button onClick={handleSignUp}>Register</button>
            </div>
          </div>
        </div>
      )}
    </LoginPage>
  );
}

export default Login;

const LoginPage = styled.div``;
