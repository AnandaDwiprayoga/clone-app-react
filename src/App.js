import React, { useContext } from 'react';
import './App.css';
import { Header, SideBar,Feed, Widget, Login} from './components';
import { FacebookContext } from './config/contexApi';

function App() {

  const [[user]] = useContext(FacebookContext);
 
  return (
    <div className="app">
        {
        !user ? <Login /> : 
          <>
            <Header />

            <div className="app__body">
              <SideBar />
              <Feed />
              <Widget />
            </div>
         </>
        }
    </div>
  );
}

export default App;
