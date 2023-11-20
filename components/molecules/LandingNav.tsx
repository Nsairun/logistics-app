import React from 'react';
import styled from 'styled-components';
import Vehicule from '../atoms/Vehicule';
import Button from '../atoms/Button';

const NavContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 7vh;
    border: 0.5px solid grey;
    background: linear-gradient(to bottom, rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0));
`;

const NavContainerSub = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 25vw;
`;

const Logo = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 700;
    font-size: 20px;
    padding: 20px;
    color: #fff;
    font-family: Helvetica;
    text-shadow: 2px 2px 4px #87C656;
`;

function LandingNav() {
  return (
    <NavContainer>
        <Logo>LOGISTICBAMBE <Vehicule/></Logo>
        <NavContainerSub>
            <Button label={'Registration'} onClick={function (): void {
                  throw new Error('Function not implemented.');
              } } />
              <Button label={'Login'} onClick={function (): void {
                  throw new Error('Function not implemented.');
              } } />
        </NavContainerSub>
    </NavContainer>
  )
}

export default LandingNav