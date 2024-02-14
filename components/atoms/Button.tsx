" use client "
import React, { CSSProperties, ReactNode } from 'react';
import styled from "@emotion/styled";
import style from 'styled-jsx/style';

const Btn = styled.button`
  padding: 5px;
  height: 5vh
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  transition: transform 0.6s ease-in-out, background-color 0.6s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    background-color: #87C656;
    width: 100%;
    color: #000;
    font-weight: 600;

    @media screen and (max-width: 770px) {
      width: fit-content;
      max-width: 100%;
      border-radius: 5px;

      &:hover {
        transform: translateY(-5px) scale(1.01);
        background-color: #87C656;
        width: fit-content;
        color: #000;
        font-weight: 600;
  }
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
  children?: ReactNode;
  style?: CSSProperties;
 
}

function Button({ label, onClick, children, style }: ButtonProps) {
  return <Btn onClick={onClick} style={style}>{children} {label}</Btn>;
}

export default Button;