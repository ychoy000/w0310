import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter><App /></HashRouter>
);
