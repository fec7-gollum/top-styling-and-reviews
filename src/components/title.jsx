import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleSection = styled.div`
  margin-top: 5vh;
  width: 100vw;
  text-align: center;
`;

const Chef = styled.img`
  height:7vh;
  margin-top: 6vh;
`;

const RecipeTitle = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  margin-top: 5vh;
  font-size: 4rem;
`;

const Ratings = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  font-family: 'Josefin Sans', sans-serif;
`;

const Percent = styled.span`
  margin-left: 15vw;
  display: inline-flex;
`;

const ThumbsUp = styled.img`
  height:3vh;
  margin-top: -1vh;
  margin-left: 1vw;
`;

const Date = styled.p`
  margin-left: 15vw;
  margin-top: -.5vh;
`;

const RecipePhoto = styled.img`
  width:98vw;
  margin-left: -1vw;
`;

const PhotoCredit = styled.p`
  margin-left: 50vw;
  font-family: 'Josefin Sans', sans-serif;
  color: rgb(158, 158, 158);
`;

const Title = ({
  name, rating, month, randPhoto, photoBy,
}) => (
  <TitleSection>
    <Chef src="https://myfecphotos.s3.amazonaws.com/chef.svg" alt="https://myfecphotos.s3.amazonaws.com/chef.svg" />
    <br />
    <RecipeTitle>{name}</RecipeTitle>
    <Ratings>
      <Percent>
        {rating}
        % would make again
        <ThumbsUp src="https://myfecphotos.s3.amazonaws.com/thumbs.svg" alt="https://myfecphotos.s3.amazonaws.com/thumbs.svg" />
      </Percent>
      <Date>{month}</Date>
    </Ratings>
    <br />
    <RecipePhoto src={randPhoto} alt="/" />
    <PhotoCredit>{photoBy}</PhotoCredit>
  </TitleSection>
);

export default Title;

Title.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  randPhoto: PropTypes.string.isRequired,
  photoBy: PropTypes.string.isRequired,
};
