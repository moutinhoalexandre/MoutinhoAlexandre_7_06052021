import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Authentification from "./component/log/Authentification";
import Home from "./component/home/Home";
import Profil from "./component/profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Authentification} />
          <Route path="/home" component={Home} />
          <Route path="/profil" component={Profil} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
