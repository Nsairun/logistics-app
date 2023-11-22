import React from 'react'
import styled from 'styled-components'
import Vehicule from '../atoms/Vehicule';

const FooterContainer = styled("div")`
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  height: 24vh;
  width: 100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margi-bottom: 5%;
`;

const Contact = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 5px;
  height: 100%;
  width: 100%;
  border-right: 1px solid #000;
`;

const Logo = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 700;
    font-size: 18px;
    padding: 20px;
    color: #000;
    background-color: rgba(135, 198, 86, 0.5);
    font-family: Helvetica;
    text-shadow: 2px 2px 4px grey;
`;

function Footer() {
  return (
    <FooterContainer>
        <Contact>
        <Logo>LOGISTICBAMBE <Vehicule /></Logo>
          <p style={{fontSize: "15px", color: "grey"}}>About</p>
          <p style={{fontSize: "15px", color: "grey"}}>Legal Notice</p>
          <p style={{fontSize: "15px", color: "grey"}}>Press</p>
          <p style={{fontSize: "15px", color: "grey"}}>Careers</p>
       </Contact>
       <Contact>
          <h1 style={{fontWeight: "700"}}>CONTACT</h1>
          <p style={{fontSize: "15px", color: "grey"}}>Help</p>
          <p style={{fontSize: "15px", color: "grey"}}>FAQ</p>
          <p style={{fontSize: "15px", color: "grey"}}>Contact Us</p>
          <p style={{fontSize: "15px", color: "grey"}}>Find Location</p>
       </Contact>
       <Contact>
           <h1 style={{fontWeight: "700"}}>Legal</h1>
           <p style={{fontSize: "15px", color: "grey"}}>Terms & Conditions</p>
           <p style={{fontSize: "15px", color: "grey"}}>Privacy Notice</p>
       </Contact>
       <Contact>
           <h1 style={{fontWeight: "700"}}>Alerts</h1>
           <p style={{fontSize: "15px", color: "grey"}}>Fraud Alerts</p>
           <p style={{fontSize: "15px", color: "grey"}}>important info</p>
       </Contact>
    </FooterContainer>
  )
}

export default Footer