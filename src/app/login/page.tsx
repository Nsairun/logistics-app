"use client"
import React from "react";
import Login from "../../../components/molecules/Login";
import LandingNav from "../../../components/molecules/LandingNav";
import styled from "@emotion/styled";
import ResponseNav from "../../../components/atoms/responseNav";

function Page() {
  const RegistrationContainer = styled("div")`
    gap: 1rem;
    flex-direction: column;
    height: 100%;

    @media screen and (max-width: 770px) {
      display: block;
      width: 100%;
    }
  `;

  const ResponsNav = styled("div")`
@media screen and (max-width: 770px) {
  display: none;
`;

  return (
    <RegistrationContainer>
      <ResponsNav>
        <LandingNav />
      </ResponsNav>
      <ResponseNav />
      <Login />
    </RegistrationContainer>
  );
}

export default Page;
