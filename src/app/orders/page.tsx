/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/molecules/NavBar";
import TopNavBar from "../../../components/molecules/TopNavBar";
import SelectField from "../../../components/atoms/SelectField";
import Text from "../../../components/atoms/Text";
import Info from "../../../components/atoms/Info";
import OrderField from "../../../components/atoms/OrderField";

const OrderSubContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const OrderMain = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const SelectMain =styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;
  margin: 0;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 770px) {
    flex-wrap: wrap;
    width: 100%;
`

const SelectContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

const InfoDiv = styled("div")`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1rem;
`
const page: any = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <OrderSubContainer>
      <NavBar />
      <OrderMain>
        <TopNavBar />
        <InfoDiv>
        <SelectMain>
          <SelectContainer>
            <Text
              headingLevel={"h1"}
              style={{ color: "#87C656", fontSize: "15px" }}
            >
              sort by Date
            </Text>
            <SelectField
              options={["option", "option2", "option3"]}
              selectedValue={selectedOption}
              onChange={handleSelectChange}
            />
          </SelectContainer>
          <SelectContainer>
            <Text
              headingLevel={"h1"}
              style={{ color: "#87C656", fontSize: "15px" }}
            >
              filter by starting point
            </Text>

            <SelectField
              options={["option", "option2", "option3"]}
              selectedValue={selectedOption}
              onChange={handleSelectChange}
            />
          </SelectContainer>
          <SelectContainer>
            <Text
              headingLevel={"h1"}
              style={{ color: "#87C656", fontSize: "15px" }}
            >
              filter by deposit point
            </Text>

            <SelectField
              options={["option", "option2", "option3"]}
              selectedValue={selectedOption}
              onChange={handleSelectChange}
            />
          </SelectContainer>
          <SelectContainer>
            <Text
              headingLevel={"h1"}
              style={{ color: "#87C656", fontSize: "15px" }}
            >
              filter by time
            </Text>

            <div
              style={{
                width: "20vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Text
                headingLevel={"h1"}
                style={{ color: "#87C656", fontSize: "15px" }}
              >
                from:
              </Text>
              <SelectField
                options={["option", "option2", "option3"]}
                selectedValue={selectedOption}
                onChange={handleSelectChange}
              />
              <Text
                headingLevel={"h4"}
                style={{ color: "#87C656", fontSize: "15px" }}
              >
                to:
              </Text>

              <SelectField
                options={["option", "option2", "option3"]}
                selectedValue={selectedOption}
                onChange={handleSelectChange}
              />
            </div>
          </SelectContainer>
        </SelectMain>
          <OrderField/>
          <Info
            text1={"ID Number"}
            text2={"Points"}
            text3={"Departure Date"}
            text4={"Recieval Date"}
            text5={"Status"}
            text6={"Details"}
            txt1={"DAGVKJSUH21H"}
            txt2={"Mokolo"}
            txt3={"Mendong"}
            txt4={"12:32"}
            txt5={"13:00"}
            txt6={""}
            txt7=""
          />
          
        </InfoDiv>
      </OrderMain>
    </OrderSubContainer>
  );
};

export default page;
