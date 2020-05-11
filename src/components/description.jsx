import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  fb, pin, twitter, email, print, makesNum, descript,
}) => (
  <div className="descriptionSection">
    <div className="social">
      <a href="https://www.facebook.com/"><img className="facebook" src={fb} alt={fb} /></a>
      <br />
      <a href="https://www.pinterest.com/"><img className="pinterest" src={pin} alt={pin} /></a>
      <br />
      <a href="https://twitter.com/explore"><img className="twitter" src={twitter} alt={twitter} /></a>
      <br />
      <a href="mailto:?subject=Check Out This Recipe!&body=This looks SO GOOD and I thought you might like it https://www.bonappetit.com/recipe/cinnamon-date-sticky-buns"><img className="email" src={email} alt={email} /></a>
    </div>
    <div className="briefDescription">
      <p className="makesNum">
        SERVINGS:
        {makesNum}
      </p>
      <p className="smallText">{descript}</p>
    </div>
    <div role="button" tabIndex={0} onKeyPress className="printSection" onClick={() => { window.print(); return false; }}>
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
