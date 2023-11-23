"use client"
import React from 'react'
import Registration from '../../../components/molecules/RegistrationForm';
import styled from 'styled-components';
import LandingNav from '../../../components/molecules/LandingNav';

const RegistrationContainer =styled("div")`

@media screen and (max-width: 770px) {
  display: block;
  width: 100%;
`

function page() {
  return (
    <RegistrationContainer>
        <LandingNav/>
        <Registration />
    </RegistrationContainer>
  )
}

export default page