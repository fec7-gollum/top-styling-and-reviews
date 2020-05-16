/* eslint-disable no-plusplus */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import users from '../../mockUsers';

const Fail = styled.div`
  position: absolute;
  width: 99vw;
  color: red;
`;

const MakeAgain = styled.p`
  margin-top: 10vh;
  margin-left: 10vw;
  font-family: 'Josefin Sans', sans-serif;
`;

const Labels1 = styled.label`
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-left: 10vw;
`;

const Labels2 = styled.label`
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-left: 3vw;
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
  margin-top: 2vh;
`;

const Starclicker2 = styled.div`
  margin-left: 1vw;
  margin-top: 2vh;
`;

const Starclicker3 = styled.div`
  margin-left: 1vw;
  margin-top: 2vh;
`;

const Starclicker4 = styled.div`
  margin-left: 1vw;
  margin-top: 2vh;
`;

const Starclicker5 = styled.div`
  margin-left: 1vw;
  margin-top: 2vh;
`;

const Modal = styled.div`
  height:100vh;
  width:99vw;
  background-color: white;
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px black;
  text-align: center;
`;

const PleaseSignUp = styled.div`
  margin-top: 2vh;
  position: absolute;
  width: 99vw;
  margin-left: -2vw;
`;

const TextA = styled.textarea`
  margin-top: 5vh;
  height:14vh;
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

const NAME = styled.span`
  margin-left: 1vw;
  font-weight:800;
`;

const Location = styled.span`
  margin-left: 1vw;
`;

const Date = styled.span`
  margin-left: 1vw;
  font-weight: 100;
`;

const MoreButton = styled.div`
  width:10vw;
  background-color: rgb(228, 228, 253);
  text-align: center;
  padding: 1.4rem;
  margin-top: 5vh;
  margin-left: 28vw;
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
  width:18vw;
  background-color: #F0F8FF;
`;

const SignIn = styled.input`
  width: 20vw;
  color: white;
  background-color: #1a1a1a;
  padding: 1vh;
  cursor: pointer;
`;

const ReviewTitle = styled.div`
  margin-left:10vw;
  margin-top:10vh;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 800;
`;

const RateRecipe = styled.p`
  margin-left:10vw;
  font-family: 'Josefin Sans', sans-serif;
`;

const StarContainer = styled.div`
  margin-left: -4px;
`;

const PageName = styled.p`
  font-family: monospace;
  font-weight:900;
  margin-top: 2vh;
  font-size: 5rem;
`;

const SignInForm = styled.p`
  margin-top: -5vh;
  font-family: 'Josefin Sans', sans-serif;
  margin-left: -6vw;
`;

const REGISTER = styled.a`
  color: black;
  margin-top:1vh;
  margin-left: 1vw;
`;

const YES = styled.input`
  margin-left: 1vw;
`;

const NO = styled.input`
  margin-left: 1vw;
