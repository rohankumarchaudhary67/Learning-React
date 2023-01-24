// import the css file of app function or file
import './App.css';

// import react router component from react-router-dom
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import notestate to pass the notestate in the application
import NoteState from './content/notes/Notestate';

// import the React component
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';





// This is main function of the applicaton
function App() {

  // this app return this
  return (

    // Main div of the application
    <div className="App">

      {/* NoteState is used to the pass the context in the app  */}
      <NoteState>

        {/* Here we set the router  */}
        <Router>

          {/* Navbar component is always avilable at any route  */}
          <Navbar />

          <div className="container">

            {/* Here Routes are specified according to the url    */}
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/login" element={<Login />}/>
              <Route exact path="/signup" element={<Signup />}/>
            </Routes>

          </div>

        </Router>

      </NoteState>
      
    </div>
  );
}



// export this app
export default App;
