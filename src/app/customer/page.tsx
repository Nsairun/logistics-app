/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/molecules/NavBar";
import TopNavBar from "../../../components/molecules/TopNavBar";
import Text from "../../../components/atoms/Text";
import { CgProfile } from "react-icons/cg";
import { PiPhoneCallThin } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import axios from "axios";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../../hooks/MyIcons";
import Button from "../../../components/atoms/Button";
import AboutClient from "../../../components/molecules/AboutClient";
import Contact from "../../../components/molecules/Contact";
import DeliveryAdress from "../../../components/molecules/DeliveryAdress";
import PaymentDetails from "../../../components/molecules/PaymentDetails";
import Modal from "../../../modal/SlideModal";
import Details from "../../../components/molecules/Details";
import Footer from "../../../components/Organisms/Footer";
import { getUserOrders } from "@/services/api";
import { IOrder } from "@/services/Interfaces/Interface";
import { useAppContext } from "../../../hooks/AppContext";
import { SessionGuard } from "../../../components/Guards/SessionGuard";
import CustomerOrders from "./CustomerOrders";

const OrderSubContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;
const OrderMain = styled("div")`
  display: block;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const ClientSection = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 1rem;
  padding: 15px;
  width: 100%;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;

const ProfileContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #F1F2F3;
  flex-direction: column;
  padding: 20px;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;

const ClientProfile = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 2px 5px 5px 2px solid gray;
  gap: 1rem;
  width: 80%;
  borderRadius: 5px;
  padding: 5px;
  color: grey;

  @media screen and (max-width: 770px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background: gray;
`;


const ContactSection = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;


const iconStyling: IconStylingProviderProps = {
  value: {
    size: "28px",
    color: "#000",
  },
};


const page: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userOrders, setUserOrders] = useState<IOrder[]>([]);
  const { currentUser } = useAppContext();




  useEffect(() => {
    const getOne = async (userId: any) => {
      try {
        const response = await getUserOrders(userId);
        console.log("User data:", response.data);
        setUserOrders(response.data);
      } catch (error) {
        console.log("Error while fetching user data:", error);
      }
    };
    console.clear();
    console.log({currentUser})
    const userId = currentUser?._id;
    getOne(userId);
  }, [currentUser]);

  return (
    <OrderSubContainer>
      <NavBar />
      <OrderMain>
        <TopNavBar />
        <ClientSection>
          <ProfileContainer>
            <IconStylingProvider value={iconStyling.value}>
              <ClientProfile>
                <Text headingLevel={"h1"}>{currentUser?.fullname || ""}</Text>
                <div
                  style={{
                    width: "8vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "#000",
                    fontSize: "14px",
                  }}
                >
                  <Button
                    label={""}
                    onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  >
                    <Text
                      headingLevel={"h1"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                      }}
                    >
                      Calls
                      <PiPhoneCallThin
                        size={iconStyling.value.size}
                        color={iconStyling.value.color}
                      />
                    </Text>
                  </Button>
                  <Button
                    label={""}
                    onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  >
                    <Text
                      headingLevel={"h1"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                      }}
                    >
                      Message
                      <RiMessage2Line
                        size={iconStyling.value.size}
                        color={iconStyling.value.color}
                      />
                    </Text>
                  </Button>
                </div>
              </ClientProfile>
            </IconStylingProvider>
            <ContactSection>
              <Contact tel={653315415} mail={currentUser?.email} />
              <AboutClient
                ID={"currentUser?.idNumber" || ""}
                ordersDone={userOrders.length}
                ordersCancelled={2}
              />
              <DeliveryAdress
                deliveriesDone={80}
                Deliveries={userOrders[0]?.nameOfGood}
              />
              <PaymentDetails paymentMethod={"MOMO"} Number={"654124554"} />
            </ContactSection>
          </ProfileContainer>
          
          <CustomerOrders userOrders={userOrders} />
        </ClientSection>
        <Footer />
      </OrderMain>
    </OrderSubContainer>
  );
};

export default SessionGuard(page);
