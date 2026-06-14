import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
let seconds = 0
let minutes = 0
let hours = 0
let interval = null
let alertTime = 0
let countDown = false
let countDownTime = 0

const setAlertTime = (time) => {
  alertTime = parseInt(time)
}

const setCountDownTime = (time) => {
  countDownTime = parseInt(time)
}

const stopInterval = () => {
  clearInterval(interval)
  interval = null
}

const startInterval = () => {
  if (interval !== null) return;
  stopInterval()
  interval = setInterval(() => {
    if (countDown) {
      seconds--
      if (seconds === -1) { seconds = 59; minutes-- }
      if (minutes === -1) { minutes = 59; hours-- }
      if (hours * 3600 + minutes * 60 + seconds === 0) {
        alert("¡¡Tiempo!!")
        countDown = false
        stopInterval()
      }
    }
    else {
      seconds++
      if (hours * 3600 + minutes * 60 + seconds === alertTime) alert("¡¡Alerta!!")
      if (seconds === 60) { seconds = 0; minutes++ }
      if (minutes === 60) { minutes = 0; hours++ }
    }
    root.render(
      <React.StrictMode>
        <Counter seconds={seconds} minutes={minutes} hours={hours} stopInterval={stopInterval} startInterval={startInterval} resetInterval={resetInterval} setAlertTime={setAlertTime} startCountDown={startCountDown} setCountDownTime={setCountDownTime} countDownTime={countDownTime} />
      </React.StrictMode>
    )
  }, 1000)
}

startInterval()
const resetInterval = () => {
  stopInterval()
  countDown = false
  seconds = 0
  minutes = 0
  hours = 0
  startInterval()
}
const startCountDown = () => {
  hours = Math.floor(countDownTime / 3600)
  minutes = Math.floor((countDownTime % 3600) / 60)
  seconds = countDownTime % 60
  countDown = true
  stopInterval()
  startInterval()
}