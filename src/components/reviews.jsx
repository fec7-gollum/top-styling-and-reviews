import React from 'react';
import PropTypes from 'prop-types';

class Reviews extends React.Component {
  constructor({
    reviewData, total40, total60, total80, total100, total120,
  }) {
    super();
    this.state = {
      click: 0,
      myData: reviewData,
      forty: total40,
      sixty: total60,
      eighty: total80,
      hundred: total100,
      hundredtwenty: total120,
    };
    this.changeData = this.changeData.bind(this);
  }

  changeData() {
    if (this.state.click === 0) {
      this.setState({
        myData: this.state.forty,
        click: 1,
      });
    }
    if (this.state.click === 1) {
      this.setState({
        myData: this.state.sixty,
        click: 2,
      });
    }
    if (this.state.click === 2) {
      this.setState({
        myData: this.state.eighty,
        click: 3,
      });
    }
    if (this.state.click === 3) {
      this.setState({
        myData: this.state.hundred,
        click: 4,
      });
    }
    if (this.state.click === 4) {
      this.setState({
        myData: this.state.hundredtwenty,
        click: 5,
      });
    }
  }

  render() {
    for (let i = 0; i < this.state.myData.length; i++) {
      if (this.state.myData[i].stars === 1) {
        this.state.myData[i].stars = (
          <div>
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
          </div>
        );
      } else if (this.state.myData[i].stars === 2) {
        this.state.myData[i].stars = (
          <div>
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
          </div>
        );
      } else if (this.state.myData[i].stars === 3) {
        this.state.myData[i].stars = (
          <div>
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
          </div>
        );
      } else if (this.state.myData[i].stars === 4) {
        this.state.myData[i].stars = (
          <div>
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.blankstar} alt={this.props.blankstar} />
          </div>
        );
      } else if (this.state.myData[i].stars === 5) {
        this.state.myData[i].stars = (
          <div>
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
            <img src={this.props.star} alt={this.props.star} />
          </div>
        );
      }
    }
    return (
      <div>
        <div>REVIEWS</div>
        <form>
          <textarea rows="8" placeholder="Write a review..." />
        </form>
        <div className="review">
          {this.state.myData.map((review, index) => (
            <div key={index}>
              <span className="stars">
                {review.stars}
              </span>
              <br />
              <span className="textreview">
                {review.text}
              </span>
              <br />
              <span className="userInfo">
                <span>
                  {' '}
                  {review.name}
                  {' '}
                </span>
                <span className="userMargin">  &bull;</span>
                <span className="userMargin">
                  {' '}
                  {review.location}
                </span>
                <span className="userMargin">  &bull;</span>
                <span className="userMargin">
                  {' '}
                  {review.date}
                </span>
              </span>
              <hr />
            </div>
          ))}
        </div>
        <div role="button" tabIndex={0} className="moreButton" onClick={() => { this.changeData(); }} onKeyDown={() => {this.changeData()}}>View More</div>
      </div>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  reviewData: PropTypes.arrayOf(PropTypes.object).isRequired,
  total40: PropTypes.arrayOf(PropTypes.object).isRequired,
  total60: PropTypes.arrayOf(PropTypes.object).isRequired,
  total80: PropTypes.arrayOf(PropTypes.object).isRequired,
  total100: PropTypes.arrayOf(PropTypes.object).isRequired,
  total120: PropTypes.arrayOf(PropTypes.object).isRequired,
};
