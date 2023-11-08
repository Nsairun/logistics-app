"use client"
import React from "react";
import Text from "../atoms/Text";
import styled from "styled-components";

type ContactProps = {
  tel: string | number | boolean | React.ReactNode;
  mail: string | number | boolean | React.ReactNode;
};

const Contact: React.FC<ContactProps> = ({ tel, mail }) => {
  const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    border-bottom: 0.5px solid #87C656;
    width: 40vw;
    color: #000;
  `;
  const ContactSubContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 40vw;
  `;
  return (
    <ContactContainer>
      <Text headingLevel={"h1"}style={{color: "#87C656"}}>Contact</Text>
      <ContactSubContainer>
        <Text headingLevel={"h1"}>Phone:</Text>
        <Text headingLevel={"h1"}>{tel}</Text>
      </ContactSubContainer>
      <ContactSubContainer>
        <Text headingLevel={"h1"}>Email:</Text>
        <Text headingLevel={"h1"}>{mail}</Text>
      </ContactSubContainer>
    </ContactContainer>
  );
}

export default Contact;