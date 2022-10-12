// Write your code here
import React, {Components} from 'react'

import './index.css'

class Speedometer extends Components {
  state = {speed: 0,}

  onAccelerate = () => {

    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState + 10})
      })
    }
  

  onApplyBreak = () => {
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState - 10})
    }
}

    render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1>
          Speed is <snap>{speed}</snap>mph
        </h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button onClick={this.onAccelerate}>Accelerate</button>
          <button onClick={this.onApplyBreak}>Apply Brake</button>
        </div>
      </div>
    )
  }
}
export default Speedometer
