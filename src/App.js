import React from 'react';
import "./App.css";

// import components
import { Header,Sidebar } from "./components";

function App() {
  
  return (
    <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
        </div>
    </div>
  );
}

export default App;




