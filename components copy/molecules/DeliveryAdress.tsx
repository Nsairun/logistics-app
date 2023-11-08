"use client"
import React from "react";
import Text from "../atoms/Text";
import styled from "styled-components";

type DeliveryAdressProps = {
  deliveriesDone: string | number | boolean | React.ReactNode;
  Deliveries: string | number | boolean | React.ReactNode;
};

function DeliveryAdress({
  deliveriesDone,
  Deliveries,
}: DeliveryAdressProps) {
  const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    color: #000;
    border-bottom: 0.5px solid #87C656;
    width: 40vw;
    gap: 1rem;
  `;
  const ContactSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
  `;
  // map thru the various deliveries and how many deliveries done per user
  return (
    <ContactContainer>
        <Text headingLevel="h1" style={{color: "#87C656"}}>Deliveries</Text>
        
      <ContactSubContainer>
        <Text headingLevel="h1" style={{width: "14vw"}}>{Deliveries}</Text>
        <Text headingLevel="h1">{deliveriesDone}</Text>
      </ContactSubContainer>
    </ContactContainer>
  );
}

export default DeliveryAdress;