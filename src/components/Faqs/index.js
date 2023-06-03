// Write your code here.
import {Component} from 'react'

import './index.css'

import Items from '../FaqItem'

class Faqs extends Component {
  state = {
    status: false,
  }

  render() {
    const {faqsList} = this.props
    return (
      <div className="back">
        <div className="backs">
          <h1 className="head1">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <Items Item={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
