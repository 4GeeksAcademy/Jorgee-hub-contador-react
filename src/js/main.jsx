import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Counter from './components/Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
let seconds = 0
let minutes = 0
let hours = 0
setInterval(() => {
  seconds++
  if (seconds === 60) {
    seconds = 0
    minutes++
  }
  if (minutes === 60) {
    minutes = 0
    hours++
  }
  root.render(
    <React.StrictMode>
      <Counter seconds={seconds} minutes={minutes} hours={hours} />
    </React.StrictMode>
  )
}, 1000)