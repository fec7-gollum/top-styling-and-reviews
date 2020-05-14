import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DescriptionSection = styled.div`
  padding-bottom: 20vh;
  border-bottom: black 5px solid;
`;

const Social = styled.div`

`;

const SocialImg = styled.img`
  height:4vh;
  margin-left: 2vw;
  margin-top: 3vh;
  &&:hover {
    cursor: pointer;
    transform: scale(1.6);
    transition: all .3s ease-in-out;
  }
`;

const BriefDescription = styled.div`
  text-align: center;
  margin-top: -20vh;
`;

const MakesNum = styled.p`

`;

const SmallText = styled.p`
  width:40vw;
  margin-left: 29vw;
`;

const PrintSection = styled.div`
  float:right;
  margin-right: 10vw;
  display: inline-flex;
  cursor: pointer;
`;

const Print = styled.img`
  height:4vh;
  margin-right: 1vw;
  margin-top: 10vh;
`;

const PrintText = styled.p`
  margin-top: 11vh;
  font-family: 'Josefin Sans', sans-serif;
`;

const Description = ({
  fb, pin, twitter, email, print, makesNum, descript,
}) => (
  <DescriptionSection>
    <Social>
      <a href="https://www.facebook.com/"><SocialImg src={fb} alt={fb} /></a>
      <br />
      <a href="https://www.pinterest.com/"><SocialImg src={pin} alt={pin} /></a>
      <br />
      <a href="https://twitter.com/explore"><SocialImg src={twitter} alt={twitter} /></a>
      <br />
      <a href="mailto:?subject=Check Out This Recipe!&body=This looks SO GOOD and I thought you might like it https://www.bonappetit.com/recipe/cinnamon-date-sticky-buns"><SocialImg src={email} alt={email} /></a>
    </Social>
    <BriefDescription>
      <MakesNum>
        SERVINGS:
        {makesNum}
<<<<<<< HEAD
      </MakesNum>
      <SmallText>{descript}</SmallText>
    </BriefDescription>
    <PrintSection role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => { window.print(); return false; }}>
      <Print src={print} alt={print} />
      <PrintText>PRINT</PrintText>
    </PrintSection>
  </DescriptionSection>
=======
      </p>
      <p className="smallText">{descript}</p>
    </div>
    <div role="button" tabIndex={0} onKeyPress={() => {}} className="printSection" onClick={() => { window.print(); return false; }}>
      <img className="print" src={print} alt={print} />
      <p>PRINT</p>
    </div>
  </div>
>>>>>>> 80650805701afe27c58afb05fecde01607f78472
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
