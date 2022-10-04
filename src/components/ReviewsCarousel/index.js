// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  leftArrow = () => {
    const {index} = this.state
    if (index !== 0) {
      return this.setState(p => ({index: p.index - 1}))
    }
    return this.setState({index: 0})
  }

  rightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const listLength = reviewsList.length
    if (index !== listLength - 1) {
      return this.setState(p => ({index: p.index + 1}))
    }
    return this.setState({index: listLength - 1})
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg-container">
        <button
          type="button"
          className="btn"
          testid="leftArrow"
          onClick={this.leftArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
          />
        </button>
        <div className="review-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="profile-img" />
          <p className="name">{username}</p>
          <p className="prg">{companyName}</p>
          <p className="prg">{description}</p>
        </div>
        <button
          type="button"
          className="btn"
          testid="rightArrow"
          onClick={this.rightArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
