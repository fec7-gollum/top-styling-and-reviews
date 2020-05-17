/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
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
  z-index: 100;
`;

const Eyes = styled.p`
  position:absolute;
  font-size: 4rem;
  margin-left: 17px;
  margin-top: -56px;
`;

const Eyes2 = styled.p`
  position:absolute;
  font-size: 4rem;
  margin-left: 36px;
  margin-top: -56px;
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
  background-color: white;
  z-index: 200;
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
  cursor: pointer;
`;

const Searching = styled.textarea`
  position: absolute;
  margin-left: -22%;
  margin-top: 20vh;
  resize: none;
  padding:1rem;
  width: 48vw;
  font-size: 1rem;
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
  text-decoration: none;
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
    const { login } = this.props;
    const { textArea, searchterm } = this.state;
    const fullsearch = `https://www.bonappetit.com/search?q=${searchterm}`;
    let mySearch;
    if (textArea) {
      mySearch = (
        <SearchModal>
          <Closemodal role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => { this.setState({ textArea: false }); }}><CloseX alt="true" src="https://myfecphotos.s3.amazonaws.com/x.jpg" /></Closemodal>
          <Searching placeholder="Search Recipes..." onChange={(e) => this.handleSearch(e.target.value)} />
          <br />
          <Findit href={fullsearch}>Find It</Findit>
        </SearchModal>
      );
    }
    return (
      <TopRow>
        <TopIcons src="https://myfecphotos.s3.amazonaws.com/menu.svg" alt="https://myfecphotos.s3.amazonaws.com/menu.svg" />
        <Foodie>
          FOODIE
          <Eyes>.</Eyes>
          <Eyes2>.</Eyes2>
        </Foodie>
        <Right>
          <Recipes href="https://www.bonRecipesppetit.com/recipes">RECIPES</Recipes>
          <Login href="https://account.bonappetit.com/?brandSlug=bon-appetit&redirectUrl=https://www.bonappetit.com/&_ga=2.195360363.635364393.1588887829-1653893722.1588887829" className="login">{login}</Login>
          <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => { this.setState({ textArea: true }); }}><Search src="https://myfecphotos.s3.amazonaws.com/search.svg" alt="https://myfecphotos.s3.amazonaws.com/search.svg" /></div>
          {mySearch}
        </Right>
      </TopRow>
    );
  }
}

export default TopBar;

TopBar.propTypes = {
  login: PropTypes.string.isRequired,
};
