/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojis

  const clickToEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emo-card">
      <button onClick={clickToEmoji} className="emoji-button">
        <img className="emo-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
