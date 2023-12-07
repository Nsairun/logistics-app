
import React from 'react';
import styled from 'styled-components';

interface ShippingFormProps {
  name: string;
  idCard: string;
  from: string;
  to: string;
  goodName: string;
}

const ShippingFormComponent: React.FC<ShippingFormProps> = ({ name, idCard, from, to, goodName }) => {
  const FormContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 35vw;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
  `;

  const Title = styled.h2`
    color: #333;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 10px;
  `;

  const InfoItem = styled.p`
    margin-bottom: 5px;
  `;


  return (
    <FormContainer>
      <Title>Shipping Information</Title>
      <InfoItem>Name: {name}</InfoItem>
      <InfoItem>ID Card: {idCard}</InfoItem>
      <InfoItem>From: {from}</InfoItem>
      <InfoItem>To: {to}</InfoItem>
      <InfoItem>Name of Good: {goodName}</InfoItem>
    </FormContainer>

  );
};

export default ShippingFormComponent;