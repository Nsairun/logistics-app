"use client";
import React from "react";
import Button from "../../components/atoms/Button";
import Text from "../atoms/Text";
import {
  BsGrid1X2,
  BsBookmarks,
  BsPeople,
  BsPersonVcard,
} from "react-icons/bs";
import { CiDeliveryTruck, CiLocationOn } from "react-icons/ci";
import { PiWarehouse } from "react-icons/pi";
import { styled } from "styled-components";
import { IconStylingProvider, IconStylingProviderProps } from "../../hooks/MyIcons";

const NavContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: #0d0d0d;
  border: 0.5px solid ;
`;

const NavSubContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  height: 40px;
`;

const NavBarMain = styled("div")`
  background-color: #1C1B21;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: #fff;
  width: 8vw;
`;

function NavBar() {
  const iconStyling: IconStylingProviderProps = {
    value: {
      size: "25px",
      color: "#fff",
    },
    children: undefined,
  };
  return (
    <NavContainer>
      <NavBarMain>
        <Text
          headingLevel={"h1"}
          style={{
            color: "#87C656",
            fontWeight: "bold",
            padding: "10px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "15px",
            textAlign: "center"
          }}
        >
          LOGISTIC APP
        </Text>
        <Button label={"Overview"}>
          <NavSubContainer>
          <IconStylingProvider value={iconStyling.value}>
            <BsGrid1X2 size={iconStyling.value.size} color={iconStyling.value.color}/>
            <Text headingLevel={"h1"}>Overview</Text>
          </IconStylingProvider>
          </NavSubContainer>
        </Button>

        <Button label={"Orders"}>
          <NavSubContainer>
          <IconStylingProvider value={iconStyling.value}>

            <BsBookmarks size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>

            <Text headingLevel={"h1"}>Orders</Text>
          </NavSubContainer>
        </Button>
        <Button label={"Orders"}>
          <NavSubContainer>
          <IconStylingProvider value={iconStyling.value}>

            <CiDeliveryTruck size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>

            <Text headingLevel={"h1"}>Delivering</Text>
          </NavSubContainer>
        </Button>
        <Button label={"Orders"}>
          <NavSubContainer>
          <IconStylingProvider value={iconStyling.value}>

            <PiWarehouse size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>

            <Text headingLevel={"h1"}>Warehouse</Text>
          </NavSubContainer>
        </Button>
        <Button label={"Orders"}>
          <NavSubContainer>
          <IconStylingProvider value={iconStyling.value}>

            <CiLocationOn size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>

            <Text headingLevel={"h1"}>Tracking</Text>
          </NavSubContainer>
        </Button>
        <Button label={"Orders"}>
          <NavSubContainer>
          <IconStylingProvider value={iconStyling.value}>

            <BsPeople size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>

            <Text headingLevel={"h1"}>Client</Text>
          </NavSubContainer>
        </Button>
        <Button label={"Orders"}>
          <NavSubContainer>
          <IconStylingProvider value={iconStyling.value}>

            <BsPersonVcard size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>

            <Text headingLevel={"h1"}>Personnel</Text>
          </NavSubContainer>
        </Button>
        <Text headingLevel={"h1"} style={{fontSize:"small", padding: "15px"}}>Do You Need Help?</Text>
      </NavBarMain>
    </NavContainer>
  );
}

export default NavBar;
