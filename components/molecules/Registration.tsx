"use client";
import React from "react";
import styled from "styled-components";
import RegImage from "../../public/real logo.png";
import Image from "next/image";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const RegContainer = styled("div")`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  gap: 1rem;
`;

const RegImageContainer = styled("div")`
  display: flex;
  align-items: start;
  justify-content: start;
  margin-bottom: 5%;
  width: 25vw;
  padding: 5px;
  box-shadow: 2px 2px 2px 1px gray;
`;

const RegSection = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 85vh;
  width: 100%;
  color: grey;
`;

const RegSectionRoles = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px;
`;

const Title = styled("div")`
  display: grid;
  grid-template-columns: 100px 250px 100px 250px;
  column-gap: 5px;
  row-gap: 5px;
  justify-content: space-evenly;
  height: 16vh;
`;
const Account = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 1rem;
`;
function Registration() {
  return (
    <RegContainer>
      <RegImageContainer>
        <Image
          src={RegImage}
          alt={"background image"}
          style={{ height: "fit-content", padding: "2px" }}
        />
      </RegImageContainer>
      <RegSection>
        <Account>
          <Text headingLevel={"h1"} style={{ color: "#fff" }}>
            Hey! Welcome to{" "}
          </Text>
          <Text
            headingLevel={"h1"}
            style={{ color: "#87C656", fontWeight: "bolder" }}
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
            <Button label={""}>
              
                <Text headingLevel={"h1"} style={{ color: "aqua", borderBottom: "solid aqua" }}>
                  Sign In
                </Text>
              
            </Button>
          </Account>
          <Button label={""}>
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
  );
}

export default Registration;
