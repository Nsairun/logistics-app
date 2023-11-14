"use client";
import React, {useState} from "react";
import styled from "styled-components";
import RegImage from "../../public/real logo.png";
import Image from "next/image";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useRouter } from 'next/navigation';
import Landingimage from "../../public/backound.webp";


// import SlideModal from "../../modal/SlideModal";
// import RegistrationForm from "./RegistrationForm";
// import ReactModal from "react-modal";

const RegMainContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
;`

const RegContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: spac-between;
  width: 50%;
  background: #F1F2F3;
  box-shadow: 2px 4px 30px 1px grey;
  border-top: 6px solid #87C656;
  border-radius: 10px;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
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
    padding: 15px;
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
    padding: 10px;
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
  gap: 1rem;
`;
function Registration() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          </Title>
          <Account>
            <Text headingLevel={"h1"}>No account?</Text>
            <Button label={""} onClick={() => navigateToPage("/registrationlogin")}>
              
                  Sign Up
            {/* <ReactModal isOpen={isModalOpen} onRequestClose={closeModal}>
            <SlideModal isOpen={isModalOpen} onClose={closeModal} />
            <RegistrationForm/>
          </ReactModal> */}
            </Button>
          </Account>
          <Button label={""} onClick={() => navigateToPage("/dashboard")}>
              Login
          </Button>
        </RegSectionRoles>
      </RegSection>
    </RegContainer>
    </RegMainContainer>
  );
}

export default Registration;


