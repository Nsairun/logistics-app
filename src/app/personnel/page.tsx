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
import PersonnelInfo from "../../../components/molecules/PersonnelInfo";

const OrderSubContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
`;
const OrderMain = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const ProfileContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const CustomerDetails = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 27px;
`;

const CustomerMainDetails = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #fff;
  background: #1c1b21;
  border-radius: 5px;
`;

const iconStyling: IconStylingProviderProps = {
  value: {
    size: "28px",
    color: "#fff",
  },
  children: undefined,
};

const bigIcon: IconStylingProviderProps = {
  value: {
    size: "60px",
    color: "#fff",
  },
  children: undefined,
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
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "1rem",
            padding: "15px",
          }}
        >
          <ProfileContainer>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <IconStylingProvider value={iconStyling.value}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    borderRadius: "5px",
                    width: "50vw",
                    height: "100%",
                    padding: "10px",
                    color: "grey",
                    background: "#1c1b21",
                  }}
                >
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
                      color: "#fff",
                      fontSize: "14px",
                    }}
                  >
                    <Button label={"Client Name"}>
                      <Text
                        headingLevel={"h1"}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
                        Calls
                        <PiPhoneCallThin
                          size={iconStyling.value.size}
                          color={iconStyling.value.color}
                        />
                      </Text>
                    </Button>
                    <Button label={"Message"}>
                      <Text
                        headingLevel={"h1"}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "center",
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
                </div>
              </IconStylingProvider>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "column",
                padding: "5px",
                width: "50vw",
                height: "82vh",
                background: "#1C1B21",
              }}
            >
              <PersonnelInfo
                ID={"3246SDFHJ"}
                DelivArea={"Mfoundi"}
                CarNum={"1542"}
                tel={"4626495+6"}
                mail={"ksaghlwqlkvb"}
                trips={"70"}
                NumofOrders={80}
              />
            </div>
          </ProfileContainer>
          <CustomerMainDetails>
            <CustomerDetails>
              <Text headingLevel={"h1"}>Date</Text>
              <Text headingLevel={"h1"}>{}</Text>
            </CustomerDetails>
            <CustomerDetails>
              <Text headingLevel={"h1"}>Time</Text>
              <Text headingLevel={"h1"}>{}</Text>
            </CustomerDetails>
            <CustomerDetails>
              <Text headingLevel={"h1"}>Details</Text>
              <Text headingLevel={"h1"}>{}</Text>
            </CustomerDetails>
          </CustomerMainDetails>
        </div>
      </OrderMain>
    </OrderSubContainer>
  );
};

export default page;
