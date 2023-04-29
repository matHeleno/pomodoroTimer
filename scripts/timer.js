import { Sounds } from "./sounds.js"

export function Timer({
  displayMinutes,
  displaySeconds,
  resetControls,
}) {

  const sounds = Sounds()

  let timerTimeout
  let minutes = (displayMinutes.textContent)

  const updateDisplay = (newMinutes, seconds) => {

    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds

    displayMinutes.textContent = String(newMinutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
  }

  const decressedTime = () => {
    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinutes.textContent)

    if (minutes <= 0) {
      if (seconds == 0) {
        resetControls()
        sounds.soundEnd()       
        return
      }
    }

    if(seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))
    countdown()
  }

  const countdown = () => {
    timerTimeout = setTimeout(decressedTime, 1000)
  }

  const reset = () => {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }

  const updateMinutes = (newMinutes) => {
    minutes = newMinutes
  }

  const hold = () => {
    clearTimeout(timerTimeout)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}