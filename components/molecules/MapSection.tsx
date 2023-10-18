"use client";
import React from "react";
import Text from "../atoms/Text";
import { styled } from "styled-components";
import image from "../../public/cityscape.jpg";
import Image from "next/image";

const MapContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative
  border: 1px solid #1C1B21;
  text-align: left;
  height: 60vh;
  width: 50vw;
  color: #87C656;
`;

const MapSubSection = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  width: 18vw;
  text-align: left;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    color: #000;
    background-color: #87c656;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const MapContainerHolder = styled("div")`
  height: 40vh;
  position: absolute;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
`;

function MapSection() {
  return (
    <MapContainer>
      <Image
        src={image}
        placeholder="blur"
        style={{ objectFit: "cover" }}
        quality={100}
        sizes="100vw"
        alt="bg_image"
      />
      <MapContainerHolder>
        <MapSubSection>
          <Text
            headingLevel={"h1"}
            style={{ fontWeight: "bold", color: "#fff" }}
          >
            Statistics of services
          </Text>
          <Text headingLevel={"p"}>
            <u>Quarter...</u>
          </Text>
          <Text headingLevel={"p"}>
            <u>Warehouse...</u>
          </Text>
        </MapSubSection>
        <MapSubSection>
          <Text
            headingLevel={"h1"}
            style={{ fontWeight: "bold", color: "#fff" }}
          >
            Top Delivery Areas
          </Text>
          <Text headingLevel={"p"}>
            <u>Biyemassi...</u>
          </Text>
          <Text headingLevel={"p"}>
            <u>Bastos...</u>
          </Text>
          <Text headingLevel={"p"}>
            <u>Efoulan...</u>
          </Text>
        </MapSubSection>
      </MapContainerHolder>
    </MapContainer>
  );
}

export default MapSection;
