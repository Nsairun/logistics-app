"use client"
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
import styled from "@emotion/styled";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import CustomButton from "../atoms/Button";
import { useAppContext } from "../../hooks/AppContext";
import { IUser } from "@/services/Interfaces/Interface";

const NavContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 100%;
  background-color: #f1f2f3;
  border: 0.5px solid #eeeee;

  @media screen and (max-width: 770px) {
    justify-content: space-between;
    padding: 10px;
  }
`;

const NavSubContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #000;
  height: 40px;

  @media screen and (max-width: 770px) {
    height: 60px; /* Example change for responsiveness */
  }
`;

const NavBarMain = styled("div")`
  background-color: #f1f2f3;
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
  }
`;

function NavBar() {
  const router = useRouter();

  const { currentUser } = useAppContext();

  const isAdmin = (currentUser: IUser | null | undefined) => {
    return currentUser?.role === "ADMIN" || "PERSONNEL";
  };

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  const iconStyling: IconStylingProviderProps = {
    value: {
      size: "25px",
      color: "#000",
    },
  };

  return (
    <NavContainer>
      <NavBarMain>
        <CustomButton label={""} onClick={() => navigateToPage("/dashboard")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              <BsGrid1X2
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
              <Text headingLevel={"h1"}>Overview</Text>
            </IconStylingProvider>
          </NavSubContainer>
        </CustomButton>

        <CustomButton label={""} onClick={() => navigateToPage("/orders")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              <BsBookmarks
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
            </IconStylingProvider>
            <Text headingLevel={"h1"}>Orders</Text>
          </NavSubContainer>
        </CustomButton>

        <CustomButton label={""} onClick={() => navigateToPage("/customer")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              <BsPeople
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
            </IconStylingProvider>
            <Text headingLevel={"h1"}>Clients</Text>
          </NavSubContainer>
        </CustomButton>

       {isAdmin(currentUser) && ( <CustomButton label={""} onClick={() => navigateToPage("/personnel")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              <BsPersonVcard
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
            </IconStylingProvider>
            <Text headingLevel={"h1"}>Personnel</Text>
          </NavSubContainer>
        </CustomButton>
)}
       {isAdmin(currentUser)&&( <CustomButton
          label={""}
          onClick={() => navigateToPage("/transportation")}
        >
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              <CiDeliveryTruck
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
            </IconStylingProvider>
            <Text headingLevel={"h1"}>Shipment</Text>
          </NavSubContainer>
        </CustomButton>)}

        <CustomButton label={""} onClick={() => navigateToPage("/tracking")}>
          <NavSubContainer>
            <IconStylingProvider value={iconStyling.value}>
              <PiWarehouse
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
            </IconStylingProvider>
            <Text headingLevel={"h1"}>Tracking</Text>
          </NavSubContainer>
        </CustomButton>
      </NavBarMain>
    </NavContainer>
  );
}

export default NavBar;
