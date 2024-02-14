"use client"
import React, { useState } from "react";
import Image from "next/legacy/image";
import styled from "@emotion/styled";
import Button from "../atoms/Button";
import { TfiControlBackward, TfiControlForward } from "react-icons/tfi";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";

const SwapContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const SwapSubContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 30vw;
  padding: 10px;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5); 
  top: 0;
  left: 0;

  @media screen and (max-width: 770px) {
    width: 100%;
  }
`;

const BtnContainer = styled("div")`
  width: 14vw;
  background-color: #87C656;
  borderRadius: 5px;
  textAlign: center;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  @media screen and (max-width: 770px) {
    width: 50%;
    margin: auto;
  }
`;


interface CarouselProps {
  images: string[];
}

const SwapImg: React.FC<CarouselProps> = ({ images }) => {
  const iconStyling: IconStylingProviderProps = {
    value: {
      size: "25px",
      color: "#000",
    },
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SwapContainer>
      <div style={{ width: "4vw", zIndex: "5" }}>
        <button onClick={goToPreviousImage}>
          <IconStylingProvider value={iconStyling.value}>
            <TfiControlBackward
              size={iconStyling.value.size}
              color={iconStyling.value.color}
            />
          </IconStylingProvider>
        </button>
      </div>
      <Image
        src={images[currentImageIndex]}
        alt="Slider Image"
        objectFit="cover"
        width="1000"
        height="500"
        quality={100}
        style={{ width: "100%", height: "15vh", padding: "1px" }}
      />
      <SwapSubContainer>
        <h1 style={{ padding: "5px", fontWeight: "700", color: "#fff" }}>We know customers</h1>
        <p style={{ padding: "65px", width: "100%", color: "#fff" }}>
          We handle packages with care, all over your city with a steady door to
          door service{" "}
        </p>
        <BtnContainer
        >
          <Button
            label={"let us help you"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </BtnContainer>
      </SwapSubContainer>
      <div style={{ width: "4vw"}}>
        <button onClick={goToNextImage}>
          <IconStylingProvider value={iconStyling.value}>
            <TfiControlForward
              size={iconStyling.value.size}
              color={iconStyling.value.color}
            />
          </IconStylingProvider>
        </button>
      </div>
    </SwapContainer>
  );
};

export default SwapImg;
