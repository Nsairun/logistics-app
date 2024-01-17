"use client";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import RegImage from "../../public/real logo.png";
import Landingimage from "../../public/backound.webp";
import Image from "next/legacy/image";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import { signUp } from "@/services/api";

export const RegContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50vw;
  height: 100%;
  background: #F1F2F3;
  gap: 1rem;
  border-top: 6px solid #87C656;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
    margin: auto;
`;

const RegImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
    margin: auto;
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
    marigin auto;
    width: 100%;
`;

const Title = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  padding: 5px;

  @media screen and (max-width: 770px) {
    marigin auto;
    width: 100%;
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
    // display: block;
    margin: auto;
    // width: 100%;
`;
function Registration() {
  const iconStyling: IconStylingProviderProps = {
    value: {
      size: "35px",
      color: "#fff",
    },
  };
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
    } else if (!/A-Z/.test(data.password) || !/a-z/.test(data.password)) {
      errors.push({
        password:
          "Password should contain at least one uppercase letter and lowercase letter",
      });
    } else if (data.password !== data.confirmPassword) {
      errors.push({ confirmPassword: "Passwords don't match" });
    }

    setValidationErrors(errors);

    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(validateData());

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

    try {
      console.log({ data });
      // const res = await axios.post( `${API_URL}/api/users/signup`, data);
      const res = await signUp(data);
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

      const token = res.data.token;

      localStorage.setItem("token", token);

      console.log("data", { res });
    } catch (error) {
      console.log("Error during registration", error);
      setError("Error during registration");
    }
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
              <div
                style={{
                  width: "20vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                  background: "#87C656",
                  gap: "1rem",
                }}
              >
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
              </div>
            </RegSectionRoles>
            <RegSectionRoles>
              <Account>
                <Text headingLevel={"h1"}>Already have an account?</Text>
                <div
                  style={{
                    width: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid #87C656",
                    gap: "1rem",
                  }}
                >
                  <Button label={""} onClick={() => navigateToPage("/login")}>
                    Sign In
                  </Button>
                </div>
              </Account>

              <div>
                <p></p>
                <p>OR</p>
                <p></p>
              </div>

              <button
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: " rgba(135, 198, 86, 0.5)",
                  padding: "5px",
                  gap: "1rem",
                }}
              >
                <IconStylingProvider value={iconStyling.value}>
                  <FcGoogle
                    size={iconStyling.value.size}
                    color={iconStyling.value.color}
                  />
                </IconStylingProvider>
                <Text headingLevel={"h1"}> Register with google account</Text>
              </button>

              {error && (
                <Text headingLevel={"h1"} style={{ color: "red" }}>
                  {error}
                </Text>
              )}
              
            </RegSectionRoles>
          </form>
        </RegSection>
      </RegContainer>
    </RegMainContainer>
  );
}

export default Registration;
