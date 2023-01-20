import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="general" categories="danger"/>} />
            <Route exact path="/business" element={<News key="business" pageSize={6} country="in" category="business" categories="success"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" categories="success"/>} />
            <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="health" categories="warning"/>} />
            <Route exact path="/science" element={<News key="science" pageSize={6} country="in" category="science" categories="info"/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports" categories="success"/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology" categories="info"/>} />
          </Routes>

        </div>
      </Router>
    )
  }
}
