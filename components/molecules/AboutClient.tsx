import React from "react";
import Text from "../atoms/Text";
import styled from "styled-components";

type AboutClientProps = {
  ID: string | number;
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
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 0.5px solid #87C656;
    width: 40vw;
    gap: 1rem;
    color: #fff;
  `;
  const ContactSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50vw;
    align-text: left;
    gap: 4rem;
  `;
  return (
    <ContactContainer>
      About
      <ContactSubContainer>
        <Text headingLevel={"h1"} style={{width: "13vw"}}>Customer ID Num:</Text>
        <Text headingLevel={"h1"}>{ID}</Text>
      </ContactSubContainer>
      <ContactSubContainer>
        <Text headingLevel={"h1"}style={{width: "14vw"}}>orders Done:</Text>
        <Text headingLevel={"h1"}>{ordersDone}</Text>
      </ContactSubContainer>
      <ContactSubContainer>
        <Text headingLevel={"h1"} style={{width: "14vw"}}>orders Cancelled:</Text>
        <Text headingLevel={"h1"}>{ordersCancelled}</Text>
      </ContactSubContainer>
    </ContactContainer>
  );
};

export default AboutClient;