"use client";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import RegImage from "../../public/real logo.png";
import Landingimage from "../../public/backound.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/services/contants";

export const RegContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50vw;
  height: 90vh;
  background: #F1F2F3;
  gap: 1rem;
  border-top: 6px solid #87C656;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;

const RegImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 35vw;
  padding: 4px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
  url(${Landingimage.src});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 4px 30px 1px grey;

  @media screen and (max-width: 770px) {
    display: none;
`;

const RegMainContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 4px 30px 1px grey;
  height: 100vh;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
    height: 100%;
    background: #87C656;
`;

const RegSection = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: #000;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;

const RegSectionRoles = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 5px;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
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

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;

const Account = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 1rem;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;
function Registration() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  const [data, setData] = useState({
    fullname: "",
    email: "",
    quarter: "",
    password: "",
    confirmPassword: "",
    IDcard: "",
  });
  const [validationErrors, setValidationErrors] = useState<
    { fullname?: string; password?: string; confirmPassword?: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateData = () => {
    const errors = [];

    if (data.fullname?.length < 4) {
      errors.push({ fullname: "Full name must be at least 4 characters long" });
    } else if (data.fullname?.length > 30) {
      errors.push({ fullname: "Full name should be less than 30 characters" });
    }

    if (data.password.length < 6) {
      errors.push({
        password: "Password should be at least 6 characters long",
      });
    } else if (data.password !== data.confirmPassword) {
      errors.push({ confirmPassword: "Passwords don't match" });
    }

    setValidationErrors(errors);

    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !data.fullname ||
      !data.email ||
      !data.password ||
      !data.quarter ||
      !data.IDcard
    ) {
      setError("All fields are necessary");
      return;
    }

    if (!validateData()) {
      setError("Validation failed");
      return;
    }

    try {
      console.log({ API_URL, data });
      // const res = await axios.post( `${API_URL}/api/users/signup`, data);
      const res = await axios.post(`${API_URL}/api/users/signup`, data);
      if (res.status === 200) {
        setData({
          fullname: "",
          email: "",
          quarter: "",
          password: "",
          confirmPassword: "",
          IDcard: "",
        });
        setValidationErrors([]);
        setError("");
      } else {
        setError("User registration failed");
      }

      console.log("data", { res });
    } catch (error) {
      console.log("Error during registration", error);
      setError("Error during registration");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
              style={{
                color: "#87C656",
                fontWeight: "bolder",
                borderBottom: "4px solid #87C656",
              }}
            >
              LogiscticBambe
            </Text>
          </Account>
          <form onSubmit={handleSubmit}>
            <RegSectionRoles>
              <Separation>
                <Title>
                  <Text headingLevel={"h1"}>Full Name:</Text>

                  <Input
                    type={"text"}
                    label={"Full Name"}
                    value={data.fullname}
                    name="fullname"
                    placeholder={"Full Name"}
                    error={false}
                    onChange={(e) =>
                      setData({ ...data, fullname: e.target.value })
                    }
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
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
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
                    onChange={(e) =>
                      setData({ ...data, confirmPassword: e.target.value })
                    }
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
                    value={data.quarter}
                    name={""}
                    placeholder={"Quarter"}
                    error={false}
                    onChange={(e) =>
                      setData({ ...data, quarter: e.target.value })
                    }
                  />
                </Title>
                <Title>
                  <Text headingLevel={"h1"}>ID Number:</Text>

                  <Input
                    type={"text"}
                    label={""}
                    value={data.IDcard}
                    name={""}
                    placeholder={"ID Number"}
                    error={false}
                    onChange={(e) =>
                      setData({ ...data, IDcard: e.target.value })
                    }
                  />
                </Title>
              </Separation>
            </RegSectionRoles>
            <RegSectionRoles>
              <Account>
                <Text headingLevel={"h1"}>Already have an account?</Text>
                <Button label={""} onClick={() => navigateToPage("/login")}>
                  Sign In
                </Button>
              </Account>
              {error && <Text headingLevel={"h1"}>{error}</Text>}
              <Button label={""} onClick={() => handleSubmit}>
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
          </form>
        </RegSection>
      </RegContainer>
    </RegMainContainer>
  );
}

export default Registration;
