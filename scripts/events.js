import { 
  buttonMute,
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonVolume
} from "./elements.js"

export function Events(controls, timer, sounds) {

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sounds.pressButton()
  })
  
  buttonPause.addEventListener('click', function() {
    controls.pause()
    clearTimeout(timerTimeout)
    sounds.pressButton()
  })
  
  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sounds.pressButton()
  })
  
  buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()
    
    if (!newMinutes) {
      timer.reset()
      return
    }
  
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    sounds.pressButton()
  
  })
  
  buttonVolume.addEventListener('click', function() {
    buttonVolume.classList.toggle('hide')
    buttonMute.classList.toggle('hide')
    sounds.bgAudio.play()
  })
  
  buttonMute.addEventListener('click', function() {
    buttonVolume.classList.toggle('hide')
    buttonMute.classList.toggle('hide')
    sounds.bgAudio.pause()
  })
}