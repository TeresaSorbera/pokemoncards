import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';

import {Container} from 'react-bootstrap';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
      </Container>
    </Router>
    );
}

export default App

