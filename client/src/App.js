import React from "react";
import { HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Client from "./pages/Client";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import './App.css'

function App() {  
  return (
      <div>
        <div className="appBody">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/mypage" component={Client} />
            <Route exact path="/mypage/:id" component={Client} />
            <Route exact path="/bycaloriessearch" component={Search} />
          </Switch>
        </div>
        <Footer />
      </div>
  );
}

export default App;
