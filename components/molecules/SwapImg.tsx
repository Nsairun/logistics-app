import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
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
  height: 70vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 100, 0, 0.2), rgba(0, 100, 0, 0));
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
  height: 100%;
  position: absolute;
  background: linear-gradient(
    to bottom,
    rgba(224, 224, 224, 0.8),
    rgba(255, 255, 255, 0.8),
    rgba(224, 224, 224, 0.8)
  );
  top: 0;
  left: 0;

  @media screen and (max-width: 770px) {
    width: 100%;
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
        width={600}
        height={10}
        style={{ width: "100%", height: "65vh", padding: "1px" }}
      />
      <SwapSubContainer>
        <h1 style={{ padding: "5px", fontWeight: "700" }}>We know customers</h1>
        <p style={{ padding: "35px", width: "100%" }}>
          We handle packages with care, all over your city with a steady door to
          door service{" "}
        </p>
        <div
          style={{
            width: "10vw",
            backgroundColor: "rgba(135, 198, 86, 0.5)",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"let us help you"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
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
