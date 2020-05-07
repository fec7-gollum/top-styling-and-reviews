/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  fb, pin, twitter, email, print, makesNum, descript,
}) => (
  <div className="descriptionSection">
    <div className="social">
      <img className="facebook" src={fb} alt={fb} />
      <br />
      <img className="pinterest" src={pin} alt={pin} />
      <br />
      <img className="twitter" src={twitter} alt={twitter} />
      <br />
      <img className="email" src={email} alt={email} />
    </div>
    <div className="briefDescription">
      <p className="makesNum">
        SERVINGS:
        {makesNum}
      </p>
      <p className="smallText">{descript}</p>
    </div>
    <div className="printSection">
      <img className="print" src={print} alt={print} />
      <p>PRINT</p>
    </div>
  </div>
);

export default Description;

Description.propTypes = {
  fb: PropTypes.string,
  pin: PropTypes.string,
  twitter: PropTypes.string,
  email: PropTypes.string,
  print: PropTypes.string,
  makesNum: PropTypes.number,
  descript: PropTypes.string,
};
