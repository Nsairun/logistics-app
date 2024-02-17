"use client"
import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";

type TextProps = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  txt1: string;
  txt2: string;
  txt3: string;
  txt4: string;
  txt5: string;
  txt6: string;
  txt7: string;
};

const InfoMainContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #F1F2F3;
  border-left: 5px solid #87C656;
  border-radius: 5px;
  min-width: 63vw;
  padding: 5px;
  gap: 1rem;

  &:hover {
    transform: translateY(-5px) scale(1.01);
  }
  
  & + & {
    margin-top: 1rem;
  }

 @media screen and (max-width: 770px) {
      display: block;
      width: 100%;
      border: none;
`;

const InfoContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 6rem;
  border-radius: 5px;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
    border: none
`;

const InfoDiv = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 770px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    width: 100%;
    border: 1px solid gray;
    border-left: 3px solid #87C656;
`;

const InfoSubDiv = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;

  @media screen and (max-width: 770px) {
    display: block;
    gap: 1rem;

    gap: 1rem;
    width: 100%;
    border: none
`;

const Info: React.FC<TextProps> = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  txt1,
  txt2,
  txt3,
  txt4,
  txt5,
  txt6,
  txt7,
}) => {
  return (
    <InfoMainContainer>
      <InfoSubDiv style={{ color: "#000" }}>
        <InfoContainer>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text1}</Text>
            <Text headingLevel={"h1"} style={{ color: "#000", fontSize: "12px" }}>{txt1}</Text>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text2}</Text>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space evenly",
                gap: "1rem",
              }}
            >
              <Text headingLevel={"h1"} style={{ color: "#000", fontSize: "12px" }}>{txt2}</Text>-
              <Text headingLevel={"h1"} style={{ color: "#000", fontSize: "12px" }}>{txt3}</Text>
            </div>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text3}</Text>
            <Text headingLevel={"h1"} style={{ color: "#000", fontSize: "12px" }}>{txt4}</Text>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text4}</Text>
            <Text headingLevel={"h1"} style={{ color: "#000", fontSize: "12px" }}>{txt5}</Text>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text5}</Text>
            <Text headingLevel={"h1"} style={{ color: "#000", fontSize: "12px" }}>{txt7}</Text>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text6}</Text>
            <Text headingLevel={"h1"} style={{ color: "#000", fontSize: "12px" }}>{txt6}</Text>
          </InfoDiv>
        </InfoContainer>
      </InfoSubDiv>
    </InfoMainContainer>
  );
};

export default Info;
