import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  noOfNewsItems = 5;

  render() {
    return (
      <Router>
        <div>
          <Navbar mode={this.mode} />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.noOfNewsItems} country="in" category="general" categories="danger"/>} />
            <Route exact path="/business" element={<News key="business" pageSize={this.noOfNewsItems} country="in" category="business" categories="success"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.noOfNewsItems} country="in" category="entertainment" categories="success"/>} />
            <Route exact path="/health" element={<News key="health" pageSize={this.noOfNewsItems} country="in" category="health" categories="warning"/>} />
            <Route exact path="/science" element={<News key="science" pageSize={this.noOfNewsItems} country="in" category="science" categories="info"/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.noOfNewsItems} country="in" category="sports" categories="success"/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.noOfNewsItems} country="in" category="technology" categories="info"/>} />
          </Routes>

        </div>
      </Router>
    )
  }
}
