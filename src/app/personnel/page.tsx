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
import PersonnelInfo from "../../../components/molecules/PersonnelInfo";
import Footer from "../../../components/Organisms/Footer";
import { SessionGuard } from "../../../components/Guards/SessionGuard";

const OrderSubContainer = styled("div")`
  display: flex;
  justify-content: center;
`;
const OrderMain = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ClientSection = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 1rem;
  padding: 15px;
  width: 100%;
`;

const ProfileContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #F1F2F3;
  flex-direction: column;
  padding: 20px;
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
  border-radius: 5px;
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

const Page: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    width: "70%",
                    borderRadius: "5px",
                    padding: "5px",
                    color: "grey",
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
                </div>
              </IconStylingProvider>
            <ContactSection>
            <PersonnelInfo
                ID={"3246SDFHJ"}
                DelivArea={"Mfoundi"}
                CarNum={"1542"}
                tel={"4626495+6"}
                mail={"ksaghlwqlkvb"}
                trips={"70"}
                NumofOrders={80}
              />
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
        <Footer />
      </OrderMain>
    </OrderSubContainer>
  );
};

export default SessionGuard (Page);
