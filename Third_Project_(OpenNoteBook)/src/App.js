// import the css file of app function or file
import './App.css';

// import the Navbar component
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

// import react router component from react-router-dom
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



// This is main function of the applicaton
function App() {

  // this app return this
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </Router>
    </div>
  );
}



// export this app
export default App;
