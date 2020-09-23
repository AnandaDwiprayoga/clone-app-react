import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import page
import  { Home,Search } from './pages';
// import components
import { Header, Footer } from './components';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>        
          <Route path="/search">
              <Search />
          </Route>
        </Switch>        

        <Footer />
      </Router>
    </div>
  );
}

export default App;
