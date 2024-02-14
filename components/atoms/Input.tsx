"use client"
import { ChangeEvent, FC } from 'react';
import styled from "@emotion/styled";

const InputWrapper = styled.div`
  height: 5vh;
  color: #344054;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #667085;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 770px) {
    width: 100%;
  }
`;

const Error = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #667085;
`;

const FormInput = styled.input`
padding: 5px;
width: 100%;
height: 5vh;
border: transparent;
outline: none;
// margin-bottom: 10px;

@media screen and (max-width: 770px) {
  width: 100%;
}
`;


interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  id: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  id,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <InputWrapper>
      <FormInput
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}

      />
      {error && <Error className="error">Input field cant be empty!</Error>}
      {/* <IconStylingProvider value={iconStyling.value}>
        <FiSearch size={iconStyling.value.size} color={iconStyling.value.color}/>
      </IconStylingProvider> */}
    </InputWrapper>
  );
};

export default Input;