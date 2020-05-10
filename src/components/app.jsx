import React from 'react';
import axios from 'axios';

import TopBar from './topbar';
import Title from './title';
import Description from './description';
import Reviews from './reviews';
import menu from '../../public/images/menu.svg';
import search from '../../public/images/search.svg';
import chef from '../../public/images/chef.svg';
import facebook from '../../public/images/facebook.svg';
import pin from '../../public/images/pinterest.svg';
import twitter from '../../public/images/twitter.svg';
import email from '../../public/images/email.svg';
import printer from '../../public/images/printer.svg';
import thumbsUp from '../../public/images/thumbs.svg';
import star from '../../public/images/star.svg';
import blankstar from '../../public/images/blankstar.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topdata: undefined,
      bottomdata: undefined,
      total40: undefined,
      total60: undefined,
      total80: undefined,
      total100: undefined,
      login: 'LOGIN',
      url: window.location.pathname,
    };

    this.getOne = this.getOne.bind(this);
    this.getBottom = this.getBottom.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
  }

  // click on login in app... get review modal to pop up... simulate click on text area

  componentDidMount() {
    this.getOne();
    this.getBottom();
  }

  getOne() {
    const { url } = this.state;
    axios.get(`${url}recipes`)
      .then((result) => result.data)
      .then((data) => {
        this.setState({
          topdata: data,
        });
      });
  }

  getBottom() {
    const { url } = this.state;
    axios.get(`${url}reviews`)
      .then((result) => result.data)
      .then((data) => {
        this.setState({
          bottomdata: data.slice(-20).reverse(),
          total40: data.slice(-40).reverse(),
          total60: data.slice(-60).reverse(),
          total80: data.slice(-80).reverse(),
          total100: data.slice(-100).reverse(),
        });
      });
  }

  updateLogin() {
    this.setState({
      login: 'LOGOUT',
    });
  }


  render() {
    let myPage;
    const {
      topdata, bottomdata, total40, total60, total80, total100, login,
    } = this.state;
    if (topdata && bottomdata) {
      const { url } = this.state;
      myPage = (
        <div>
          <div className="TopModule">
            <TopBar menu={menu} search={search} login={login} />
            <br />
            <Title
              chef={chef}
              rating={topdata[0].thumbs}
              thumbsUp={thumbsUp}
              name={topdata[0].recipeName}
              month={new Date().toDateString()}
              randPhoto={topdata[0].image}
              photoBy={topdata[0].photoBy}
            />
            <br />
            <Description
              fb={facebook}
              pin={pin}
              twitter={twitter}
              email={email}
              print={printer}
              makesNum={topdata[0].makes}
              descript={topdata[0].description}
            />
          </div>
          <div className="ReviewModule">
            <Reviews
              star={star}
              blankstar={blankstar}
              reviewData={bottomdata}
              total40={total40}
              total60={total60}
              total80={total80}
              total100={total100}
              loginLogout={this.updateLogin}
              url={url}
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>{ myPage }</div>
      </div>
    );
  }
}

export default App;
