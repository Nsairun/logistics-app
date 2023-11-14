"use client"
import React from 'react';
import Landingimage from "../../public/backound.webp";
import Text from '../atoms/Text';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${Landingimage.src});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 770px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

const LogoText = styled(Text)`
  color: #87c656;
  font-family: monospace;
  font-size: 60px;
  font-weight: bold;

  @media screen and (max-width: 770px) {
    font-size: 40px;
    text-align: center; 
    font-weight: bold;
    width: 100%;
`;

const DescriptionText = styled(Text)`
  color: #fff;
`;

const StyledButton = styled.button`
  background-color: #87c656;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    background-color: #87C656;
    width: 20%;
    font-weight: 600;
`;

function LandingPage() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <LandingContainer>
      <LogoText headingLevel={'h1'}>LOGISTICBAMBE</LogoText>
      <DescriptionText headingLevel={'h1'}>
        let us ease your courier transportation
      </DescriptionText>
      <StyledButton onClick={() => navigateToPage("/registrationlogin")}>
        Go to Homepage
      </StyledButton>
    </LandingContainer>
  );
}

export default LandingPage;