"use client"
import React from 'react'
import Login from '../../../components/molecules/Login'
import LandingNav from '../../../components/molecules/LandingNav'
import styled from 'styled-components'
import ResponseNav from '../../../components/atoms/responseNav'

function page() {
const RegistrationContainer =styled("div")`
  gap: 1rem;
  flex-direction: column;
  height: 100%;

@media screen and (max-width: 770px) {
  display: block;
  width: 100%;
}
`;

  return (
    <RegistrationContainer>
      <LandingNav />
      <ResponseNav /> 
      <Login/>
    </RegistrationContainer>
        
  )
}

export default page;