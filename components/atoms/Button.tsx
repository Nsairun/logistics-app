
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #87C656;
  transition: background-color 0.8s;

  &:hover {
    box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
    background-color: #87C656;
    width: 40%;
    color: #000;
    font-weight: 600;
}
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
  children?: ReactNode; 
}

function Button({ label, onClick, children }: ButtonProps) {
  return <Btn onClick={onClick}>{children} {label}</Btn>;
}

export default Button;