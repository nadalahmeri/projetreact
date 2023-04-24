import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Card from './card';
import Data from './data';
import Home from './Home';

import { Route, Routes } from "react-router-dom"

function App() {



  var product = JSON.parse(localStorage.getItem("poste"))
  Data.push(product)
  var producteupdate = JSON.parse(localStorage.getItem("productes"))
  if (producteupdate.id === 1) {
    Data[0] = producteupdate

  } else if (producteupdate.id === 2) {
    Data[1] = producteupdate

  } else if (producteupdate.id === 3) {
    Data[2] = producteupdate

  } else if (producteupdate.id === 4) {
    Data[3] = producteupdate

  }
  else if (producteupdate.id === 5) {
    Data[4] = producteupdate

  }

  const [click, setClick] = useState(false)
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={Data.map((el) => <Card product={el} />)} />
        </Routes>
      </div>
    </>
  );
}

export default App;
