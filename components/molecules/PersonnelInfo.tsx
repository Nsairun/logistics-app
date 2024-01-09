"use client"
import React from "react";
import styled from "styled-components";
import Text from '../atoms/Text';

interface PersonalInfoProp {
  ID: string
  DelivArea: string
  CarNum: string
  tel: string
  mail: string
  trips: string
  NumofOrders: number
}

const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  background: #F1F2F3;
  width: 40vw;
  gap: 1rem;
  color: #000;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ContactSubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 40vw;
  padding: 10px;
  align-text: left;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const PersonnelInfo: React.FC<PersonalInfoProp> = ({
  ID,
  DelivArea,
  CarNum,
  tel,
  mail,
  trips,
  NumofOrders,
}) =>{
  return (
    <ContactContainer>
      <ContactContainer>
        <Text headingLevel={"h1"} style={{color: "#87C656"}}>About</Text>
        
        <div style={{ borderBottom: "0.5px solid #87C656"}}>
        <ContactSubContainer>
          <Text headingLevel={"h1"}>
            Customer ID Num:
          </Text>
          <Text headingLevel={"h1"}>{ID}</Text>
        </ContactSubContainer>
        <ContactSubContainer>
          <Text headingLevel={"h1"}>
            CarNum :
          </Text>
          <Text headingLevel={"h1"}>{CarNum}</Text>
        </ContactSubContainer>
        </div>
        <div style={{ borderBottom: "0.5px solid #87C656" }}>
          <ContactContainer>
          <Text headingLevel={"h1"} style={{color: "#87C656"}}>Contact</Text>
            <ContactSubContainer>
              <Text headingLevel={"h1"} style={{ width: "12vw" }}>
                Phone:
              </Text>
              <Text headingLevel={"h1"}>{tel}</Text>
            </ContactSubContainer>
            <ContactSubContainer>
              <Text headingLevel={"h1"} style={{ width: "11vw" }}>
                Email:
              </Text>
              <Text headingLevel={"h1"}>{mail}</Text>
            </ContactSubContainer>
          </ContactContainer>
        </div>
        <div style={{ borderBottom: "0.5px solid #87C656" }}>
        <Text headingLevel={"h1"} style={{color: "#87C656"}}>Personal Statistics</Text>
          <ContactSubContainer>
            <Text headingLevel={"h1"} style={{ width: "18vw" }}>
              Trips made:
            </Text>
            <Text headingLevel={"h1"}>{trips}</Text>
          </ContactSubContainer>
          <ContactSubContainer>
            <Text headingLevel={"h1"} style={{ width: "18vw" }}>
              Number of orders delivered:
            </Text>
            <Text headingLevel={"h1"}>{NumofOrders}</Text>
          </ContactSubContainer>
        </div>
      </ContactContainer>
    </ContactContainer>
  );
}

export default PersonnelInfo;
