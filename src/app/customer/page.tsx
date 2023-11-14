/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/molecules/NavBar";
import TopNavBar from "../../../components/molecules/TopNavBar";
import Text from "../../../components/atoms/Text";
import { CgProfile } from "react-icons/cg";
import { PiPhoneCallThin } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../../hooks/MyIcons";
import Button from "../../../components/atoms/Button";
import AboutClient from "../../../components/molecules/AboutClient";
import Contact from "../../../components/molecules/Contact";
import DeliveryAdress from "../../../components/molecules/DeliveryAdress";
import PaymentDetails from "../../../components/molecules/PaymentDetails";

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
  width: 50%;
  borderRadius: 5px;
  padding: 5px;
  color: grey;

  @media screen and (max-width: 770px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background: red;
`;

const CustomerDetails = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 29px;
`;

  const ContactSection =styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `;

const CustomerMainDetails = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #000;
  background: #F1F2F3;
  border-radius: 5px;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const iconStyling: IconStylingProviderProps = {
  value: {
    size: "28px",
    color: "#000",
  },
};

const bigIcon: IconStylingProviderProps = {
  value: {
    size: "50px",
    color: "#000",
  },
};

const page: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <OrderSubContainer>
      <NavBar />
      <OrderMain>
       <TopNavBar />
         <ClientSection>
          <ProfileContainer>
              <IconStylingProvider value={iconStyling.value}>
                <ClientProfile>
                  <Text headingLevel={"h1"}>
                    <CgProfile
                      size={bigIcon.value.size}
                      color={iconStyling.value.color}
                    />
                  </Text>
                  <Text headingLevel={"h1"}>Name of Client</Text>
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
                          gap: "1rem"
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
                          gap: "1rem"
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
              <Contact tel={653315415} mail={"55"} />
              <AboutClient ID={123} ordersDone={5} ordersCancelled={2} />
              <DeliveryAdress deliveriesDone={80} Deliveries={"bag garri"} />
              <PaymentDetails paymentMethod={"MOMO"} Number={"654124554"} />
            </ContactSection> 
          </ProfileContainer>
          <CustomerMainDetails>
            <CustomerDetails>
              <Text headingLevel={"h1"}>ID</Text>
              <Text headingLevel={"h1"}></Text>
            </CustomerDetails>
            <CustomerDetails>
              <Text headingLevel={"h1"}>Points</Text>
              <Text headingLevel={"h1"}></Text>
            </CustomerDetails>
            <CustomerDetails>
              <Text headingLevel={"h1"}>Status</Text>
              <Text headingLevel={"h1"}></Text>
            </CustomerDetails>
            <CustomerDetails>
              <Text headingLevel={"h1"}>Detail</Text>
              <Text headingLevel={"h1"}></Text>
            </CustomerDetails>
          </CustomerMainDetails>
        </ClientSection> 
      </OrderMain>
    </OrderSubContainer>
  );
};

export default page;
