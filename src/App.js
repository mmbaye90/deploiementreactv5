import { Route, Switch} from "react-router-dom";
import { BrowserRouter} from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
// import Notfound from "./pages/Notfound";

function App() {
  return (
    <div>
      <BrowserRouter basename='/'> 
        <Navigation/>
          <Switch>
            <Route exact path='/' component={Home}/> 
            <Route path='/about' component={About}/> 
          </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;