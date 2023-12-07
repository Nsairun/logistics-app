"use client"
import React from "react";
import Text from "../atoms/Text";
import styled from "styled-components";

type AboutClientProps = {
  ID: string;
  ordersDone: string | number;
  ordersCancelled: string | number;
};

const AboutClient: React.FC<AboutClientProps> = ({
  ID,
  ordersDone,
  ordersCancelled,
}) => {
  const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 0.5px solid #87C656;
    gap: 1rem;
    color: #000;
  `;
  const ContactSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    align-text: center;
  `;
  return (
    <ContactContainer>
      <Text headingLevel={"h1"}style={{color: "#87C656"}}>About</Text>
      <ContactSubContainer>
        <Text headingLevel={"h1"}>Customer ID Num:</Text>
        <Text headingLevel={"h1"}>{ID}</Text>
      </ContactSubContainer>
      <ContactSubContainer>
        <Text headingLevel={"h1"}>orders Done:</Text>
        <Text headingLevel={"h1"}>{ordersDone}</Text>
      </ContactSubContainer>
      <ContactSubContainer>
        <Text headingLevel={"h1"}>orders Cancelled:</Text>
        <Text headingLevel={"h1"}>{ordersCancelled}</Text>
      </ContactSubContainer>
    </ContactContainer>
  );
};

export default AboutClient;