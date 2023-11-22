import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import firstimg from "../../public/black.png";
import secondimg from "../../public/more.png";
import thirdimg from "../../public/truck.png";
import Button from "../atoms/Button";

const SwapContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: end;
  border: 1px solid grey;
  border-radius: 5px;
  height: 65vh;
  width: 70vw;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
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
`;

function SwapImg() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    firstimg,
    secondimg,
    thirdimg,
    // Add more image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <SwapContainer>
      <Image
        src={images[currentImage]}
        alt="Slider Image"
        objectFit="cover"
        style={{ height: "100%", width: "100%" }}
      />
      <SwapSubContainer>
        <h1 style={{padding:"5px", fontWeight: "700"}}>We know customers</h1>
        <p style={{padding:"5px", width: "20vw"}}>We handle packages with care, all over your city with a steady door to door service </p>
        <div style={{width: "10vw", background: "grey", borderRadius: "5px", textAlign: "center"}}>
        <Button
          label={"let us help you"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        </div>
      </SwapSubContainer>
    </SwapContainer>
  );
}

export default SwapImg;
