import { Route, Switch} from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom/cjs/react-router-dom.min";
import About from "./pages/About";
import Home from "./pages/Home";
// import Notfound from "./pages/Notfound";

function App() {
  return (
    <div>
      <BrowserRouter basename='/'> 

      <Link to ="/">Accueil</Link>
      <Link to ="/about">About</Link>
            <Switch>
            <Route exact path='/' component={Home}/> 
            <Route path='/about' component={About}/> 
            </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;