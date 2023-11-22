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

const OrderMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
`;

const OrderInput = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: start;
  gap: 1rem;
  flex-direction: column;
`;

const OrderSubContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function OrderField() {
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [pointFrom, setPointFrom] = useState("");
  const [pointTo, setPointTo] = useState("");
  const [nameOfGood, setNameOfGood] = useState("");
  const [timeDeparture, setDepartureTime] = useState("");

  const handleSubmit: (e?: React.FormEvent) => void = async (e) => {
    if (e) {
      e.preventDefault(); // Prevent the default form submission behavior
    }
    try {
      const response = await axios.post("/api/order", {
        name,
        idNumber,
        pointFrom,
        pointTo,
        nameOfGood,
        timeDeparture
      });
      // Handle success response
      console.log(response.data);
    } catch (error) {
      // Handle error response
      console.error(error);
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
              <input
                type="text"
                placeholder="Name"
                style={{
                  padding: "12px",
                  width: "35vw",
                  borderRadius: "5px",
                  border: "1px solid #D0B9BB",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </OrderInput>
            <OrderInput>
              <Text headingLevel="h1">
                ID Number
                <FaRegIdCard />
              </Text>
              <input
                type="text"
                placeholder="ID Number"
                style={{
                  padding: "12px",
                  width: "35vw",
                  borderRadius: "5px",
                  border: "1px solid #D0B9BB",
                }}
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
              <input
                type="text"
                placeholder="Point From"
                style={{
                  padding: "12px",
                  width: "35vw",
                  borderRadius: "5px",
                  border: "1px solid #D0B9BB",
                }}
                value={pointFrom}
                onChange={(e) => setPointFrom(e.target.value)}
              />
            </OrderInput>
            <OrderInput>
              <Text headingLevel="h1">
                Point To <GrLocationPin />
              </Text>
              <input
                type="text"
                placeholder="Point To"
                style={{
                  padding: "12px",
                  width: "35vw",
                  borderRadius: "5px",
                  border: "1px solid #D0B9BB",
                }}
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
              <input
                type="text"
                placeholder="Name of Good"
                style={{
                  padding: "12px",
                  width: "35vw",
                  borderRadius: "5px",
                  border: "1px solid #D0B9BB",
                }}
                value={nameOfGood}
                onChange={(e) => setNameOfGood(e.target.value)}
              />
            </OrderInput>
            <OrderInput>
              <Text headingLevel="h1">
                Time Departure <GiSandsOfTime />
              </Text>
              <input
                type="text"
                placeholder="Time Departure"
                style={{
                  padding: "12px",
                  width: "35vw",
                  borderRadius: "5px",
                  border: "1px solid #D0B9BB",
                }}
                value={timeDeparture}
                onChange={(e) => setDepartureTime(e.target.value)}
              />
            </OrderInput>
          </OrderSubContainer>
        </OrderSection>
        <Vehicule />
        <OrderBtn>
          <Button onClick={() => handleSubmit()} label={""}>Submit</Button>
        </OrderBtn>
      </OrderMainContainer>
    </form>
  );
}

export default OrderField;