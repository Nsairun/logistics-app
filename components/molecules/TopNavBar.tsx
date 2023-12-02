"use client";
import React, { useState, useEffect } from "react";
import Text from "../atoms/Text";
import { FaHome } from "react-icons/fa";
import { IoNotificationsOutline, IoPersonCircle } from "react-icons/io5";
import styled from "styled-components";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import Vehicule from "../atoms/Vehicule";

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
  gap: 1rem;
  background-color: #F1F2F3;
  border: 0.5px solid #eeeee;

  @media screen and (max-width: 770px) {
    display: none;
`;

const SubTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 6vh;
  gap: 1rem;
`;

const Logo = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 700;
  font-size: 18px;
  padding: 20px;
  color: #000;
  font-family: Helvetica;
  text-shadow: 2px 2px 4px grey;
`;

const iconStyling: IconStylingProviderProps = {
  value: {
    size: "28px",
    color: "#000",
  },
};

function TopNavBar() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentDate = currentDateTime.toLocaleDateString();
  const currentTime = currentDateTime.toLocaleTimeString();

  return (
    <TopBar>
      <Logo>
        LOGISTICBAMBE <Vehicule />
      </Logo>
      <Text headingLevel="h1" style={{ color: "#000", paddingLeft: "70px" }}>
        <Text headingLevel={"h1"}>
          {currentDate}
          {currentTime}
        </Text>
      </Text>
      <SubTopBar>
        <div
          style={{
            width: "2.5vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button label={""} onClick={() => navigateToPage("/")}>
            <IconStylingProvider value={iconStyling.value}>
              <FaHome
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
            </IconStylingProvider>
          </Button>
        </div>
        <IoNotificationsOutline
          size={iconStyling.value.size}
          color={iconStyling.value.color}
        />

        <IconStylingProvider value={iconStyling.value}>
          <IoPersonCircle
            size={iconStyling.value.size}
            color={iconStyling.value.color}
          />
        </IconStylingProvider>
        <Text headingLevel="h1">{}</Text>
      </SubTopBar>
    </TopBar>
  );
}

export default TopNavBar;
