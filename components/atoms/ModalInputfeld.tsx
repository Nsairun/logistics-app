import React from 'react';
import styled from "@emotion/styled";
import Button from './Button';
import { useRouter } from 'next/navigation';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid gray;
  height: 100%;
  gap: 10px;
`;

const FormInput = styled.input`
  padding: 8px;
  width: 35vw;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormInputFields: React.FC = () => {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <FormContainer>
        <h1>Place your shipment details below</h1>
      <FormInput type="text" placeholder="Name" />
      <FormInput type="text" placeholder="ID Number" />
      <FormInput type="text" placeholder="Form" />
      <FormInput type="text" placeholder="To" />
      <FormInput type="text" placeholder="Quarter" />
      <Button label={''} onClick={() => navigateToPage("/Registrationlogin")} style={{width: "20vw", background: " #87C656"}}>Submit</Button>
    </FormContainer>
  );
};

export default FormInputFields;