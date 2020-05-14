/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import x from '../../public/images/x.jpg';
import styled from 'styled-components';

const TopRow = styled.div`
  padding-top: 1vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 1vh;
  border-bottom: 1px rgb(184, 184, 184) solid;
  position: fixed;
  width:100vw;
  height: 4vh;
  margin-top: -1vh;
  background-color: white;
`;

const Eyes = styled.img`
  position:absolute;
  height:1vh;
  margin-left: 48.4%;
  margin-top: 1.23%;
`;

const Eyes2 = styled.img`
  position:absolute;
  height:1vh;
  margin-left: 49.55%;
  margin-top: 1.23%;
`;

const TopIcons = styled.img`
  height: 3vh;
  margin-right: 2vw;
  margin-left: 2vw;
`;

const Search = styled.img`
  height: 3vh;
  margin-right: 2vw;
  margin-left: 2vw;
  justify-self: right;
  margin-left: 8vw;
`;

const Foodie = styled.span`
  justify-self: center;
  font-size: 1.4rem;
  font-family: 'Josefin Sans', sans-serif;
  padding-top: .75vh;
`;

const Right = styled.span`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Recipes = styled.a`
  text-decoration: none;
  padding-top: .75vh;
  justify-self: right;
  font-size: .8rem;
  color: rgb(150, 150, 150);
  &:hover {
    text-decoration: underline;
  }
`;

const Login = styled.a`
  text-decoration: none;
  padding-top: .75vh;
  margin-left: 2vw;
  font-size: .8rem;
  font-weight: 600;
  color: rgb(46, 46, 46);
  &:hover {
    text-decoration: underline;
  }
`;

const SearchModal = styled.div`
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

const Closemodal = styled.div`

`;

const CloseX = styled.img`
  float:right;
  margin-right: 2vw;
  color: white;
  background-color: black;
  padding:1rem;
  font-family: monospace;
  height:3vh;
  margin-top: 2vh;
`;

const Searching = styled.textarea`
  position: absolute;
  margin-left: -22%;
  margin-top: 20vh;
`;

const Findit = styled.a`
  position: absolute;
  margin-top: 36vh;
  margin-left: 18vw;
  background-color: rgb(0, 0, 0);
  color: white;
  font-size: 1rem;
  padding: .6rem;
  width: 8vw;
`;

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
        <SearchModal>
          <Closemodal role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => { this.setState({ textArea: false }); }}><CloseX alt="true" src={x} /></Closemodal>
          <Searching placeholder="Search Recipes..." onChange={(e) => this.handleSearch(e.target.value)} />
          <br />
          <Findit href={fullsearch}>Find It</Findit>
        </SearchModal>
      );
    }
    return (
      <TopRow>
        <Eyes alt="true" src="https://img.pngio.com/dot-png-images-free-download-black-dot-png-3500_3500.png" />
        <Eyes2 alt="true" src="https://img.pngio.com/dot-png-images-free-download-black-dot-png-3500_3500.png" />
        <TopIcons src={menu} alt={menu} />
        <Foodie>FOODIE</Foodie>
        <Right>
          <Recipes href="https://www.bonRecipesppetit.com/recipes">RECIPES</Recipes>
          <Login href="https://account.bonappetit.com/?brandSlug=bon-appetit&redirectUrl=https://www.bonappetit.com/&_ga=2.195360363.635364393.1588887829-1653893722.1588887829" className="login">{login}</Login>
          <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => { this.setState({ textArea: true }); }}><Search src={search} alt={search} /></div>
          {mySearch}
        </Right>
      </TopRow>
    );
  }
}

export default TopBar;

TopBar.propTypes = {
  menu: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};
