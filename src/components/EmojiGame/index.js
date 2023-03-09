/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable react/sort-comp */
/* eslint-disable no-constant-condition */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

const unqId = []

class EmojiGame extends Component {
  state = {ownList: unqId, score: 0, there: '', show: true, topScore: 0}

  onClickEmoji = id => {
    const {ownList, score} = this.state

    if (score === 12) {
      this.setState({show: false})
    }

    this.setState(prevState => ({ownList: [...prevState.ownList, {value: id}]}))
    const isThere = ownList.some(eachId => id === eachId.value)

    if (isThere === false) {
      this.setState(pre => ({score: pre.score + 1}))
    }

    this.setState({there: isThere})
  }

  iWantToPlayAgain = () => {
    const {ownList, there, score, topScore, show} = this.state
    this.setState({
      ownList: unqId,
      there: !there,
      score: 0,
      show: true,
    })

    if (score > topScore) {
      this.setState({topScore: score})
    }
  }

  render() {
    const {emojisList} = this.props
    const {ownList, there, score, show} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const randomEmoji = shuffledEmojisList()

    return (
      <div className="card">
        <NavBar details={this.state} />

        {there ? (
          <div className="card2">
            <WinOrLoseCard
              stateDe={this.state}
              iWantToPlayAgain={this.iWantToPlayAgain}
            />
          </div>
        ) : (
          <ul className="card2">
            {randomEmoji.map(emo => (
              <EmojiCard
                key={emo.id}
                emojis={emo}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
