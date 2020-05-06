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
  fb: PropTypes.string.isRequired,
  pin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  print: PropTypes.string.isRequired,
  makesNum: PropTypes.number.isRequired,
  descript: PropTypes.string.isRequired,
};
