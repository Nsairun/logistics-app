import React, { useState } from "react";
import Image from "next/legacy/image";
import styled from "@emotion/styled";
import firstimg from "../../public/card.jpg.png";
import { FiTruck } from "react-icons/fi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GoReport } from "react-icons/go";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import Modal from "../../modal/SlideModal";
import ModalInputfeld from "../atoms/ModalInputfeld";
import PersonnelModal from "../atoms/PersonnelModal";
import { useAppContext } from "../../hooks/AppContext";
import { IUser } from "@/services/Interfaces/Interface";

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

const ResponsiveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #fff;
  background-color: #87C656;
  border-radius: 5px;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 100%;
  }
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
  height: 12vh;
  width: 14vw;
  font-size: 12px;
  background: #fff;

  &:hover {
    font-weight: 600;
    box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
  }
  
  @media screen and (max-width: 770px) {
    width: 80%;
    padding: 15px;
    margin: auto;
`;

type Personnel = {
  name: string;
  role: string;
};

type PersonnelModalProps = {
  personnel: Personnel[];
};

const LandingAid: React.FC<PersonnelModalProps> = ({personnel}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPersModalOpen, setIsPersModalOpen] = useState(false);
  const { currentUser } = useAppContext();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openPersModal = () => {
    setIsPersModalOpen(true);
  };

  const closePersModal = () => {
    setIsPersModalOpen(false);
  };


  const isAdmin = (currentUser: IUser | null | undefined) => {
    return currentUser?.role === "ADMIN";
  };

  const iconStyling: IconStylingProviderProps = {
    value: {
      size: "30px",
      color: "#fff",
    },
  };
  return (
    <LadingAidContainer>
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
            <ResponsiveButton
              onClick={openModal}
            >
              <IconStylingProvider value={iconStyling.value}>
                <FiTruck
                  size={iconStyling.value.size}
                  color={iconStyling.value.color}
                />
              </IconStylingProvider>
              <h1 style={{fontSize: "15px", padding:"5px"}}>Create Order</h1>
            </ResponsiveButton>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              // eslint-disable-next-line react/no-children-prop
              children={<ModalInputfeld />}
            />
          </Holder>
          {isAdmin(currentUser)&&(<Holder>
            <ResponsiveButton
              onClick={openPersModal}
            >
              <IconStylingProvider value={iconStyling.value}>
                <LiaHandsHelpingSolid
                  size={iconStyling.value.size}
                  color={iconStyling.value.color}
                />
              </IconStylingProvider>
              <h1 style={{fontSize: "15px", padding: '5px'}}>For Personnel</h1>
            </ResponsiveButton>
            <Modal isOpen={isPersModalOpen} onClose={closePersModal}>
              <PersonnelModal/>
            </Modal>
          </Holder>)}
          <Holder>
            <ResponsiveButton
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            >
              <IconStylingProvider value={iconStyling.value}>
                <GoReport
                  size={iconStyling.value.size}
                  color={iconStyling.value.color}
                />
              </IconStylingProvider>
              <h1 style={{fontSize: "15px", padding: "5px"}}>About</h1>
            </ResponsiveButton>
          </Holder>
        </AidContainer>
      </AidMain>
      <ImgContainer>
        <Image
          src={firstimg}
          alt="Slider Image"
          objectFit="cover"
          style={{ height: "100%", width: "100%" }}
        />
      </ImgContainer>
    </LadingAidContainer>
  );
}

export default LandingAid;
