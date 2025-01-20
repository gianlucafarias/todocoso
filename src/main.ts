import './style.css'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 <canvas id="canvas">
  <div id="output"></div>

 </canvas>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
