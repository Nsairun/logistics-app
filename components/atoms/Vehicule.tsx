import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BsTaxiFront } from "react-icons/bs";
import { MdElectricBike } from "react-icons/md";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import styled from "styled-components";


const VehiculeMain = styled("div")`
 display: flex;
 align-items: center;
 justify-content; start;
 flex-direction: column;
`;

const VehiculeContainer = styled("div")`
 display: flex;
 align-items: center;
 justify-content; start;
`;

function Vehicule() {
  const iconStyling: IconStylingProviderProps = {
    value: {
      size: "35px",
      color: "#87C656",
    },
  };
  return (
    <VehiculeMain>
      <VehiculeContainer>
        <IconStylingProvider value={iconStyling.value}>

          <TbTruckDelivery
            size={iconStyling.value.size}
            color={iconStyling.value.color}

          />
        </IconStylingProvider>
      </VehiculeContainer>
    </VehiculeMain>
  );
}

export default Vehicule;
