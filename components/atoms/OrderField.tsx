import React from "react";
import Button from "./Button";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import styled from "styled-components";
import Text from "./Text";

function OrderField() {
  const OrderBtn = styled("div")`
    background: #87c656;
    padding: 10px;
    width: 16vw;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Orderfields = styled("div")`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: start;
  gap: 1rem;
`;

  const OrderInput = styled("div")`
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: start;
    gap: 1rem;
    flex-direction: column;
  `;

  const OrderSubContainer = styled("div")`
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: start;
    gap: 1rem;
    flex-direction: column;
  `;

  const iconStyling: IconStylingProviderProps = {
    value: {
      size: "25px",
      color: "#000",
    },
  };
  return (
    <div>
      <OrderBtn>
        <Button
          label={"Place Order"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <IconStylingProvider value={iconStyling.value}>
          <IoMdAdd
            size={iconStyling.value.size}
            color={iconStyling.value.color}
          />

          <TbTruckDelivery
            size={iconStyling.value.size}
            color={iconStyling.value.color}
          />
        </IconStylingProvider>
      </OrderBtn>
      <Orderfields>
        <OrderSubContainer>
        <OrderInput>
          <Text headingLevel={"h1"}>Name</Text>
          <input
            type="text"
            placeholder="Name"
            style={{ padding: "12px", width: "35vw", borderRadius: "5px", border: "1px solid #D0B9BB" }}
          />
        </OrderInput>
        <OrderInput>
          <Text headingLevel={"h1"}>IDNumber</Text>
          <input
            type="text"
            placeholder="IDNumber"
            style={{ padding: "12px", width: "35vw", borderRadius: "5px", border: "1px solid #D0B9BB" }}
          />
        </OrderInput>
        <OrderInput>
          <Text headingLevel={"h1"}>Point From</Text>
          <input
            type="text"
            placeholder="From"
            style={{ padding: "12px", width: "35vw", borderRadius: "5px", border: "1px solid #D0B9BB"}}
          />
        </OrderInput>
      </OrderSubContainer>
      <OrderSubContainer>
        <OrderInput>
          <Text headingLevel={"h1"}>Name of Good</Text>
          <input
            type="text"
            placeholder="Name of good"
            style={{ padding: "12px", width: "35vw", borderRadius: "5px", border: "1px solid #D0B9BB" }}
          />
        </OrderInput>
        <OrderInput>
          <Text headingLevel={"h1"}>Departure Time</Text>
          <input
            type="text"
            placeholder="Departure Time"
            style={{ padding: "12px", width: "35vw", borderRadius: "5px", border: "1px solid #D0B9BB" }}
          />
        </OrderInput>
        <OrderInput>
          <Text headingLevel={"h1"}>Point To</Text>
          <input
            type="text"
            placeholder="Point To"
            style={{ padding: "12px", width: "35vw", borderRadius: "5px", border: "1px solid #D0B9BB" }}
          />
        </OrderInput>
      </OrderSubContainer>
      </Orderfields>
    </div>
  );
}

export default OrderField;
