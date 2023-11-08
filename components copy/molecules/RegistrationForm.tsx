"use client";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import RegImage from "../../public/real logo.png";
import Landingimage from "../../public/backound.webp";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from "axios";


export const RegContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 2px 4px 30px 1px grey;
  width: 50vw;
  background: #F1F2F3;
  gap: 1rem;
`;

const RegImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  width: 35vw;
  padding: 4px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
  url(${Landingimage.src});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 4px 30px 1px grey;
`;

const RegMainContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 4px 30px 1px grey;
  height: 100vh;
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
  display: flex;
  gap: 1rem;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;

const Separation = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;
`;

const Account = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 1rem;
`;
function Registration() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [validationErrors, setValidationErrors] = useState<{ fullName?: string, password?: string, confirmPassword?: string }[]>([]);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateData = () => {
    const errors = [];

    if (data.fullName?.length < 4) {
      errors.push({ fullName: "Full name must be at least 4 characters long" });
    } else if (data.fullName?.length > 30) {
      errors.push({ fullName: "Full name should be less than 30 characters" });
    }

    if (data.password.length < 6) {
      errors.push({ password: "Password should be at least 6 characters long" });
    } else if (data.password !== data.confirmPassword) {
      errors.push({ confirmPassword: "Passwords don't match" });
    }

    setValidationErrors(errors);

    return errors.length === 0;
  };

  const handleReg = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateData();

    if (isValid) {
      try {
        setLoading(true);
        const apiRes = await axios.post("http://localhost:3000/api/auth/Signup", data);

        if (apiRes?.data?.success) {
          // Save data in session using next auth
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data?.error;
          setSubmitError(errorMsg);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // function getErrorMsg(arg0: string, validationErrors: { fullName?: string | undefined; password?: string | undefined; confirmPassword?: string | undefined; }[]): boolean {
  //   throw new Error("Function not implemented.");
  // }


  return (
    <RegMainContainer>
      <RegImageContainer>
        <Image
          src={RegImage}
          alt={"background image"}
          style={{ height: "fit-content", padding: "2px" }}
        />
      </RegImageContainer>
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
          <Separation>
          <Title>
            <Text headingLevel={"h1"}>Full Name:</Text>

            <Input
              type={"text"}
              label={"Full Name"}
              value={data.fullName}
              name="fullName"
              placeholder={"Full Name"}
              error={data.fullName && !data.fullName.trim()}
              onChange={handleInputChange}
            />
          </Title>
          <Title>
            <Text headingLevel={"h1"}>Email:</Text>

            <Input
              type={"email"}
              label={"Email"}
              value={data.email}
              name="email"
              placeholder={"Email"}
              error={false}
              onChange={handleInputChange}
            />
          </Title>
          </Separation>
        </RegSectionRoles>

        <RegSectionRoles>
        <Separation>
          <Title>
            <Text headingLevel={"h1"}>Password:</Text>

            <Input
              type={"password"}
              label={"Password"}
              value={data.password}
              name="Password"
              placeholder={"Password"}
              error={false}
              onChange={handleInputChange}
            />
          </Title>
          <Title>
            <Text headingLevel={"h1"}>Password confirmation:</Text>

            <Input
              type={"password"}
              label={"Password Confirmation"}
              value={data.confirmPassword}
              name={"password"}
              placeholder={"Password Confirmation"}
              error={false}
              onChange={handleInputChange}
            />
          </Title>
          </Separation>
        </RegSectionRoles>
        <RegSectionRoles>
        <Separation>
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
            </Title>
            <Title>
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
          </Separation>
        </RegSectionRoles>
        <RegSectionRoles>
        
          <Account>
            <Text headingLevel={"h1"}>Already have an account?</Text>
            <Button label={""} onClick={() => navigateToPage("/login")}>Sign In</Button>
          </Account>
          <Button label={""} onClick={() => console.log(null)}>
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
