"use client";
import React, {useState} from "react";
import styled from "styled-components";
import RegImage from "../../public/real logo.png";
import Image from "next/image";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Landingimage from "../../public/backound.webp";
import { API_URL } from "@/services/contants";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import { FcGoogle } from "react-icons/fc";


const RegMainContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 770px) {
    width: 100%;
    gap: 1rem;
    background: #F1F2F3;
  }
;`

const RegContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: spac-between;
  width: 70%;
  height: 100%;
  background: #F1F2F3;
  box-shadow: 2px 4px 30px 1px grey;
  border-top: 6px solid #87C656;
  border-top-radius: 10px;

  @media screen and (max-width: 770px) {
    width: 100%;
    gap: 1rem;
    box-shadow: none;
  }
`;

const RegImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 35vw;
  padding: 4px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
  url(${Landingimage.src});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const RegSection = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background: #F1F2F3;
  padding: 5px;
  color: #000;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
    margin: auto
    padding: 15px;
  }
`;

const RegSectionRoles = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
    margin: auto;
    padding: 10px;
  }
`;

const Title = styled("div")`
  display: grid;
  grid-template-columns: 100px 250px;
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
  width: 100%;
  gap: 1rem;

  @media screen and (max-width: 770px) {
    margin: auto;
    width: 100%;
`;

const iconStyling: IconStylingProviderProps = {
  value: {
    size: "28px",
    color: "#000",
  },
};


function Login() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/users/signin`, {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };
    
  return (
    <RegMainContainer>
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
          <Text headingLevel={"h1"} style={{ color: "grey" }}>
            Hey! Welcome {" "}
          </Text>
          <Text
            headingLevel={"h1"}
            style={{ color: "#87C656", fontWeight: "bolder" }}
          >
           Sign In
          </Text>
        </Account>
        <RegSectionRoles>
          <Title>
            <Text headingLevel={"h1"}>Email:</Text>

            <Input
              type={"text"}
              label={""}
              value={email}
              name={""}
              placeholder={"Email"}
              error={false}
              onChange={(e) => setEmail(e.target.value)}

            />
          </Title>
        </RegSectionRoles>
        <RegSectionRoles>
          <Title>
            <Text headingLevel={"h1"}>Password:</Text>

            <Input
              type={"text"}
              label={""}
              value={password}
              name={""}
              placeholder={"Password"}
              error={false}
              onChange={(e) => setPassword(e.target.value)}

            />
          </Title>
          <Account>
            <Text headingLevel={"h1"}>No account?</Text>
            <Button label={""} onClick={() => navigateToPage("/registrationlogin")}>
              
                  Sign Up
            </Button>
          </Account>
          
          <button  style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            backgroundColor:" rgba(135, 198, 86, 0.5)",
            padding: "5px",
          }} onClick={() => navigateToPage("/")}>
            <IconStylingProvider value={iconStyling.value}>
            <FcGoogle
                size={iconStyling.value.size}
                color={iconStyling.value.color}
              />
                Login with Google
            </IconStylingProvider>
          </button>
          <div style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
          }}>
          <Button label={""} onClick={handleLogin}>
              Login
          </Button>
          </div>
        </RegSectionRoles>
        
        {errorMessage && <Text headingLevel={"h1"}>{errorMessage}</Text>}
      </RegSection>
    </RegContainer>
    </RegMainContainer>
  );
}

export default Login;
