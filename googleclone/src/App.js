import {Route,Switch,BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/search"><SearchPage/></Route>
        </Switch>
      </Router>
     
    </div>


  );
}

export default App;
