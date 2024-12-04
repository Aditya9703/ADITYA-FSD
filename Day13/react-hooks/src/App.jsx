import React from 'react';
import CounterApp from './components/CounterApp.jsx';
import ImageApp from './components/ImageApp.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Mainlayout from './components/mainlayout.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          <Route path="/CounterApp" element={<CounterApp/>}/>
          <Route path="/ImageApp" element={<ImageApp/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
};

export default App;
