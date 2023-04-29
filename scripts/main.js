import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Sounds } from "./sounds.js"
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  displayMinutes,
  displaySeconds 
} from "./elements.js"
import { Events } from "./events.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  displayMinutes, 
  displaySeconds,
  resetControls: controls.reset,
})

const sounds = Sounds()

Events(controls, timer, sounds)
