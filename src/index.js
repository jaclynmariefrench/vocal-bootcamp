import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { VocalBootcamp } from "./components/VocalBootcamp";
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VocalBootcamp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
