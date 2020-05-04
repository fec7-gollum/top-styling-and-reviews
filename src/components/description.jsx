import React from 'react';

const Description = ({ fb, pin, twitter, email, print }) => (
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
      <p className="makesNum">Makes Placeholder</p>
      <p className="smallText">Illo unde et sit incidunt doloremque vitae. Facere ducimus voluptatum consequatur illo illo iste. Delectus consequatur aut sequi itaque.</p>
    </div>
    <div className="printSection">
      <img className="print" src={print} alt={print} />
      <p>PRINT</p>
    </div>
  </div>
);

export default Description;
