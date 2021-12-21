import { Route,Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

function App() {
  return (
  <HashRouter basename={window.location.pathname || ''}>
    <Switch>
    <Route  path="/" exact component={Home} />
    <Route  path="/about" exact component={About} />
    <Route  component={Notfound} />
    </Switch>
  </HashRouter>
  );
}

export default App;