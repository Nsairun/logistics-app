"use client";
import React from "react";
import Text from "../atoms/Text";
import { styled } from "styled-components";
import image from "../../public/cityscape.jpg";
import Image from "next/image";
import Button from "../atoms/Button";

const MapContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: left;
  width: 50vw;
  color: #fff;

  @media screen and (max-width: 770px) {
      display: flex;
      flex-align: center;
      justify-content: center;
      flex-direction: row;
      width: 100%;
      background: green;
`;

const MapSubSection = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  width: 18vw;
  text-align: left;
`;

const MapContainerHolder = styled("div")`
  height: 30vh;
  position: absolute;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;

  @media screen and (max-width: 470px) {
    display: flex;
    flex-align: center;
    justify-content: space-between;
    flex-direction: row;
    width: 70%;
`;

function MapSection() {
  return (
    <MapContainer>
      <Image
        src={image}
        placeholder="blur"
        style={{
          objectFit: "cover",
          backgroundImage:
            "linear-gradient(to bottom, #fff, #000, #eee, red, green)",
          height: "72vh",
          boxShadow: "3px 5px 15px 2px #ccc",
        }}
        quality={100}
        sizes="92vw"
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
          <Button
            label={""}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <Text headingLevel={"p"}>
              <u>Quarter...</u>
            </Text>
          </Button>
          <Button
            label=""
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <Text headingLevel={"p"}>
              <u>Warehouse...</u>
            </Text>
          </Button>
        </MapSubSection>
        <MapSubSection>
          <Text
            headingLevel={"h1"}
            style={{ fontWeight: "bold", color: "#fff" }}
          >
            Top Delivery Areas
          </Text>
          <Button
            label={""}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <Text headingLevel={"p"}>
              <u>Biyemassi...</u>
            </Text>
          </Button>
          <Button
            label={""}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <Text headingLevel={"p"}>
              <u>Bastos...</u>
            </Text>
          </Button>
          <Button
            label={""}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <Text headingLevel={"p"}>
              <u>Efoulan...</u>
            </Text>
          </Button>
        </MapSubSection>
      </MapContainerHolder>
    </MapContainer>
  );
}

export default MapSection;
