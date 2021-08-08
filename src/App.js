import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import * as ReactBootStrap from "react-bootstrap";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NotFound from "./pages/NotFound";
import Resume from "./components/Resume"
import GitHub from "./components/SocialMedia";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ReactBootStrap.Container fluid>
        <Router>
          <Navbar />
      
            <Switch>
              <Route exact path="/">
                
                <AboutMe />
              </Route>
              <Route exact path="/about">
              </Route>
              {/* need to move */}
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
              <Route  exact path="*" component={NotFound} />
            </Switch>
         
        </Router>
        <GitHub/>
      </ReactBootStrap.Container>
      
    </div>
  );
}

export default App;
