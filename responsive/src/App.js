import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
import projects from "./components/projects";
import homePage from "./components/homePage";

function App() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={ homePage } />
          <Route path="/projects" component={ projects } />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;