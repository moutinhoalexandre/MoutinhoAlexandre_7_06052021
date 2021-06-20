import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Authentification from "./component/log/Authentification";
import Home from "./component/home/Home";
import Profile from "./component/profile/Profile";
import Post from "./component/post/Post";
import PostSelected from "./component/post/PostSelected"
import ProfileSelected from "./component/profile/ProfileSelected"

function App() {
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

export default App;
