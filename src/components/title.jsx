import React from 'react';

const Title = ({ chef, thumbs }) => (
  <div className="titleSection">
    <img className="chef" src={chef} alt={chef} />
    <br />
    <p className="recipeTitle">Sticky Gooey Buns</p>
    <span className="ratings">
      <p className="percent">
        Thumbs Placeholder
        <img className="thumbsUp" src={thumbs} alt={thumbs} />
      </p>
      <p className="date">Date Placeholder</p>
    </span>
    <br />
    <img className="recipePhoto" src="https://myfecphotos.s3.amazonaws.com/1000-2000x800.jpg" alt="/" />
    <p className="photoCredit">Photo By Placeholder</p>
  </div>
);

export default Title;
