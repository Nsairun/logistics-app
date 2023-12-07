"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import { IconContext } from "react-icons";
import Text from "../atoms/Text";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import { Button } from "@mui/material";
import PieChart from "./PieChart";

type CustomerSectionProps = {};

const CusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #eeeee;
  height: 72vh;
  border-radius: 10px;
  background-color: #F1F2F3;
  width: 33vw;
  color: #000;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const ContentContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5rem;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const CusSubContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  color: "#fff";
`;

const Pie = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 35vh;
  width: 100%;
`;

const iconStyling: IconStylingProviderProps = {
  value: {
    size: "25px",
    color: "#fff",
  },
};

const CustomerSection: React.FC<CustomerSectionProps> = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };
  return (
    <ContentContainer>
      <IconStylingProvider value={iconStyling.value}>
        <CusContainer>
          <Pie>
            <PieChart />
          </Pie>
          <CusSubContainer>
            <Text headingLevel="h1">Customers</Text>
            <Text
              headingLevel="h1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              Per Month
              <IconContext.Provider value={iconStyling.value}>
                <Button>
                  <div style={{ borderRadius: "5px"}}>
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{
                        padding: "7px",
                        borderRadius: "10px",
                        color: "#87C656",
                        backgroundColor: "#000",
                        cursor: "pointer",
                      }}
                    >
                      <option value="">Select</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </Button>
              </IconContext.Provider>
            </Text>
          </CusSubContainer>
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <Text headingLevel="h1">All Customers</Text>
              <Text headingLevel="h1">{}</Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Text headingLevel="h1">New</Text>
              <Text headingLevel="h1">{}</Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Text headingLevel="h1">Constant</Text>
              <Text headingLevel="h1">{}</Text>
            </div>
          </div>
        </CusContainer>
        {}
      </IconStylingProvider>
    </ContentContainer>
  );
};

export default CustomerSection;
