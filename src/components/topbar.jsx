/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import x from '../../public/images/x.jpg';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: false,
      searchterm: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(value) {
    this.setState({
      searchterm: value,
    });
  }

  render() {
    const { menu, search, login } = this.props;
    const { textArea, searchterm } = this.state;
    const fullsearch = `https://www.bonappetit.com/search?q=${searchterm}`;
    let mySearch;
    if (textArea) {
      mySearch = (
        <div className="searchModal">
          <div role="button" tabIndex={0} onKeyPress={() => {}} className="closemodal" onClick={() => { this.setState({ textArea: false }); }}><img alt="true" src={x} /></div>
          <textarea className="searching" placeholder="Search Recipes..." onChange={(e) => this.handleSearch(e.target.value)} />
          <br />
          <a className="findit" href={fullsearch}>Find It</a>
        </div>
      );
    }
    return (
      <div className="topRow">
        <img alt="true" id="eyes" src="https://img.pngio.com/dot-png-images-free-download-black-dot-png-3500_3500.png" />
        <img alt="true" id="eyes2" src="https://img.pngio.com/dot-png-images-free-download-black-dot-png-3500_3500.png" />
        <img className="topIcons" src={menu} alt={menu} />
        <span className="foodie">FOODIE</span>
        <span className="right">
          <a href="https://www.bonappetit.com/recipes" className="recipes">RECIPES</a>
          <a href="https://account.bonappetit.com/?brandSlug=bon-appetit&redirectUrl=https://www.bonappetit.com/&_ga=2.195360363.635364393.1588887829-1653893722.1588887829" className="login">{login}</a>
          <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => { this.setState({ textArea: true }); }}><img className="topIcons search" src={search} alt={search} /></div>
          {mySearch}
        </span>
      </div>
    );
  }
}

export default TopBar;

TopBar.propTypes = {
  menu: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};