`;

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      click: 0,
      myData: undefined || [{ mock: 'mock' }],
      total40: undefined || [{ mock: 'mock' }],
      total60: undefined || [{ mock: 'mock' }],
      total80: undefined || [{ mock: 'mock' }],
      total100: undefined || [{ mock: 'mock' }],
      modal: false,
      login: false,
      username: '',
      password: '',
      writeReview: 0,
      starRate1: <i className="far fa-star" />,
      starRate2: <i className="far fa-star" />,
      starRate3: <i className="far fa-star" />,
      starRate4: <i className="far fa-star" />,
      starRate5: <i className="far fa-star" />,
      finalRate: 0,
      again: '',
      reviewText: '',
      styles: { color: 'black' },
      incorrect: false,
      url: window.location.pathname,
    };
    this.changeData = this.changeData.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.getBottom = this.getBottom.bind(this);
  }

  componentDidMount() {
    // this.getOne();
    this.getBottom();
  }

  getBottom() {
    const { url } = this.state;
    axios.get(`/reviews${url}`)
      .then((result) => result.data)
      .then((data) => {
        // eslint-disable-next-line no-param-reassign
        data = data || [];
        this.setState({
          myData: data.slice(-20).reverse(),
          total40: data.slice(-40).reverse(),
          total60: data.slice(-60).reverse(),
          total80: data.slice(-80).reverse(),
          total100: data.slice(-100).reverse(),
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  checkUser() {
    users.forEach((user) => {
      const { username, password } = this.state;
      if (user.username === username && user.password === password) {
        this.setState({ modal: false, login: true });
      }
    });
    this.setState({ styles: { color: 'red' }, incorrect: true });
  }

  changeData() {
    const {
      click, total40, total60, total80, total100,
    } = this.state;
    if (click === 0) {
      this.setState({
        myData: total40,
        click: 1,
      });
    }
    if (click === 1) {
      this.setState({
        myData: total60,
        click: 2,
      });
    }
    if (click === 2) {
      this.setState({
        myData: total80,
        click: 3,
      });
    }
    if (click === 3) {
      this.setState({
        myData: total100,
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
    const { url } = this.state;
    axios.post(`/reviews${url}`, {
      stars: sta,
      text: `${txt}`,
      name: `${nme}`,
    })
      .then(() => {
        axios.get(`/reviews${url}`)
          .then((result) => result.data)
          .then((data) => {
            this.setState({
              myData: data.slice(-20).reverse(),
              total40: data.slice(-40).reverse(),
              total60: data.slice(-60).reverse(),
              total80: data.slice(-80).reverse(),
              total100: data.slice(-100).reverse(),
            });
          });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
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
          <Labels1 htmlFor="yes">
            YES
            <YES type="radio" id="yes" name="again" onClick={() => { this.setState({ again: 'yes' }); }} />
            <ThumbUp alt="https://myfecphotos.s3.amazonaws.com/thumbs.svg" src="https://myfecphotos.s3.amazonaws.com/thumbs.svg" />
          </Labels1>
          <Labels2 htmlFor="no">
            NO
            <NO type="radio" id="no" name="again" onClick={() => { this.setState({ again: 'no' }); }} />
          </Labels2>
          <ThumbDown alt="https://myfecphotos.s3.amazonaws.com/thumbs.svg" src="https://myfecphotos.s3.amazonaws.com/thumbs.svg" />
        </div>
      );
      actualReviewBottom = (
        <BottomButtons>
          <Cancelbtn role="button" tabIndex={0} onKeyDown onClick={() => { this.setState({ writeReview: 1 }); }}>Cancel</Cancelbtn>
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
                starRate1: <i className="fas fa-star" />,
                starRate2: <i className="far fa-star" />,
                starRate3: <i className="far fa-star" />,
                starRate4: <i className="far fa-star" />,
                starRate5: <i className="far fa-star" />,
                finalRate: 1,
              });
            }}
          >

            {starRate1}

          </Starclicker>
          <Starclicker2
            role="button"
            tabIndex={0}
            onKeyDown
            onClick={() => {
              this.setState({
                starRate1: <i className="fas fa-star" />,
                starRate2: <i className="fas fa-star" />,
                starRate3: <i className="far fa-star" />,
                starRate4: <i className="far fa-star" />,
                starRate5: <i className="far fa-star" />,
                finalRate: 2,
              });
            }}
          >

            {starRate2}

          </Starclicker2>
          <Starclicker3
            role="button"
            tabIndex={0}
            onKeyDown
            onClick={() => {
              this.setState({
                starRate1: <i className="fas fa-star" />,
                starRate2: <i className="fas fa-star" />,
                starRate3: <i className="fas fa-star" />,
                starRate4: <i className="far fa-star" />,
                starRate5: <i className="far fa-star" />,
                finalRate: 3,
              });
            }}
          >
            {starRate3}

          </Starclicker3>
          <Starclicker4
            role="button"
            tabIndex={0}
            onKeyDown
            onClick={() => {
              this.setState({
                starRate1: <i className="fas fa-star" />,
                starRate2: <i className="fas fa-star" />,
                starRate3: <i className="fas fa-star" />,
                starRate4: <i className="fas fa-star" />,
                starRate5: <i className="far fa-star" />,
                finalRate: 4,
              });
            }}
          >
            {starRate4}

          </Starclicker4>
          <Starclicker5
            role="button"
            tabIndex={0}
            onKeyDown
            onClick={() => {
              this.setState({
                starRate1: <i className="fas fa-star" />,
                starRate2: <i className="fas fa-star" />,
                starRate3: <i className="fas fa-star" />,
                starRate4: <i className="fas fa-star" />,
                starRate5: <i className="fas fa-star" />,
                finalRate: 5,
              });
            }}
          >
            {starRate5}

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
            <PageName>con appetit</PageName>
            <SignInForm>Please Login To Your Account</SignInForm>
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
            Dont have a login?
            <REGISTER href="https://account.bonappetit.com/?brandSlug=bon-appetit&redirectUrl=https://www.bonappetit.com/&_ga=2.103108807.635364393.1588887829-1653893722.1588887829#"> Register Now</REGISTER>
          </PleaseSignUp>
        </Modal>
      );
    }
    for (let i = 0; i < myData.length; i++) {
      if (myData[i].stars === 1) {
        myData[i].stars = (
          <StarContainer>
            <i className="fas fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </StarContainer>
        );
      } else if (myData[i].stars === 2) {
        myData[i].stars = (
          <StarContainer>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </StarContainer>
        );
      } else if (myData[i].stars === 3) {
        myData[i].stars = (
          <StarContainer>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </StarContainer>
        );
      } else if (myData[i].stars === 4) {
        myData[i].stars = (
          <StarContainer>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
          </StarContainer>
        );
      } else if (myData[i].stars === 5) {
        myData[i].stars = (
          <StarContainer>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </StarContainer>
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
            <TextA onClick={() => { this.setState((prev) => ({ modal: true, writeReview: prev.writeReview + 1 })); }} placeholder="Write a review..." onChange={(e) => this.handleReview(e.target.value)} />
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
                  <NAME>
                    {review.name}
                  </NAME>
                  <UserMargin>  &bull;</UserMargin>
                  <Location>
                    {review.location}
                  </Location>
                  <UserMargin>  &bull;</UserMargin>
                  <Date>
                    {review.date}
                  </Date>
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
