import React from 'react';
import PropTypes from 'prop-types';

const Title = ({
  chef, name, rating, thumbsUp, month, randPhoto, photoBy,
}) => (
  <div className="titleSection">
    <img className="chef" src={chef} alt={chef} />
    <br />
    <p className="recipeTitle">{name}</p>
    <span className="ratings">
      <p className="percent">
        {rating}
        % would make again
        <img className="thumbsUp" src={thumbsUp} alt={thumbsUp} />
      </p>
      <p className="date">{month}</p>
    </span>
    <br />
    <img className="recipePhoto" src={randPhoto} alt="/" />
    <p className="photoCredit">{photoBy}</p>
  </div>
);

export default Title;

Title.propTypes = {
  chef: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  thumbsUp: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  randPhoto: PropTypes.string.isRequired,
  photoBy: PropTypes.string.isRequired,
};
