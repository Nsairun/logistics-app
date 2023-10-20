import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";

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
  width: 40vw;
  gap: 1rem;
  color: #fff;
`;
const ContactSubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 40vw;
  
  align-text: left;
  gap: 4rem;
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
        
        About
        <div style={{ borderBottom: "0.5px solid #87C656"}}>
        <ContactSubContainer>
          <Text headingLevel={"h1"}>
            Customer ID Num:
          </Text>
          <Text headingLevel={"h1"}>{ID}</Text>
        </ContactSubContainer>
        <ContactSubContainer>
          <Text headingLevel={"h1"}>
            Delivery Area:
          </Text>
          <Text headingLevel={"h1"}>{DelivArea}</Text>
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
            Contact
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
          Personal Statistics
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
