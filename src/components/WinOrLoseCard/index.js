/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {stateDe, iWantToPlayAgain} = props
  const {score, there, show} = stateDe
  const playAgain = () => {
    iWantToPlayAgain()
  }
  const image = show
    ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  return (
    <div>
      <div className="display-card">
        <div className="win-lose-card">
          {show ? <h1>You Lose</h1> : <h1>You Won</h1>}

          {show ? (
            <p className="score">Score</p>
          ) : (
            <p className="score">Best Score</p>
          )}
          <p className="number">{score}/12</p>
          <button onClick={playAgain} className="play-btn">
            Play Again
          </button>
        </div>
        <div>
          <img className="ballon-img" src={image} alt="win or lose" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
