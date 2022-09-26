// Write your React code here.
import {Component} from 'react'

import EmojiAdder from '../emoji'

import './index.css'

class Feedback extends Component {
  state = {emojiClicked: false}

  emojiClickedBtn = () => {
    this.setState({
      emojiClicked: true,
    })
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const {emojiClicked} = this.state

    return emojiClicked ? (
      <div className="bg-container">
        <div className="card-container">
          <img src={loveEmojiUrl} className="heart-emoji" alt="love emoji" />
          <h1 className="thankyou-heading">Thank you!</h1>
          <p className="thankyou-message">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    ) : (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-container">
            {emojis.map(eachObject => (
              <EmojiAdder
                key={eachObject.id}
                eachObject={eachObject}
                onEmojiClicked={this.emojiClickedBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
