import React, { useState } from "react";
import { styled } from "styled-components";
import { IconContext } from "react-icons";
import Text from "../atoms/Text";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import { Button } from "@mui/material";

type CustomerSectionProps = {};


const CusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #1c1b21;
  height: 29vh;
  background-color: #1c1b21;
  width: 33vw;
  color: #b2beb5;
`;

const ContentContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5rem;
`;

const CusSubContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  color: "#fff";
`;

const iconStyling: IconStylingProviderProps = {
  value: {
    size: "25px",
    color: "#fff",
  },
  children: undefined,
};

const CustomerSection: React.FC<CustomerSectionProps> = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };
  return (
    <ContentContainer>
      <IconStylingProvider value={iconStyling.value}>
        <CusContainer>
          <CusSubContainer>
            <Text headingLevel="h1">Customers</Text>

            <Text
              headingLevel="h1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              Per Month
              <IconContext.Provider value={iconStyling.value}>
                <Button>
                  <div>
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{
                        padding: "7px",
                        borderRadius: "10px",
                        color: "#fff",
                        backgroundColor: "#000",
                        border:" 0.5px solid  #87C656",
                        cursor: "pointer"
                      }}
                    
                    >
                      <option value="">Select</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </Button>
              </IconContext.Provider>
            </Text>
          </CusSubContainer>
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <Text headingLevel="h1">All Customers</Text>
              <Text headingLevel="h1">{}</Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text headingLevel="h1">New</Text>
              <Text headingLevel="h1">{}</Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text headingLevel="h1">Constant</Text>
              <Text headingLevel="h1">{}</Text>
            </div>
          </div>
        </CusContainer>
        {}
      </IconStylingProvider>
      <IconStylingProvider value={iconStyling.value}>
        <CusContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Text headingLevel="h1">Customers</Text>

            <Text
              headingLevel="h1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              Per Month
              <Button>
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  style={{
                    padding: "7px",
                    borderRadius: "10px",
                    color: "#87C656",
                    backgroundColor: "#000",
                    cursor: "pointer"

                  }}
                >
                  <option value="">Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </Button>
            </Text>
          </div>
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text headingLevel="h1">All Customers</Text>
              <Text headingLevel="h1">{}</Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text headingLevel="h1">New</Text>
              <Text headingLevel="h1">{}</Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text headingLevel="h1">Constant</Text>
              <Text headingLevel="h1">{}</Text>
            </div>
          </div>
        </CusContainer>
        {}
      </IconStylingProvider>
    </ContentContainer>
  );
}

export default CustomerSection;
