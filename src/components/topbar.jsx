/* eslint-disable react/require-default-props */
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
    let fullsearch = "https://www.bonappetit.com/search?q=" + this.state.searchterm;
    let mySearch;
    if (this.state.textArea) {
      mySearch = <div className="searchModal"><img src={x} className="closemodal" onClick={() => {this.setState({ textArea: false })}}/><textarea className="searching" placeholder="Search Recipes..." onChange={e => this.handleSearch(e.target.value)}></textarea> <br /><a className="findit" href={fullsearch}>Find It</a></div>;
    }
    return (
      <div className="topRow">
        <img id="eyes" src="https://img.pngio.com/dot-png-images-free-download-black-dot-png-3500_3500.png"/>
        <img id="eyes2" src="https://img.pngio.com/dot-png-images-free-download-black-dot-png-3500_3500.png"/>
        <img className="topIcons" src={this.props.menu} alt={this.props.menu} />
        <span className="foodie">FOODIE</span>
        <span className="right">
          <a href="https://www.bonappetit.com/recipes" className="recipes">RECIPES</a>
          <a href="https://account.bonappetit.com/?brandSlug=bon-appetit&redirectUrl=https://www.bonappetit.com/&_ga=2.195360363.635364393.1588887829-1653893722.1588887829" className="login">{this.props.login}</a>
          <img className="topIcons search" src={this.props.search} alt={this.props.search} onClick={() => {this.setState({ textArea: true })}}/>
          {mySearch}
        </span>
      </div>
    );
  }
}

export default TopBar;

TopBar.propTypes = {
  menu: PropTypes.string,
  search: PropTypes.string,
};
