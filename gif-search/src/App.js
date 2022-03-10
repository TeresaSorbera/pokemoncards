import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Homepage from './pages/Homepage';
import IndividualPokemon from './pages/IndividualPokemon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='pokemon' element={<IndividualPokemon />}>
          <Route path=':pokeId' element={<IndividualPokemon />}></Route>
        </Route>
      </Routes>
    </Router>
    );
}

export default App

