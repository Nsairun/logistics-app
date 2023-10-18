"use client";
import React from "react";
import NavBar from "../../components/molecules/NavBar";
import MapSection from "../../components/molecules/MapSection";
import styled from "styled-components";
import TopNavBar from "../../components/molecules/TopNavBar";
import CustomerSection from "../../components/molecules/CustomerSection";
import Chart1 from "../../components/molecules/Chart1";

const SubContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const LandingBody = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

function LandingPage() {
  return (
    <SubContainer>
      <NavBar />
      <LandingBody>
        <TopNavBar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            padding: "20px",
          }}
        >
          <MapSection />
          <CustomerSection />
        </div>
        <Chart1 />
      </LandingBody>
    </SubContainer>
  );
}

export default LandingPage;
