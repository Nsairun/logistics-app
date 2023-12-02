/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/molecules/NavBar";
import TopNavBar from "../../../components/molecules/TopNavBar";
import SelectField from "../../../components/atoms/SelectField";
import Text from "../../../components/atoms/Text";
import Info from "../../../components/atoms/Info";
import Vehicule from "../../../components/atoms/Vehicule";
import OrderField from "../../../components/atoms/OrderField";
import Footer from "../../../components/Organisms/Footer";

const OrderSubContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  top: 0;
  left: 0;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const OrderMain = styled("div")`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

const SelectMain = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;
  margin: 0;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 770px) {
    flex-wrap: wrap;
    width: 100%;
`;

const SelectContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

const InfoDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  gap: 1rem;
`;
const orders = [
  {
    id: 1,
    name: "John Doe",
    startingPoint: "Point A",
    depositPoint: "Point X",
    date: "2023-10-15",
    time: "08:00 AM",
  },
  {
    id: 2,
    name: "Alice Smith",
    startingPoint: "Point B",
    depositPoint: "Point Y",
    date: "2023-10-17",
    time: "10:00 AM",
  },
  {
    id: 3,
    name: "Bob Johnson",
    startingPoint: "Point A",
    depositPoint: "Point Z",
    date: "2023-10-16",
    time: "09:00 AM",
  },
];

const Page = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [sortByDate, setSortByDate] = useState("");
  const [filterStartPoint, setFilterStartPoint] = useState("");
  const [filterDepositPoint, setFilterDepositPoint] = useState("");
  const [filterByTime, setFilterByTime] = useState("");

  // Sorting function to sort orders by date or time
  const sortOrders = (data: any[], sortBy: string): any[] => {
    if (sortBy === "Date") {
      return data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy === "Time") {
      return data.sort((a, b) => {
        const timeA = new Date("1970/01/01" + a.time);
        const timeB = new Date("1970/01/01" + b.time);

        if (timeA < timeB) {
          return -1;
        }
        if (timeA > timeB) {
          return 1;
        }
        return 0;
      });
    }
    return data;
  };

  const handleFilterStartPoint = (value: React.SetStateAction<string>) => {
    setFilterStartPoint(value);
    // Call a filtering function to filter by starting point using "value"
  };

  const handleFilterDepositPoint = (value: React.SetStateAction<string>) => {
    setFilterDepositPoint(value);
    // Call a filtering function to filter by deposit point using "value"
  };

  const handleFilterByTime = (value: React.SetStateAction<string>) => {
    setFilterByTime(value);
    // Call a filtering function to filter by time using "value"
  };

  // useEffect(() => {
  //   // Fetch data or perform any initial sorting/filtering when the component mounts or when the filters change
  // }, [sortByDate, filterStartPoint, filterDepositPoint, filterByTime]);

  function handleSortByDate(value: string): void {}

  return (
    <OrderSubContainer>
      <TopNavBar />
      <OrderMain>
      <NavBar />
        <InfoDiv>
        <h1
          style={{
            fontSize: "30px",
            width: "85%",
            textAlign: "center",
            margin: "0 auto",
            boxShadow: "1px 5px 15px 2px #ccc",
            padding: "3px",
          }}
        >
          PLACE YOUR SHIPMENT ORDER HERE
        </h1>
          <SelectMain>
            
            <SelectContainer>
              <Text
                headingLevel={"h1"}
                style={{ color: "#87C656", fontSize: "15px" }}
              >
                Sort by Date
              </Text>
              <SelectField
                options={["option1", "option2", "option3"]}
                selectedValue={sortByDate}
                onChange={handleSortByDate}
              />
            </SelectContainer>
            <SelectContainer>
              <Text
                headingLevel={"h1"}
                style={{ color: "#87C656", fontSize: "15px" }}
              >
                Filter by Starting Point
              </Text>
              <SelectField
                options={["option1", "option2", "option3"]}
                selectedValue={filterStartPoint}
                onChange={handleFilterStartPoint}
              />
            </SelectContainer>
            <SelectContainer>
              <Text
                headingLevel={"h1"}
                style={{ color: "#87C656", fontSize: "15px" }}
              >
                Filter by Deposit Point
              </Text>
              <SelectField
                options={["option1", "option2", "option3"]}
                selectedValue={filterDepositPoint}
                onChange={handleFilterDepositPoint}
              />
            </SelectContainer>
            <SelectContainer>
              <Text
                headingLevel={"h1"}
                style={{ color: "#87C656", fontSize: "15px" }}
              >
                Filter by Time
              </Text>
              <SelectField
                options={["option1", "option2", "option3"]}
                selectedValue={filterByTime}
                onChange={handleFilterByTime}
              />
            </SelectContainer>
          </SelectMain>
          <OrderField />
          <Info
          text1={""}
          text2={""}
          text3={""}
          text4={""}
          text5={""}
          text6={""}
          txt1={""}
          txt2={""}
          txt3={""}
          txt4={""}
          txt5={""}
          txt6={""}
          txt7={""}
        />
        </InfoDiv>
      </OrderMain>
      <InfoDiv />
      <Footer />
    </OrderSubContainer>
  );
};
export default Page;

