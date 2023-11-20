import React from "react";
import { useRouter } from "next/navigation"; 
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
import CustomButton from '../atoms/Button';

const NavContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 100%;
  background-color: #F1F2F3;
  border: 0.5px solid #eeeee;
`;

const NavSubContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #000;
  height: 40px;
`;

const NavBarMain = styled("div")`
  background-color: #F1F2F3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-size: 14px;
  gap: 1rem;
  color: grey;
  width: 8vw;

  @media screen and (max-width: 770px) {
    display: none;
`;

function NavBar() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  const iconStyling: IconStylingProviderProps = {
    value: {
      size: "25px",
      color: "#000",
    }
  };

  return (
    <NavContainer>
      <NavBarMain>
        <Text
          headingLevel={"h1"}
          style={{
            color: "#87C656",
            fontWeight: "bolder",
            padding: "10px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "15px",
            textAlign: "center",
            textShadow: "2px 2px 4px grey",
          }}
        >
          LOGISTIC APP
        </Text>
        <CustomButton label={""}  onClick={() => navigateToPage("/dashboard")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              
              <BsGrid1X2 size={iconStyling.value.size} color={iconStyling.value.color}/>
              <Text headingLevel={"h1"}>Overview</Text>
            </IconStylingProvider>
          </NavSubContainer>
        </CustomButton>

        <CustomButton label={""} onClick={() => navigateToPage("/orders")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              
              <BsBookmarks size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>
            <Text headingLevel={"h1"}>Orders</Text>
          </NavSubContainer>
        </CustomButton>

        <CustomButton label={""} onClick={() => navigateToPage("/customer")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              
              <BsPeople size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>
            <Text headingLevel={"h1"}>Clients</Text>
          </NavSubContainer>
        </CustomButton>

        <CustomButton label={""} onClick={() => navigateToPage("/personnel")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              
              <BsPersonVcard size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>
            <Text headingLevel={"h1"}>Personnel</Text>
          </NavSubContainer>
        </CustomButton>
        
        <CustomButton label={""} onClick={() => navigateToPage("/transportation")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              
              <CiDeliveryTruck size={iconStyling.value.size} color={iconStyling.value.color}/>
            </IconStylingProvider>
            <Text headingLevel={"h1"}>Delivering</Text>
          </NavSubContainer>
        </CustomButton>
      </NavBarMain>
    </NavContainer>
  );
}

export default NavBar;