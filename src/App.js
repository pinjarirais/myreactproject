import React, { createContext, useState } from 'react'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Student from './components/Student';
import Hoc from './components/Hoc';
import Params from './components/Params';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Protected from './components/Protected';
import Todo from './components/Todo/Todo';
import Weather from './components/Weather/Weather';
import UseState from './components/Hooks/UseState';
import UseEffect from './components/Hooks/UseEffect';
import UseRef from './components/Hooks/UseRef';
import CallBackHooks from './components/Hooks/Usecallback';
import Usememohooks from './components/Hooks/Usememohooks';
import Apicall from './components/Apicall/Apicall';
import ReduxApicall from './components/ReduxApicall';

export const Globledata = createContext();

function App() {
  const [color, setColor] = useState('red');
  const [newColor, setNewColor] = useState('green');

  return (
    <>
      <BrowserRouter>
          <Globledata.Provider value={{ Ccolor:color, Bcolor:newColor}} >
            <div className="container">
              <Navbar />
              <Routes>
                <Route path="/" element={<Protected Cmp={Home} />} />
                <Route path="/About" element={<About />} />
                <Route path="/Student" element={<Student />} />
                <Route path="/Hoc" element={<Hoc />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Params/:name" element={<Params />} />
                <Route path="/Todo" element={<Todo />} />
                <Route path="/Weather" element={<Weather />} />
                <Route path="/UseState" element={<UseState />} />
                <Route path="/UseEffect" element={<UseEffect />} />
                <Route path="/UseRef" element={<UseRef />} />
                <Route path="/Usecallback" element={<CallBackHooks />} />
                <Route path="/Usememohooks" element={<Usememohooks />} />
                <Route path="/Apicall" element={<Apicall />} />
                <Route path="/ReduxApicall" element={<ReduxApicall />} />
              </Routes>
            </div>
          </Globledata.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
