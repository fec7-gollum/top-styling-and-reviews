import React from 'react';
import axios from 'axios';
import TopBar from './topbar';
import Title from './title';
import Description from './description';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topdata: undefined,
      login: 'LOGIN',
      url: window.location.pathname,
    };

    this.getOne = this.getOne.bind(this);
  }

  componentDidMount() {
    this.getOne();
  }

  getOne() {
    const { url } = this.state;
    axios.get(`/recipes${url}`)
      .then((result) => result.data)
      .then((data) => {
        this.setState({
          topdata: data,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }


  render() {
    let myPage;
    const {
      topdata, login,
    } = this.state;
    if (topdata) {
      myPage = (
        <div>
          <div className="TopModule">
            <TopBar login={login} />
            <br />
            <Title
              rating={topdata[0].thumbs}
              name={topdata[0].recipeName}
              month={new Date().toDateString()}
              randPhoto={topdata[0].image}
              photoBy={topdata[0].photoBy}
            />
            <br />
            <Description
              makesNum={topdata[0].makes}
              descript={topdata[0].description}
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
