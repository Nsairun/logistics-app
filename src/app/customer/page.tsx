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

const OrderSubContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
`;
const OrderMain = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const ProfileContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
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
        <ProfileContainer>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "1rem",
              padding: "10px",
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
                    color: "#fff"
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
        </ProfileContainer>
      </OrderMain>
    </OrderSubContainer>
  );
};

export default page;
