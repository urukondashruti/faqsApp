// Write your code here.

import {Component} from 'react'

import './index.css'

class Items extends Component {
  state = {
    status1: false,
  }

  onBut = () => {
    this.setState(prevState => ({status1: !prevState.status1}))
  }

  onAdd = () => {
    const {Item} = this.props
    const {questionText, answerText} = Item
    const {status1} = this.state
    if (status1 === true) {
      return (
        <div>
          <hr className="ho" />
          <p className="para">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {status1} = this.state
    const {Item} = this.props
    const {questionText, answerText} = Item
    const val = status1
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const alt1 = status1 ? 'minus' : 'plus'

    return (
      <li className="list1">
        <div>
          <div className="con5">
            <h1 className="head">{questionText}</h1>
            <button type="button" className="but2" onClick={this.onBut}>
              <img src={val} alt={alt1} />
            </button>
          </div>
        </div>
        {this.onAdd()}
      </li>
    )
  }
}

export default Items
