/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import thumbsUp from '../../public/images/thumbs.svg';
import blankstar from '../../public/images/blankstar.svg';
import star from '../../public/images/star.svg';
import users from '../../mockUsers';

class Reviews extends React.Component {
  constructor({
    reviewData, total40, total60, total80, total100,
  }) {
    super();
    this.state = {
      click: 0,
      myData: reviewData || [{ mock: 'mock' }],
      forty: total40 || [{ mock: 'mock' }],
      sixty: total60 || [{ mock: 'mock' }],
      eighty: total80 || [{ mock: 'mock' }],
      hundred: total100 || [{ mock: 'mock' }],
      modal: false,
      login: false,
      username: '',
      password: '',
      writeReview: 0,
      starRate1: blankstar,
      starRate2: blankstar,
      starRate3: blankstar,
      starRate4: blankstar,
      starRate5: blankstar,
      finalRate: 0,
      again: '',
      reviewText: '',
      styles: { color: 'black' },
      incorrect: false,
    };
    this.changeData = this.changeData.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  checkUser() {
    users.forEach((user) => {
      const { username, password } = this.state;
      const { loginLogout } = this.props;
      if (user.username === username && user.password === password) {
        this.setState({ modal: false, login: true });
        loginLogout();
      }
    });
    this.setState({ styles: { color: 'red' }, incorrect: true });
  }

  changeData() {
    const {
      click, forty, sixty, eighty, hundred,
    } = this.state;
    if (click === 0) {
      this.setState({
        myData: forty,
        click: 1,
      });
    }
    if (click === 1) {
      this.setState({
        myData: sixty,
        click: 2,
      });
    }
    if (click === 2) {
      this.setState({
        myData: eighty,
        click: 3,
      });
    }
    if (click === 3) {
      this.setState({
        myData: hundred,
        click: 4,
      });
    }
  }

  handleUsername(value) {
    this.setState({
      username: value,
    });
  }

  handlePassword(value) {
    this.setState({
      password: value,
    });
  }

  handleReview(value) {
    this.setState({
      reviewText: value,
    });
  }

  handleSubmission(sta, txt, nme) {
    const { url } = this.props;
    axios.post(`${url}reviews`, {
      stars: sta,
      text: `${txt}`,
      name: `${nme}`,
    })
      .then(() => {
        axios.get(`${url}reviews`)
          .then((result) => result.data)
          .then((data) => {
            this.setState({
              myData: data.slice(-20).reverse(),
              forty: data.slice(-40).reverse(),
              sixty: data.slice(-60).reverse(),
              eighty: data.slice(-80).reverse(),
              hundred: data.slice(-100).reverse(),
            });
          });
      });
  }

  render() {
    let loginFail;
    let actualReviewTop;
    let actualReviewBottom;
    let actualStars;
    const {
      incorrect, writeReview, finalRate, reviewText, username, again,
      myData, starRate1, starRate2, starRate3, starRate4, starRate5,
      modal, login, styles, password,
    } = this.state;
    if (incorrect === true) {
      loginFail = <div className="fail">Incorrect Username or Password</div>;
    }
    if (writeReview >= 2) {
      // eslint-disable-next-line no-console
      console.log(again);
      actualReviewTop = (
        <div>
          <p id="makeAgain">Would You Make This Again?</p>
          <br />
          <label className="labels" htmlFor="yes">
            YES
            <input type="radio" id="yes" name="again" onClick={() => { this.setState({ again: 'yes' }); }} />
            <img id="thumbUp" alt="" src={thumbsUp} />
          </label>
          <label className="labels" htmlFor="no">
            NO
            <input type="radio" id="no" name="again" onClick={() => { this.setState({ again: 'no' }); }} />
          </label>
          <img id="thumbDown" alt="" src={thumbsUp} />
        </div>
      );
      actualReviewBottom = (
        <div className="bottomButtons">
          <div role="button" tabIndex={0} onKeyDown className="cancelbtn" onClick={() => { this.setState({ writeReview: 1 }); }}>Cancel</div>
          <div role="button" tabIndex={0} onKeyDown className="savebtn" onClick={() => { this.setState({ writeReview: -Infinity }); this.handleSubmission(finalRate, reviewText, username); }}>Save</div>
        </div>
      );
      actualStars = (
        <div className="myStars">
          <p>Rate This Recipe : </p>
          <div
            role="button"
            tabIndex={0}
            onKeyDown
            className="starclicker"
            onClick={() => {
              this.setState({
                starRate1: star,
                starRate2: blankstar,
                starRate3: blankstar,
                starRate4: blankstar,
                starRate5: blankstar,
                finalRate: 1,
              });
            }}
          >
            <img
              alt=""
              src={starRate1}
            />
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown
            className="starclicker2"
            onClick={() => {
              this.setState({
                starRate1: star,
                starRate2: star,
                starRate3: blankstar,
                starRate4: blankstar,
                starRate5: blankstar,
                finalRate: 2,
              });
            }}
          >
            <img
              alt=""
              src={starRate2}
            />
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown
            className="starclicker3"
            onClick={() => {
              this.setState({
                starRate1: star,
                starRate2: star,
                starRate3: star,
                starRate4: blankstar,
                starRate5: blankstar,
                finalRate: 3,
              });
            }}
          >
            <img
              alt=""
              src={starRate3}
            />
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown
            className="starclicker4"
            onClick={() => {
              this.setState({
                starRate1: star,
                starRate2: star,
                starRate3: star,
                starRate4: star,
                starRate5: blankstar,
                finalRate: 4,
              });
            }}
          >
            <img
              alt=""
              src={starRate4}
            />
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown
            className="starclicker5"
            onClick={() => {
              this.setState({
                starRate1: star,
                starRate2: star,
                starRate3: star,
                starRate4: star,
                starRate5: star,
                finalRate: 5,
              });
            }}
          >
            <img
              alt=""
              src={starRate5}
            />
          </div>
        </div>
      );
    }
    let myModal;
    if (modal && !login) {
      myModal = (
        <div className="modal">
          <form>
            <br />
            <p>Sign In To Leave A Review</p>
            <input
              className="centerInput cI1"
              style={styles}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => this.handleUsername(e.target.value)}
              onClick={() => {
                this.setState({ styles: { color: 'black' } });
              }}
            />
            <br />
            <input
              className="centerInput cI2"
              style={styles}
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => this.handlePassword(e.target.value)}
              onClick={() => {
                this.setState({ styles: { color: 'black' } });
              }}
            />
            <br />
            <br />
            <input
              className="signIn"
              type="submit"
              value="Login"
              onClick={(e) => {
                e.preventDefault();
                this.checkUser();
              }}
            />
          </form>
          <br />
          {loginFail}
          <br />
          <div className="pleaseSignUp">
            Please signup
            <a href="https://account.bonappetit.com/?brandSlug=bon-appetit&redirectUrl=https://www.bonappetit.com/&_ga=2.103108807.635364393.1588887829-1653893722.1588887829#">HERE</a>
            {' '}
            if you need an account
          </div>
        </div>
      );
    }
    for (let i = 0; i < myData.length; i++) {
      if (myData[i].stars === 1) {
        myData[i].stars = (
          <div>
            <img src={star} alt={star} />
            <img src={blankstar} alt={blankstar} />
            <img src={blankstar} alt={blankstar} />
            <img src={blankstar} alt={blankstar} />
            <img src={blankstar} alt={blankstar} />
          </div>
        );
      } else if (myData[i].stars === 2) {
        myData[i].stars = (
          <div>
            <img src={star} alt={star} />
            <img src={star} alt={star} />
            <img src={blankstar} alt={blankstar} />
            <img src={blankstar} alt={blankstar} />
            <img src={blankstar} alt={blankstar} />
          </div>
        );
      } else if (myData[i].stars === 3) {
        myData[i].stars = (
          <div>
            <img src={star} alt={star} />
            <img src={star} alt={star} />
            <img src={star} alt={star} />
            <img src={blankstar} alt={blankstar} />
            <img src={blankstar} alt={blankstar} />
          </div>
        );
      } else if (myData[i].stars === 4) {
        myData[i].stars = (
          <div>
            <img src={star} alt={star} />
            <img src={star} alt={star} />
            <img src={star} alt={star} />
            <img src={star} alt={star} />
            <img src={blankstar} alt={blankstar} />
          </div>
        );
      } else if (myData[i].stars === 5) {
        myData[i].stars = (
          <div>
            <img src={star} alt={star} />
            <img src={star} alt={star} />
            <img src={star} alt={star} />
            <img src={star} alt={star} />
            <img src={star} alt={star} />
          </div>
        );
      }
    }
    return (
      <div>
        {myModal}
        <div>
          <div>REVIEWS</div>
          {actualReviewTop}
          <form>
            <textarea className="texta" onClick={() => { this.setState({ modal: true, writeReview: writeReview + 1 }); }} rows="8" placeholder="Write a review..." onChange={(e) => this.handleReview(e.target.value)} />
          </form>
          <br />
          {actualStars}
          <br />
          {actualReviewBottom}
          <div className="review">
            {myData.map((review, index) => (
              // eslint-disable-next-line react/no-array-index-key
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
                    {review.name}
                  </span>
                  <span className="userMargin">  &bull;</span>
                  <span className="userMargin">
                    {review.location}
                  </span>
                  <span className="userMargin">  &bull;</span>
                  <span className="userMargin">
                    {review.date}
                  </span>
                </span>
                <hr />
              </div>
            ))}
          </div>
          <div role="button" tabIndex={0} className="moreButton" onClick={() => { this.changeData(); }} onKeyDown={() => { this.changeData(); }}>View More</div>
        </div>
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
  loginLogout: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
