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
    color: #fff;
    border-bottom: 0.5px solid #87C656;
    width: 40vw;
    gap: 1rem;
  `;
  const ContactSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50vw;
    gap: 4rem;
  `;
  // map thru the various deliveries and how many deliveries done per user
  return (
    <ContactContainer>
        Deliveries
      <ContactSubContainer>
        <Text headingLevel="h1" style={{width: "14vw"}}>{Deliveries}</Text>
        <Text headingLevel="h1">{deliveriesDone}</Text>
      </ContactSubContainer>
    </ContactContainer>
  );
}

export default DeliveryAdress;