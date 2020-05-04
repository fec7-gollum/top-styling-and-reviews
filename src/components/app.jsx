/* eslint-disable import/extensions */
import React from 'react';
import TopBar from './topbar.jsx';
import Title from './title.jsx';
import Description from './description.jsx';
import menu from '../../public/images/menu.svg';
import search from '../../public/images/search.svg';
import chef from '../../public/images/chef.svg';
import facebook from '../../public/images/facebook.svg';
import pin from '../../public/images/pinterest.svg';
import twitter from '../../public/images/twitter.svg';
import email from '../../public/images/email.svg';
import printer from '../../public/images/printer.svg';
import thumbs from '../../public/images/thumbs.svg';

class App extends React.Component {
  contructor() {
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <TopBar menu={menu} search={search} />
        <br />
        <Title chef={chef} thumbs={thumbs} />
        <br />
        <Description fb={facebook} pin={pin} twitter={twitter} email={email} print={printer} />
      </div>
    );
  }
}

export default App;
