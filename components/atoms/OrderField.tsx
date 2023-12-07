import React, { useState } from "react";
import Button from "./Button";
import { IoMdPerson } from "react-icons/io";
import { FaRegIdCard } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { GiSandsOfTime } from "react-icons/gi";
import { GoPackage } from "react-icons/go";
import styled from "styled-components";
import Text from "./Text";
import Vehicule from "./Vehicule";
import axios from "axios";
import { API_URL } from "@/services/contants";
import { useAppContext } from "../../hooks/AppContext";

const OrderMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const OrderBtn = styled.div`
  background: #87c656;
  padding: 5px;
  width: 12vw;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrderSection = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 770px) {
    width: 100%;
    display: block;
  }
`;

const OrderInput = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;

  @media screen and (max-width: 770px) {
    width: 100%;
    display: block;
  }
`;

const OrderSubContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 770px) {
    width: 100%;
    display: block;
  }
`;

const FormInput = styled.input`
  padding: 8px;
  width: 30vw;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media screen and (max-width: 770px) {
    width: 100%;
    padding: 12px;
  }
`;

function OrderField() {
  const {currentUser} = useAppContext()

  const [name, setName] = useState(currentUser?.fullname || "");
  const [idNumber, setIdNumber] = useState("");
  const [pointFrom, setPointFrom] = useState("");
  const [pointTo, setPointTo] = useState("");
  const [nameOfGood, setNameOfGood] = useState("");
  const [timeDeparture, setDepartureTime] = useState("");
  const [error, setError] = useState("")

  const handleSubmit: (e?: React.FormEvent) => void = async (e) => {
    if (e) {
      e.preventDefault(); // Prevent the default form submission behavior
    }
    try {
      const new_order = {
        userId: currentUser?._id,
        name,
        idNumber,
        pointFrom,
        pointTo,
        nameOfGood,
        timeDeparture,
      }

      console.log({ new_order})

      const response = await axios.post(`${API_URL}/api/ordersRoute/order`, new_order);
      // Handle success response
      console.log("data", response.data);
      setName("");
      setIdNumber("");
      setPointFrom("");
      setPointTo("");
      setNameOfGood("");
      setDepartureTime("");
    } catch (error: any) {
      // Handle error response
      console.error(error);
      if (error.response && error.response.status === 404) {
        setError("Resource not found. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <OrderMainContainer>
        <OrderSection>
          <OrderSubContainer>
            <OrderInput>
              <Text headingLevel="h1">
                Name <IoMdPerson />
              </Text>
              <FormInput
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </OrderInput>
            <OrderInput>
              <Text headingLevel="h1">
                ID Number
                <FaRegIdCard />
              </Text>
              <FormInput
                type="text"
                placeholder="ID Number"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </OrderInput>
          </OrderSubContainer>
          <OrderSubContainer>
            <OrderInput>
              <Text headingLevel="h1">
                Point From <GrLocationPin />
              </Text>
              <FormInput
                type="text"
                placeholder="Point From"
                value={pointFrom}
                onChange={(e) => setPointFrom(e.target.value)}
              />
            </OrderInput>
            <OrderInput>
              <Text headingLevel="h1">
                Point To <GrLocationPin />
              </Text>
              <FormInput
                type="text"
                placeholder="Point To"
                value={pointTo}
                onChange={(e) => setPointTo(e.target.value)}
              />
            </OrderInput>
          </OrderSubContainer>
          <OrderSubContainer>
            <OrderInput>
              <Text headingLevel="h1">
                Name of Good <GoPackage />
              </Text>
              <FormInput
                type="text"
                placeholder="Name of Good"
                value={nameOfGood}
                onChange={(e) => setNameOfGood(e.target.value)}
              />
            </OrderInput>
            <OrderInput>
              <Text headingLevel="h1">
                Time Departure <GiSandsOfTime />
              </Text>
              <FormInput
                type="text"
                placeholder="Time Departure"
                value={timeDeparture}
                onChange={(e) => setDepartureTime(e.target.value)}
              />
            </OrderInput>
          </OrderSubContainer>
        </OrderSection>
        <OrderBtn>
          <Button onClick={() => handleSubmit()} label={""}>
            Submit
          </Button>
        </OrderBtn>
      </OrderMainContainer>
    </form>
  );
}

export default OrderField;