"use client";
import React from "react";
import Landingimage from "../../public/backound.webp";
import Text from "../atoms/Text";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import LandingNav from "../molecules/LandingNav";
import SwapImg from "../molecules/SwapImg";
import LandingAid from "../molecules/LandingAid";
import Card from "../molecules/Card";
import Footer from "./Footer";
import firstimg from "../../public/firstimg.jpeg";
import secondimg from "../../public/more.png";
import thirdimg from "../../public/truck.png";
import { SessionGuard } from "../Guards/SessionGuard";

const LandingMainContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-direction: column;
  background: #F1F2F3;

  @media screen and (max-width: 770px) {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`;

const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 80vh;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${Landingimage.src});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const LogoText = styled(Text)`
  color: #87c656;
  font-family: monospace;
  font-size: 60px;
  font-weight: bold;

  @media screen and (max-width: 770px) {
    font-size: 30px;
    text-align: center; 
    font-weight: bold;
    width: 100%;
`;

const DescriptionText = styled(Text)`
  color: #fff;
  font-size: 15px;
`;

const StyledButton = styled.button`
  background-color: #87c656;
  color: #fff;
  padding: 0.6rem 5rem;
  border-radius: 5px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    transition: 0.3s ease-in-out;
    padding: 0.8rem 6rem;
    font-size: 18px;
    font-weight: 600;
`;

const Nav = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;

  @media screen and (max-width: 770px) {
    display: none;
`;

const SwapContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: end;
  border: 1px solid grey;
  border-radius: 5px;
  height: 65vh;
  width: 70vw;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);


  @media screen and (max-width: 770px) {
    width: 100%;
    display: block;

`;

const CardContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 770px) {
    width: 100%;
    display: block;
`;

function LandingPage() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <LandingMainContainer>
      <LandingContainer>
        <Nav>
          <LandingNav />
        </Nav>
        <LogoText headingLevel={"h1"}>LOGISTICBAMBE</LogoText>
        <DescriptionText headingLevel={"h2"}>
          let us ease your courier transportation
        </DescriptionText>
        <StyledButton onClick={() => navigateToPage("/registrationlogin")}>
          Start
        </StyledButton>
      </LandingContainer>
      <SwapContainer>
        <SwapImg
          images={["/firstimg.jpeg", "/secondimg.jpeg", "/third image.png"]}
        />
      </SwapContainer>
      <LandingAid />
      <CardContainer>
      <Card
          imageSrc={firstimg}
          title={"Ship Like a Pro"}
          description={"Get access to powerful and time-saving customizable features found only in Logisticbambe"} type={""}      />
      <Card
          imageSrc={secondimg}
          title={"Save on Frequent Shipping"}
          description={" Get preferred rates, billing options and other great benefits of having an account!"} type={""}      />
      <Card
          imageSrc={thirdimg}
          title={"Not Home? Change of Plans?"}
          description={"Take control of your shipment delivery! Decide when and where you want us to deliver."} type={""}      />
      </CardContainer>
      <Footer />
    </LandingMainContainer>
  );
}

export default SessionGuard(LandingPage);
