/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import thumbsUp from '../../public/images/thumbs.svg';
import blankstar from '../../public/images/blankstar.svg';
import star from '../../public/images/star.svg';
import users from '../../mockUsers';
import styled from 'styled-components';

const Fail = styled.div`
  position: absolute;
  width: 99vw;
  color: red;
`;

const MakeAgain = styled.p`
  margin-top: 10vh;
  margin-left: 10vw;
`;

const Labels = styled.label`
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-left: 10vw;
`;

const ThumbUp = styled.img`
  margin-left: 1vw;
  margin-right: 1vw;
  height: 3vh;
`;

const ThumbDown = styled.img`
  transform: rotate(-180deg);
  height: 3vh;
  transform-origin: center;
  margin-left: 1vw;
`;

const BottomButtons = styled.div`
  display: inline-flex;
`;

const Cancelbtn = styled.div`
  width:7vw;
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 1.2rem;
  margin-top: 5vh;
  font-size: 1rem;
  margin-bottom: 10vh;
  border: 1px solid black;
  margin-left: 10vw;
`;

const Savebtn = styled.div`
  width:7vw;
  background-color: rgb(0, 0, 0);
  text-align: center;
  padding: 1.2rem;
  margin-top: 5vh;
  font-size: 1rem;
  margin-bottom: 10vh;
  color: white;
  margin-left: 2vw;
`;

const MyStars = styled.div`
  display: inline-flex;
`;

const Starclicker = styled.div`
  margin-left: 1vw;
`;

const Starclicker2 = styled.div`
  margin-left: 1vw;
`;

const Starclicker3 = styled.div`
  margin-left: 1vw;
`;

const Starclicker4 = styled.div`
  margin-left: 1vw;
`;

const Starclicker5 = styled.div`
  margin-left: 1vw;
`;

const Modal = styled.div`
  height:100vh;
  width:99vw;
  background-color: rgb(253, 251, 249);
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px black;
  text-align: center;
`;

const PleaseSignUp = styled.div`
  margin-top: 4vh;
  position: absolute;
  width: 99vw;
`;

const TextA = styled.textarea`
  margin-top: 5vh;
  resize: none;
  padding:1rem;
  width: 48vw;
  font-size: 1rem;
  margin-left: 10vw;
`;

const Review = styled.div`
  margin-top: 20vh;
  margin-left: 10vw;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  width:50vw;
  border-top: black 5px solid;
  padding-top: 5vh;
`;

const Stars = styled.span`
  margin-left: -.5vw;
`;

const Textreview = styled.span`
  font-weight: lighter;
`;

const UserInfo = styled.span`
  margin-top: 3vh;
  display: inline-flex;
  font-size: .8rem;
  font-weight: lighter;
  padding-bottom: 4vh;
`;

const UserMargin = styled.span`
  margin-left: 1vw;
`;

const MoreButton = styled.div`
  width:10vw;
  background-color: rgb(228, 228, 253);
  text-align: center;
  padding: 1.4rem;
  margin-top: 5vh;
  margin-left: 18vw;
  font-size: 1rem;
  margin-bottom: 20vh;
  &:hover {
    background-color: rgb(110, 77, 141);
    color: white;
    cursor: pointer;
  }
`;

const CenterInput = styled.input`
  padding: 1vh;
  margin-top: .25vh;
  text-align: center;
`;

const SignIn = styled.input`
  width:10vw;
`;

const ReviewTitle = styled.div`
  margin-left:10vw;
  margin-top:10vh;
`;

