import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Authentification from "./component/log/Authentification";
// import Home from "./pages/Home";
// import Profil from "./pages/Profil";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Authentification} />
          {/* <Route path="/home" component={Home} />
          <Route path="/profil" component={Profil} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
