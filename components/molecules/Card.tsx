
import React from "react";
import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/legacy/image";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 770px) {
    width: 100%;
    height: 100%;
    gap: 1rem;
    flex-direction: column;
`;

const CardOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  width: 25vw;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 40vh;
  box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
`;

interface CardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  type: string;
}

function Card({ imageSrc, title, description }: CardProps) {
  
  return (
    <CardContainer>
      <CardOne>
        <Image
          src={imageSrc}
          alt="Slider Image"
          objectFit="cover"
          width={"450"}
          height={"400"}
          quality={100}
          style={{
            height: "100%",
            width: "50vw",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        />
        <CardInfo>
          <h1
            style={{
              fontWeight: "700",
              fontSize: "15px",
              padding: "15px",
              borderBottom: "1px solid #87C656",
            }}
          >
            {title}
          </h1>
          <p style={{ padding: "12px", fontSize: "15px", textAlign: "center" }}>{description}</p>
        </CardInfo>
      </CardOne>
    </CardContainer>
  );
}

export default Card;
