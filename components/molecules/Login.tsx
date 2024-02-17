"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import RegImage from "../../public/real logo.png";
import Image from "next/legacy/image";
import Text from "../atoms/Text";
import Input from '../atoms/Input';
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import Landingimage from "../../public/backound.webp";
import {
  IconStylingProvider,
  IconStylingProviderProps,
} from "../../hooks/MyIcons";
import { FcGoogle } from "react-icons/fc";
import { login } from "@/services/api";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '../../src/app/firebase/firebaseconfig';

const RegMainContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 5%;

  @media screen and (max-width: 770px) {
    width: 100%;
    gap: 1rem;
    background: #f1f2f3;
  }
`;

const RegContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  height: 100%;
  background: #f1f2f3;
  box-shadow: 2px 4px 30px 1px grey;
  border-top: 6px solid #87c656;
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(email, password);

      console.log({ response })

      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  const handleGoogle = async (e: any) => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error authenticating with Google:', error);
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
              Hey! Welcome{" "}
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
                id={'input1'}
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
                id="input2"
                value={password}
                name={""}
                placeholder={"Password"}
                error={false}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Title>
            <div
              style={{
                width: "50%",
                display: "flex",
                margin: "0 auto",
                alignItems: "center",
                border: "1px solid gray",
                background: "#87c656",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Button label={""} onClick={handleLogin}>
                Login
              </Button>
            </div>
            <Account>
              <Text headingLevel={"h1"}>No account?</Text>
              <div
              style={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #87c656",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Button
                label={""}
                onClick={() => navigateToPage("/registrationlogin")}
              >
                Sign Up
              </Button>
              </div>
            </Account>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '1rem'}}>
                <p>...........</p>
                <p>OR</p>
                <p>...........</p>
              </div>
            <button
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "center",
                backgroundColor: " rgba(135, 198, 86, 0.5)",
                padding: "5px",
              }}
              onClick={handleGoogle}
            >
              <IconStylingProvider value={iconStyling.value}>
                <FcGoogle
                  size={iconStyling.value.size}
                  color={iconStyling.value.color}
                />
                Login with Google
              </IconStylingProvider>
            </button>
          </RegSectionRoles>

          {errorMessage && <Text headingLevel={"h1"}>{errorMessage}</Text>}
        </RegSection>
      </RegContainer>
    </RegMainContainer>
  );
}

export default Login;
