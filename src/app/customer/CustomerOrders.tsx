/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";

import styled from "@emotion/styled";
import Text from "../../../components/atoms/Text";
import { CgDetailsMore } from "react-icons/cg";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../../hooks/MyIcons";
import Button from "../../../components/atoms/Button";
import Modal from "../../../modal/SlideModal";
import Details from "../../../components/molecules/Details";
import { IOrder } from "@/services/Interfaces/Interface";

const CustomerDetails = styled("td")`
  justify-content: center;
  gap: 2rem;
  padding: 29px;
`;

const CustomerMainDetails = styled("tr")`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  color: #000;
  background: #F1F2F3;
  border-radius: 5px;
  box-shadow: 5px 15px 5px 5px #fff;

  th {
    padding: 25px;
    font-size: 15px;
  }

  td {
    padding: 10px;
  }

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const iconStyling: IconStylingProviderProps = {
  value: {
    size: "28px",
    color: "#000",
  },
};

interface Props {
  userOrders: IOrder[];
}

function CustomerOrders({ userOrders }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <table>
      <CustomerMainDetails>
        <th>
          <Text headingLevel={"h1"}>ID</Text>
        </th>
        <th>
          <Text headingLevel={"h1"}>Point From</Text>
        </th>
        <th>
          <Text headingLevel={"h1"}>Point To</Text>
        </th>
        <th>
          <Text headingLevel={"h1"}>Status</Text>
        </th>
        <th>
          <Text headingLevel={"h1"}>Details</Text>
        </th>
      </CustomerMainDetails>
      {userOrders?.map((order) => {
        return (
          <CustomerMainDetails key={order.idNumber}>
            <CustomerDetails>
              <Text headingLevel={"h1"}>{order.idNumber}</Text>
            </CustomerDetails>

            <CustomerDetails>
              <Text headingLevel={"h1"}>{order.pointFrom}</Text>
            </CustomerDetails>

            <CustomerDetails>
              <Text headingLevel={"h1"}>{order.pointTo}</Text>
            </CustomerDetails>

            <CustomerDetails>
              <Text headingLevel={"h1"}>{order.status}...</Text>
            </CustomerDetails>

            <CustomerDetails>
              <Text headingLevel={"h1"}>
                <Button label={""} onClick={openModal} style={{ width: "3vw" }}>
                  <IconStylingProvider value={iconStyling.value}>
                    <CgDetailsMore
                      size={iconStyling.value.size}
                      color={iconStyling.value.color}
                    />
                  </IconStylingProvider>
                </Button>
                <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  // eslint-disable-next-line react/no-children-prop
                  children={
                    <Details
                      name={order?.name || ""}
                      idCard={order?.idNumber || ""}
                      from={order?.pointFrom || ""}
                      to={order?.pointTo || ""}
                      goodName={order?.nameOfGood || ""}
                    />
                  }
                />
              </Text>
            </CustomerDetails>
          </CustomerMainDetails>
        );
      })}
    </table>
  );
}

export default CustomerOrders;
