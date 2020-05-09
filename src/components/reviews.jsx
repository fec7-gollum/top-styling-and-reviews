import React from 'react';
import PropTypes from 'prop-types';
import thumbsUp from '../../public/images/thumbs.svg';
import blankstar from '../../public/images/blankstar.svg';
import star from '../../public/images/star.svg';
import axios from 'axios';
import users from '../../mockUsers';

class Reviews extends React.Component {
  constructor({
    reviewData, total40, total60, total80, total100, total120,
  }) {
    super();
    this.state = {
      click: 0,
      myData: reviewData || [{'mock': 'mock'}],
      forty: total40 || [{'mock': 'mock'}],
      sixty: total60 || [{'mock': 'mock'}],
      eighty: total80 || [{'mock': 'mock'}],
      hundred: total100 || [{'mock': 'mock'}],
      hundredtwenty: total120 || [{'mock': 'mock'}],
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
      styles: { color: 'black'},
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
    users.forEach((user) => { if (user.username === this.state.username && user.password === this.state.password) {
      console.log('Valid Login');
      this.setState({modal: false, login: true}); console.log(this.state.username, this.state.password);
       //run function to update state of topbar
       this.props.loginLogout();
    }});
    this.setState({styles: {color: 'red'}, incorrect: true});
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

  handleUsername(value) {
    this.setState({
      username: value
    });
  }

  handlePassword(value) {
    this.setState({
      password: value
    })
  }

  handleReview(value) {
    this.setState({
      reviewText: value
    })
  }

  handleSubmission(star, txt, nme) {
    axios.post('reviews/8', {
      stars: star,
      text: `${txt}`,
      name: `${nme}`
    })
    .then(() => {
      axios.get('/reviews/8')
      .then((result) => result.data)
      .then((data) => {
        this.setState({
          myData: data.slice(90, 120).reverse(),
          forty: data.slice(80, 120).reverse(),
          sixty: data.slice(60, 120).reverse(),
          eighty: data.slice(40, 120).reverse(),
          hundred: data.slice(20, 120).reverse(),
          hundredtwenty: data.slice(0, 120).reverse(),
        });
      });
    })
  }

  render() {
    let loginFail;
    if (this.state.incorrect === true) {
      loginFail = <div className='fail'>Incorrect Username or Password</div>
    }
    let actualReviewTop;
    let actualReviewBottom;
    let actualStars;
    if (this.state.writeReview >= 2) {
      actualReviewTop =
      <div>
        <p id="makeAgain">Would You Make This Again?</p>
        <br />
        <input type="radio" id="yes" name="again" onClick={() => {this.setState({ again: 'yes' })}} />
        <img id="thumbUp" src={thumbsUp} /><label className="labels" htmlFor="yes"> YES </label>
        <input type="radio" id="no" name="again" onClick={() => {this.setState({ again: 'no' })}} />
        <label className="labels" htmlFor="no"> NO</label><img id="thumbDown" src={thumbsUp} />
      </div>
      actualReviewBottom =
      <div className="bottomButtons">
        <div className="cancelbtn" onClick={() => {this.setState({ writeReview: 1})}}>Cancel</div>
        <div className="savebtn" onClick={() => {this.setState({ writeReview: -Infinity}); console.log( this.state.finalRate, this.state.again, this.state.reviewText); this.handleSubmission(this.state.finalRate, this.state.reviewText, this.state.username) }} >Save</div>
      </div>
      actualStars =
      <div className='myStars'>
        <p>Rate This Recipe : </p>
        <img onClick={() => {this.setState({ starRate1: star, starRate2: blankstar, starRate3: blankstar, starRate4: blankstar, starRate5: blankstar, finalRate: 1 })}} src={this.state.starRate1} />
        <img onClick={() => {this.setState({ starRate1: star, starRate2: star, starRate3: blankstar, starRate4: blankstar, starRate5: blankstar,  finalRate: 2 })}} src={this.state.starRate2} />
        <img onClick={() => {this.setState({ starRate1: star, starRate2: star, starRate3: star, starRate4: blankstar, starRate5: blankstar,  finalRate: 3 })}} src={this.state.starRate3} />
        <img onClick={() => {this.setState({ starRate1: star, starRate2: star, starRate3: star, starRate4: star, starRate5: blankstar, finalRate: 4 })}} src={this.state.starRate4} />
        <img onClick={() => {this.setState({ starRate1: star, starRate2: star, starRate3: star, starRate4: star, starRate5: star, finalRate: 5 })}} src={this.state.starRate5} />
      </div>
    }
    let myModal;
    if (this.state.modal && !this.state.login) {
      myModal = <div className="modal">
        <form>
          <br />
          <p>Sign In To Leave A Review</p>
          <input className="centerInput" style={this.state.styles} type='text' placeholder="Username" value={this.state.username} onChange={e => this.handleUsername(e.target.value)} onClick={() => {this.setState({ styles: {color: 'black'}
          })}}></input>
          <br />
          <input className="centerInput" style={this.state.styles} type='text' placeholder="Password" value={this.state.password} onChange={e => this.handlePassword(e.target.value)} onClick={() => {this.setState({ styles: {color: 'black'}
          })}}></input>
          <br />
          <br />
          <input className="signIn" type='submit' value="Login" onClick={(e) => { e.preventDefault();
            this.checkUser(); // userlogin
            }}>
          </input>
        </form>
        <br />
        {loginFail}
        <br />
        <div className="pleaseSignUp">Please signup <a href="https://account.bonappetit.com/?brandSlug=bon-appetit&redirectUrl=https://www.bonappetit.com/&_ga=2.103108807.635364393.1588887829-1653893722.1588887829#">HERE</a> if you need an account</div>
      </div>
    }
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
      {myModal}
      <div>

        <div>REVIEWS</div>

        {actualReviewTop}
        <form>

          <textarea onClick={() => { this.setState({ modal: true, writeReview: this.state.writeReview + 1})}} rows="8" placeholder="Write a review..." onChange={e => this.handleReview(e.target.value)}/>
        </form>
        {actualStars}
        {actualReviewBottom}

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
      </div>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  reviewData: PropTypes.arrayOf(PropTypes.object),
  total40: PropTypes.arrayOf(PropTypes.object),
  total60: PropTypes.arrayOf(PropTypes.object),
  total80: PropTypes.arrayOf(PropTypes.object),
  total100: PropTypes.arrayOf(PropTypes.object),
  total120: PropTypes.arrayOf(PropTypes.object),
};
