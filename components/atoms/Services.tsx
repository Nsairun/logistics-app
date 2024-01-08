import React from "react";
import styled, { keyframes } from "styled-components";
import { FaCar, FaBicycle, FaTruck } from "react-icons/fa"; // Import the required icons fromReact Icons</link>

const bounce = keyframes`
  0% {
    transform: scale(1);
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
`;

const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
  gap: 1rem;
`;

const ServiceDescription = styled.p`
  margin-top: 10px;
  width: 40vw;
  height: 55vh;
  padding: 10px;
  text-align: left;
  line-height: 24px;
  font-size: 15px;
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
`;

const ServiceSection: React.FC = () => {
  const cars = 10;
  const bikes = 20;
  const trucks = 15;

  return (
    <Section>
      <Title>Our Services</Title>
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
            Bike Service Logistics bikes are an efficient and eco-friendly mode
            of transportation for urban deliveries. With their agile
            maneuverability and ability to navigate through congested city
            streets, logistics bikes provide a sustainable solution for
            last-mile deliveries. Equipped with ample cargo space and versatile
            handling, these bikes ensure prompt and reliable delivery services,
            contributing to reduced traffic congestion and carbon emissions in
            urban areas
          </ServiceDescription>
          <Number>{bikes}</Number>
        </ServiceCard>
        <ServiceCard>
          <FaTruck size={100} color="black" />{" "}
          <ServiceDescription>
            Truck Service play a pivotal role in the seamless transfer of
            properties and goods, offering substantial cargo capacity and robust
            capabilities for long-distance transportation. These vehicles serve
            as the backbone of logistical operations, facilitating the efficient
            movement of diverse properties and goods across extensive routes.
            With their spacious cargo compartments and formidable hauling power,
            logistics trucks ensure the secure and timely transfer of
            properties, ranging from large-scale equipment to valuable
            commodities. Their reliability and adaptability make them essential
            for handling complex logistical challenges, contributing to the
            smooth flow of property transfers and logistical operations
          </ServiceDescription>
          <Number>{trucks}</Number>
        </ServiceCard>
      </ServiceContainer>
    </Section>
  );
};

export default ServiceSection;
