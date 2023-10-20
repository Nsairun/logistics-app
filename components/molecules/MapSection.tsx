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
  position: relative
  border: 1px solid #1C1B21;
  text-align: left;
  height: 60vh;
  width: 50vw;
  color: #fff;
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
  height: 50vh;
  position: absolute;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
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
          <Button label={""}>
          <Text headingLevel={"p"}>
            <u>Quarter...</u>
          </Text>
          </Button>
          <Button label="">
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
          <Button label={""}>
          <Text headingLevel={"p"}>
            <u>Biyemassi...</u>
          </Text>
          </Button>
          <Button label={""}>
          <Text headingLevel={"p"}>
            <u>Bastos...</u>
          </Text>
          </Button>
          <Button label={""}>
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
