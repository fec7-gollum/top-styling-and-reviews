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
      <a href="https://www.facebook.com/"><SocialImg src={'https://myfecphotos.s3.amazonaws.com/facebook.svg'} alt={'https://myfecphotos.s3.amazonaws.com/facebook.svg'} /></a>
      <br />
      <a href="https://www.pinterest.com/"><SocialImg src={'https://myfecphotos.s3.amazonaws.com/pinterest.svg'} alt={'https://myfecphotos.s3.amazonaws.com/pinterest.svg'} /></a>
      <br />
      <a href="https://twitter.com/explore"><SocialImg src={'https://myfecphotos.s3.amazonaws.com/twitter.svg'} alt={'https://myfecphotos.s3.amazonaws.com/twitter.svg'} /></a>
      <br />
      <a href="mailto:?subject=Check Out This Recipe!&body=This looks SO GOOD and I thought you might like it https://www.bonappetit.com/recipe/cinnamon-date-sticky-buns"><SocialImg src={'https://myfecphotos.s3.amazonaws.com/email.svg'} alt={'https://myfecphotos.s3.amazonaws.com/email.svg'} /></a>
    </Social>
    <BriefDescription>
      <MakesNum>
        SERVINGS:
        {makesNum}
      </MakesNum>
      <SmallText>{descript}</SmallText>
    </BriefDescription>
    <PrintSection role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => { window.print(); return false; }}>
      <Print src={'https://myfecphotos.s3.amazonaws.com/printer.svg'} alt={'https://myfecphotos.s3.amazonaws.com/printer.svg'} />
      <PrintText>PRINT</PrintText>
    </PrintSection>
  </DescriptionSection>
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