const RateRecipe = styled.p`
  margin-left:10vw;
`;

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
<<<<<<< HEAD
    axios.post(`http://localhost:4000/reviews${url}`, {
=======
    axios.post(`/reviews${url}`, {
>>>>>>> 80650805701afe27c58afb05fecde01607f78472
      stars: sta,
      text: `${txt}`,
      name: `${nme}`,
    })
      .then(() => {
<<<<<<< HEAD
        axios.get(`http://localhost:4000/reviews${url}`)
=======
        axios.get(`/reviews${url}`)
>>>>>>> 80650805701afe27c58afb05fecde01607f78472
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
      loginFail = <Fail>Incorrect Username or Password</Fail>;
    }
    if (writeReview >= 2) {
      // eslint-disable-next-line no-console
      console.log(again);
      actualReviewTop = (
        <div>
          <MakeAgain>Would You Make This Again?</MakeAgain>
          <br />
          <Labels htmlFor="yes">
            YES
            <input type="radio" id="yes" name="again" onClick={() => { this.setState({ again: 'yes' }); }} />
            <ThumbUp alt="" src={thumbsUp} />
          </Labels>
          <Labels htmlFor="no">
            NO
            <input type="radio" id="no" name="again" onClick={() => { this.setState({ again: 'no' }); }} />
          </Labels>
          <ThumbDown alt="" src={thumbsUp} />
        </div>
      );
      actualReviewBottom = (
        <BottomButtons>
          <Cancelbtn role="button" tabIndex={0} onKeyDown  onClick={() => { this.setState({ writeReview: 1 }); }}>Cancel</Cancelbtn>
          <Savebtn role="button" tabIndex={0} onKeyDown onClick={() => { this.setState({ writeReview: -Infinity }); this.handleSubmission(finalRate, reviewText, username); }}>Save</Savebtn>
        </BottomButtons>
      );
      actualStars = (
        <MyStars>
          <RateRecipe>Rate This Recipe : </RateRecipe>
          <Starclicker
            role="button"
            tabIndex={0}
            onKeyDown

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
          </Starclicker>
          <Starclicker2
            role="button"
            tabIndex={0}
            onKeyDown
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
          </Starclicker2>
          <Starclicker3
            role="button"
            tabIndex={0}
            onKeyDown
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
          </Starclicker3>
          <Starclicker4
            role="button"
            tabIndex={0}
            onKeyDown
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
          </Starclicker4>
          <Starclicker5
            role="button"
            tabIndex={0}
            onKeyDown
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
          </Starclicker5>
        </MyStars>
      );
    }
    let myModal;
    if (modal && !login) {
      myModal = (
        <Modal>
          <form>
            <br />
            <p>Sign In To Leave A Review</p>
            <CenterInput
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
            <CenterInput
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
            <SignIn
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
          <PleaseSignUp>
            Please signup
            <a href="https://account.bonappetit.com/?brandSlug=bon-appetit&redirectUrl=https://www.bonappetit.com/&_ga=2.103108807.635364393.1588887829-1653893722.1588887829#"> HERE</a>
<<<<<<< HEAD
            {" "}if you need an account
          </PleaseSignUp>
        </Modal>
=======
            {' '}
            if you need an account
          </div>
        </div>
>>>>>>> 80650805701afe27c58afb05fecde01607f78472
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
          <ReviewTitle>REVIEWS</ReviewTitle>
          {actualReviewTop}
          <form>
            <TextA onClick={() => { this.setState({ modal: true, writeReview: writeReview + 1 }); }} rows="8" placeholder="Write a review..." onChange={(e) => this.handleReview(e.target.value)} />
          </form>
          <br />
          {actualStars}
          <br />
          {actualReviewBottom}
          <Review>
            {myData.map((review, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>
                <Stars>
                  {review.stars}
                </Stars>
                <br />
                <Textreview>
                  {review.text}
                </Textreview>
                <br />
                <UserInfo>
                  <span>
                    {review.name}
                  </span>
                  <UserMargin>  &bull;</UserMargin>
                  <UserMargin>
                    {review.location}
                  </UserMargin>
                  <UserMargin>  &bull;</UserMargin>
                  <UserMargin>
                    {review.date}
                  </UserMargin>
                </UserInfo>
                <hr />
              </div>
            ))}
          </Review>
          <MoreButton role="button" tabIndex={0} onClick={() => { this.changeData(); }} onKeyDown={() => { this.changeData(); }}>View More</MoreButton>
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
