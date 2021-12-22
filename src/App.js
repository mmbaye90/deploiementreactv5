import { Route} from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom/cjs/react-router-dom.min";
import About from "./pages/About";
import Home from "./pages/Home";
// import Notfound from "./pages/Notfound";

function App() {
  return (
    <div>
      <BrowserRouter basename='/deploiementreactv5'> 

      <Link to ="/">Accueil</Link>
      <Link to ="/about">About</Link>

            <Route exact path='/' component={Home}/> 
            <Route path='/about' component={About}/> 
     </BrowserRouter>
    </div>
  );
}

export default App;