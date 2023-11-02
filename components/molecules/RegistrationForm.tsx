"use client";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export const RegContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70vw;
  padding: 15px;
  background: #F1F2F3;
  box-shadow: 2px 4px 30px 1px grey;
  gap: 1rem;
`;

const RegMainContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

const RegSection = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: #000;
`;

const RegSectionRoles = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;

const Title = styled("div")`
  display: grid;
  grid-template-columns: 90px 250px 150px 250px;
  column-gap: 3px;
  row-gap: 3px;
  background: #eeeee;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;
`;
const Account = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
function Registration() {
  return (
    <RegMainContainer>
    <RegContainer>
      <RegSection>
        <Account>
          <Text headingLevel={"h1"} style={{ color: "#000" }}>
            Hey! Welcome to{" "}
          </Text>
          <Text
            headingLevel={"h1"}
            style={{ color: "#87C656", fontWeight: "bolder", borderBottom: "4px solid #87C656" }}
          >
            LogiscticBambe
          </Text>
        </Account>
        <RegSectionRoles>
          <Title>
            <Text headingLevel={"h1"}>First Name:</Text>

            <Input
              type={"text"}
              label={""}
              value={""}
              name={""}
              placeholder={""}
              error={false}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Text headingLevel={"h1"}>Last Name:</Text>

            <Input
              type={"text"}
              label={""}
              value={""}
              name={""}
              placeholder={""}
              error={false}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Title>
        </RegSectionRoles>

        <RegSectionRoles>
          <Title>
            <Text headingLevel={"h1"}>Email:</Text>

            <Input
              type={"text"}
              label={""}
              value={""}
              name={""}
              placeholder={""}
              error={false}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Text headingLevel={"h1"}>Phone Number:</Text>

            <Input
              type={"text"}
              label={""}
              value={""}
              name={""}
              placeholder={""}
              error={false}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Title>
        </RegSectionRoles>
        <RegSectionRoles>
          <Title>
            <Text headingLevel={"h1"}>Quarter:</Text>

            <Input
              type={"text"}
              label={""}
              value={""}
              name={""}
              placeholder={""}
              error={false}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Text headingLevel={"h1"}>ID Number:</Text>

            <Input
              type={"text"}
              label={""}
              value={""}
              name={""}
              placeholder={""}
              error={false}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Title>
        </RegSectionRoles>
        <RegSectionRoles>
          <Title>
            <Text headingLevel={"h1"}>Password:</Text>

            <Input
              type={"text"}
              label={""}
              value={""}
              name={""}
              placeholder={""}
              error={false}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Text headingLevel={"h1"}>Confirm PassWord</Text>

            <Input
              type={"text"}
              label={""}
              value={""}
              name={""}
              placeholder={""}
              error={false}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Title>
          <Account>
            <Text headingLevel={"h1"}>Already have an account?</Text>
            <Button label={""} onClick={function (): void {
              throw new Error("Function not implemented.");
            } }>
              
                <Text headingLevel={"h1"} style={{ color: "#000", borderBottom: "#000" }}>
                  Sign In
                </Text>
              
            </Button>
          </Account>
          <Button label={""} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }>
            <Text
              headingLevel={"h1"}
              style={{
                borderRadius: "5px",
                border: " solid #87C656",
                padding: "5px",
              }}
            >
              Register
            </Text>
          </Button>
        </RegSectionRoles>
      </RegSection>
    </RegContainer>
    </RegMainContainer>
  );
}

export default Registration;
