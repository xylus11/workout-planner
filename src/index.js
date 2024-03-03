import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Routes/Home"
import Workout from "./Routes/Workout"
import Monday from './Routes/trainingDays/Monday';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes >
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="Workout" element={<Workout />}>
            {" "}
            <Route path="monday" element={<Monday />} />
            <Route index element={<main className='shower'>
              <h5>whats for today?
              </h5></main>} />
          </Route>
          <Route path="*" element={<main>
            <p>Nothing here</p>
          </main>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
