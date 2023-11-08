
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    background-color: #87C656;
    width: 100%;
    color: #000;
    font-weight: 600;
}`
;

interface ButtonProps {
  label: string;
  onClick: () => void;
  children?: ReactNode; 
}

function Button({ label, onClick, children }: ButtonProps) {
  return <Btn onClick={onClick}>{children} {label}</Btn>;
}

export default Button;