import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Authentification from "./component/log/Authentification";
import Home from "./component/home/Home";
import Profile from "./component/profile/Profile";
import Post from "./component/post/Post";
import PostSelected from "./component/post/PostSelected";
import ProfileSelected from "./component/profile/ProfileSelected";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";

function App() {
  const [validToken, setValidToken] = useState(false);
  const token = localStorage.getItem("token");

  const isMyTokenValid = () => {
    if (localStorage.getItem("token")) {
      const decodedToken = jwt_decode(localStorage.getItem("token"));
      const dateNow = new Date();
      if (decodedToken.exp > dateNow / 1000) {
        setValidToken(true);
      } else {
        localStorage.clear();
        window.location = "/";
      }
    } else {
      setValidToken(false);
    }
  };

  useEffect(() => {
    isMyTokenValid();
  }, []);

  if (token === null || validToken === false) {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" component={Authentification} />
          </Switch>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Authentification} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/profileSelected" component={ProfileSelected} />
            <Route path="/post" component={Post} />
            <Route path="/postSelected" component={PostSelected} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
