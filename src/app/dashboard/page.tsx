"use client"
import React, {useState} from "react";
import NavBar from "../../../components/molecules/NavBar";
import MapSection from "../../../components/molecules/MapSection";
import styled from "styled-components";
import TopNavBar from "../../../components/molecules/TopNavBar";
import CustomerSection from "../../../components/molecules/CustomerSection";
import Chart1 from "../../../components/molecules/Chart1";
import { Data } from "../../../hooks/Data";

interface UserData {
  labels: any[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

const SubContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 770px) {
    display: block;
    max-width: 100%;
`;

const FirstSectionHolder = styled("div")`
display: flex;
alignItems: center;
justifyContent: space-between;
bacground: blue;
gap: 2rem;
padding: 10px;

@media screen and (max-width: 770px) {
  display: block;
`;

const LandingBody = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  
  // @media screen and (max-width: 770px) {
  //   display: block;
  //   background: blue;
  //   max-width: 100%;
`;

const LandingPage: React.FC = () => {
  console.log("Data:", Data);

  const [userData, setUserData] = useState<UserData>({
    labels: Data?.map((data) => data.month),
    datasets: [
      {
        label: "expedition",
        data: Data?.map((data) => data.expeditions),
        backgroundColor: ["#588157", "#283618"],
      },
    ],
  });

  return (
    <SubContainer>
      <NavBar />
      <LandingBody>
        <TopNavBar />
        <FirstSectionHolder>
          <MapSection />
          <CustomerSection />
        </FirstSectionHolder>
        <Chart1 chartData={userData} />
      </LandingBody>
    </SubContainer>
  );
};

export default LandingPage;

