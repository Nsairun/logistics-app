import React from 'react';
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
}
`;

interface ButtonProps {
  label: string;
  children?: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps): React.JSX.Element {
  return (
    <Btn>{children}</Btn>
  );
}

export default Button;