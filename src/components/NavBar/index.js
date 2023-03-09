/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
// Write your code here.
import './index.css'

const NavBar = props => {
  const {details} = props
  const {score, topScore, there} = details

  return (
    <nav className="nav-card back">
      <div className="nav-icon">
        <img
          className="nav-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1 className="emoji">Emoji Game</h1>
      </div>

      {there ? null : (
        <div className="score-card">
          <p>Score: {score}</p> <p>Top Score: {topScore}</p>{' '}
        </div>
      )}
    </nav>
  )
}

export default NavBar
