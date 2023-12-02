import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import firstimg from "../../public/card.jpg.png";
import Button from "../atoms/Button";
import { FiTruck } from "react-icons/fi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GoReport } from "react-icons/go";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import Modal from "../../modal/SlideModal";
import ModalInputfeld from "../atoms/ModalInputfeld";

const LadingAidContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 80vw;
  height: 35vh;
  border-radius: 5px;

  @media screen and (max-width: 770px) {
    width: 80%;
    height: 100%;
    flex-direction: column;
    text-align: center;
    margin: auto;
`;

const AidMain = styled("div")`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  gap: 1rem;

  @media screen and (max-width: 770px) {
    width: 100%;
    display: block;

`;

const ImgContainer = styled("div")`
  height: 35vh;
  width: 22vw;

  @media screen and (max-width: 770px) {
    width: 100%;

`;

const AidContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-evenly;

  @media screen and (max-width: 770px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
`;

const Holder = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  width: 17vw;
  font-size: 12px;
  background-color: rgba(135, 198, 86, 0.5);

  &:hover {
    font-weight: 600;
    box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
  }
  
  @media screen and (max-width: 770px) {
    width: 60%;
    margin: auto;
`;

function LandingAid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const iconStyling: IconStylingProviderProps = {
    value: {
      size: "30px",
      color: "#000",
    },
  };
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
      <AidMain>
        <h1 style={{ color: "#000", fontSize: "20px", fontWeight: "700" }}>
          Reliable, Powerful and Easy services
        </h1>
        <p style={{ color: "#000", width: "100%", padding: "10px" }}>
          We make it easier than ever to transport, get quotes, schedule
          pickups, find locations, track shipments and more!
        </p>
        <AidContainer>
          <Holder>
            <IconStylingProvider value={iconStyling.value}>
              <FiTruck
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
            </IconStylingProvider>
            <div
              style={{
                width: "fitContent",
                background: "#87c656",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <Button label={"Create order"} onClick={openModal} />
              <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                // eslint-disable-next-line react/no-children-prop
                children={<ModalInputfeld />}
              />
            </div>
          </Holder>
          <Holder>
            <IconStylingProvider value={iconStyling.value}>
              <LiaHandsHelpingSolid
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
            </IconStylingProvider>
            <div
              style={{
                width: "fitContent",
                background: "#87c656",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <Button
                label={"Help and support"}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </Holder>
          <Holder>
            <IconStylingProvider value={iconStyling.value}>
              <GoReport
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
            </IconStylingProvider>
            <div
              style={{
                width: "10vw",
                background: "#87c656",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <Button
                label={"About"}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </Holder>
        </AidContainer>
      </AidMain>
    </LadingAidContainer>
  );
}

export default LandingAid;
