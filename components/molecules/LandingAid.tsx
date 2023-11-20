import React from 'react';
import Image from "next/image";
import styled from 'styled-components';
import firstimg from '../../public/firstimg.jpeg'
import Button from '../atoms/Button';

const LadingAidContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  height: 20vh;
  border-radius: 5px;
`;

const ImgContainer = styled("div")`
height: 25vh;
width: 22vw;
`;

const AidContainer =styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Holder = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 18vw;
  font-size: 12px;
  background-color: rgba(135, 198, 86, 0.5);

  &:hover {
    font-weight: 600;
    box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
}
`;

function LandingAid() {
  return (
    <LadingAidContainer>
      <ImgContainer>
        <Image
        src={firstimg}
        alt="Slider Image"
        objectFit="cover"
        style={{ height: "100%", width: "100%" }}
      />
      </ImgContainer>
      <AidContainer>
        <Holder>
          <Button label={'Create shipment'} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </Holder>
        <Holder>
          <Button label={'Help and support'} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </Holder>
        <Holder>
          <Button label={'About'} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </Holder>
      </AidContainer>
    </LadingAidContainer>
  )
}

export default LandingAid