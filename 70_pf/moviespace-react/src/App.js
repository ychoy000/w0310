import "./App.css";
import { HashRouter, Route, Routes, NavLink } from "react-router-dom";


function Movies() {
  return (
    <div>
      <h3>Movies</h3>
      Movies ...
    </div>
  );
}
function Series() {
  return (
    <div>
      <h3>Series</h3>
      Series ...
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h3>Contact</h3>
      Contact ...
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src='ico-img-none.png' alt='film' />
        <span className="tlogo"> Movie Space</span>
      </div>

      <ul className="gnb">
        <li><NavLink to="/">Movies</NavLink></li>
        <li><NavLink to="/series">Series</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default App;
