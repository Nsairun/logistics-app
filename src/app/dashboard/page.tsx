"use client"
import React, {useMemo, useState, useEffect} from "react";
import NavBar from "../../../components/molecules/NavBar";
import MapSection from "../../../components/molecules/MapSection";
import styled from "@emotion/styled";
import TopNavBar from "../../../components/molecules/TopNavBar";
import CustomerSection from "../../../components/molecules/CustomerSection";
import Chart1 from "../../../components/molecules/Chart1";
import { Data } from "../../../hooks/Data";
import Footer from "../../../components/Organisms/Footer";
import ResponseNav from "../../../components/atoms/responseNav";

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
  background-color: ${(props) => props.color};
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
  gap: 1rem;
  height: 100%;
  width: 100%;
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
        <ResponseNav />
        <FirstSectionHolder>
          <MapSection />
          <CustomerSection />
        </FirstSectionHolder>
        <Chart1 chartData={userData} />
        <Footer />
      </LandingBody>
    </SubContainer>
  );
};

export default LandingPage;
