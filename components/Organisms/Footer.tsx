import React from 'react'
import styled from "@emotion/styled";
import Vehicule from '../atoms/Vehicule';

const FooterContainer = styled("div")`
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  height: 35vh;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 100, 0, 0.2), rgba(0, 100, 0, 0));
  margin-bottom: 2%;

  @media screen and (max-width: 770px) {
    width: 100%;
    display: block;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 100, 0, 0.2), rgba(0, 100, 0, 0));
`;

const Contact = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 5px;
  height: 100%;
  width: 100%;
`;

const Logo = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 700;
    font-size: 18px;
    background: #fff;
    padding: 10px;
    color: #000;
    font-family: Helvetica;
    text-shadow: 2px 2px 4px grey;
`;

function Footer() {
  return (
    <FooterContainer>
        <Contact>
        <Logo>LOGISTICBAMBE <Vehicule /></Logo>
          <p style={{fontSize: "15px", color: "#000"}}>About</p>
          <p style={{fontSize: "15px", color: "#000"}}>Legal Notice</p>
          <p style={{fontSize: "15px", color: "#000"}}>Press</p>
          <p style={{fontSize: "15px", color: "#000"}}>Careers</p>
       </Contact>
       <Contact>
          <h1 style={{fontWeight: "700"}}>Contact</h1>
          <p style={{fontSize: "15px", color: "#000"}}>Help</p>
          <p style={{fontSize: "15px", color: "#000"}}>FAQ</p>
          <p style={{fontSize: "15px", color: "#000"}}>Contact Us</p>
       </Contact>
       <Contact>
           <h1 style={{fontWeight: "700"}}>Legal</h1>
           <p style={{fontSize: "15px", color: "#000"}}>Terms & Conditions</p>
           <p style={{fontSize: "15px", color: "#000"}}>Privacy Notice</p>
       </Contact>
       <Contact>
           <h1 style={{fontWeight: "700"}}>Alerts</h1>
           <p style={{fontSize: "15px", color: "#000"}}>Fraud Alerts</p>
           <p style={{fontSize: "15px", color: "#000"}}>important info</p>
       </Contact>
    </FooterContainer>
  )
}

export default Footer