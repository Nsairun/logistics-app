"use client"
import React from "react";
import Text from "../atoms/Text";
import styled from "styled-components";

type PaymentDetailsProps = {
  paymentMethod: string | number | boolean;
  Number: string | number | boolean;
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  paymentMethod,
  Number,
}) => {
  const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50vw;
    color: #000;
    border-bottom: 0.5px solid #87C656;
    width: 40vw;
    gap: 2rem;
  `;
  const ContactSubContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 1.5rem;
    color: #000;
  `;
  // we will have to map this section get all the payment methods of our user
  return (
    <ContactContainer>
      <Text headingLevel={"h1"} style={{color: "#87C656"}}> Payment Details</Text> 
      <ContactSubContainer>
        <Text headingLevel={"h1"}>Payment:</Text>
        <ContactSubContainer>
          <Text headingLevel={"h1"} style={{width: "10vw"}}>{paymentMethod}</Text>
          <Text headingLevel={"h1"}>{Number}</Text>
          <Text headingLevel={"h1"}>Date</Text>
        </ContactSubContainer>
      </ContactSubContainer>
    </ContactContainer>
  );
};

export default PaymentDetails;