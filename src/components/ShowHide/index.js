// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    first: false,
    last: false,
  }

  onFirstName = () => {
    const {first} = this.state
    if (first) {
      this.setState(() => ({first: false}))
    } else {
      this.setState(() => ({first: true}))
    }
  }

  onLastName = () => {
    const {last} = this.state
    if (last) {
      this.setState(() => ({last: false}))
    } else {
      this.setState(() => ({last: true}))
    }
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="main-container">
        <div className="second-container">
          <h1 className="head">Show/Hide</h1>
          <div className="button-container">
            <button onClick={this.onFirstName} type="button">
              Show/Hide Firstname
            </button>
            <button onClick={this.onLastName} type="button">
              Show/Hide Lastname
            </button>
            <div className="element-container">
              {first && (
                <div className="element">
                  <p>Joe</p>
                </div>
              )}
              {last && (
                <div className="element">
                  <p>Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
