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
      total120: undefined,
      login: 'LOGIN',
    };
    this.getOne = this.getOne.bind(this);
    this.getBottom = this.getBottom.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
  }

  //click on login in app... get review modal to pop up... simulate click on text area

  componentDidMount() {
    this.getOne();
    this.getBottom();
  }

  getOne() {
    axios.get('/recipes/8')
      .then((result) => result.data)
      .then((data) => {
        this.setState({
          topdata: data,
        });
      });
  }

  getBottom() {
    axios.get('/reviews/8')
      .then((result) => result.data)
      .then((data) => {
        this.setState({
          bottomdata: data.slice(90, 120).reverse(),
          total40: data.slice(80, 120).reverse(),
          total60: data.slice(60, 120).reverse(),
          total80: data.slice(40, 120).reverse(),
          total100: data.slice(20, 120).reverse(),
          total120: data.slice(0, 120).reverse(),
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
      topdata, bottomdata, total40, total60, total80, total100, total120, login,
    } = this.state;
    if (topdata && bottomdata) {
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
              total120={total120}
              recall={this.getBottom()}
              loginLogout={this.updateLogin}
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
