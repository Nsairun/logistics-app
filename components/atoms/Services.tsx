"use client"
import React from "react";
import styled, { keyframes } from "styled-components";
import { FaCar, FaBicycle, FaTruck } from "react-icons/fa"; // Import the required icons fromReact Icons</link>

const bounce = keyframes`
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Section = styled.section`
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 45px;
`;

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  padding: 35px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
  width: 45%;
  box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ServiceDescription = styled.p`
  margin-top: 10px;
  width: 40vw;
  height: 55vh;
  padding: 10px;
  text-align: left;
  line-height: 2;
  font-size: 15px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Number = styled.div`
  background-color: rgba(0, 100, 0, 0.7);
  color: white;
  font-size: 2em;
  padding: 10px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bounce} 2s infinite;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 1.5em;
  }
`;

const ServiceSection: React.FC = () => {
  const cars = 10;
  const bikes = 20;
  const trucks = 15;

  return (
    <Section>
      <Title>Our Transport Services</Title>
      <ServiceContainer>
        <ServiceCard>
          <FaCar size={100} color="black" />
          <ServiceDescription>
            Car Service are integral to our transportation fleet, offering the
            versatility and capacity needed for various delivery requirements.
            With ample cargo space and efficient road performance, logistics
            cars serve as a reliable solution for transporting goods across
            diverse distances. Their ability to accommodate a range of cargo
            sizes and navigate through urban and suburban routes makes them
            indispensable for fulfilling diverse delivery needs. Equipped with
            advanced safety features and ample storage, logistics cars ensure
            the secure and timely transportation of goods, supporting seamless
            logistics operations
          </ServiceDescription>
          <Number>{cars}</Number>
        </ServiceCard>
        <ServiceCard>
          <FaBicycle size={100} color="black" />
          <ServiceDescription>
            Truck services are crucial for seamless property and goods transfer,
            offering ample cargo capacity and efficient long-distance
            transportation. They serve as the backbone of logistics, ensuring
            secure and timely transfers of diverse items. With reliable
            operations and versatile capabilities, trucks enable smooth property
            transfers and logistical operations
          </ServiceDescription>
          <Number>{bikes}</Number>
        </ServiceCard>
        <ServiceCard>
          <FaTruck size={100} color="black" />{" "}
          <ServiceDescription>
            Truck services are vital for seamless property and goods transfer,
            providing ample cargo capacity and strong capabilities for
            long-distance transportation. They serve as logistical backbone,
            enabling efficient movement of diverse items across extensive
            routes. With spacious cargo compartments and powerful hauling
            capacity, logistics trucks ensure secure and timely transfers of
            various properties, from large-scale equipment to valuable
            commodities. Their reliability and adaptability are essential for
            handling complex logistical challenges, ensuring smooth property
            transfers and logistical operations.
          </ServiceDescription>
          <Number>{trucks}</Number>
        </ServiceCard>
      </ServiceContainer>
    </Section>
  );
};

export default ServiceSection;
