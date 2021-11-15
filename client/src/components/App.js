import React from 'react';
import { Link } from "react-router-dom";

import '../styles/App.css';
function App() {
  return (
    <div className="App">
      <h1 className="intro" id="box">Welcome...</h1>
      <div className="App-Route-Choice">
          <Link to='/friend'>Friend</Link>
          <p>or</p>
          <Link to='/recruiter'>Recruiter</Link>

      </div>
    </div>
  );
}

export default App;
