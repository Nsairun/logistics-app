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
    color: #fff;
  `;
  const ContactSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50vw;
    gap: 4rem;
  `;
  return (
    <ContactContainer>
      Contact
      <ContactSubContainer>
        <Text headingLevel={"h1"} style={{width: "8vw"}}>Phone:</Text>
        <Text headingLevel={"h1"}>{tel}</Text>
      </ContactSubContainer>
      <ContactSubContainer>
        <Text headingLevel={"h1"} style={{width: "13vw"}}>Email:</Text>
        <Text headingLevel={"h1"}>{mail}</Text>
      </ContactSubContainer>
    </ContactContainer>
  );
}

export default Contact;