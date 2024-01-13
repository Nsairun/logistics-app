"use client"
import React from 'react'
import Registration from '../../../components/molecules/RegistrationForm';
import styled from 'styled-components';
import LandingNav from '../../../components/molecules/LandingNav';
import ResponseNav from '../../../components/atoms/responseNav';

const RegistrationContainer =styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5%;

@media screen and (max-width: 770px) {
  display: block;
  width: 100%;
`;

const ResNav = styled("div")`
width: 100%;

@media screen and (max-width: 770px) {
  display: none;
}
`;

function page() {
  return (
    <RegistrationContainer>
      <ResNav>
        <LandingNav/>
      </ResNav>
        <ResponseNav />
        <Registration />
    </RegistrationContainer>
  )
}

export default page