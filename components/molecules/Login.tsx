"use client";
import React, {useState} from "react";
import styled from "styled-components";
import RegImage from "../../public/real logo.png";
import Image from "next/image";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
// import SlideModal from "../../modal/SlideModal";
// import RegistrationForm from "./RegistrationForm";
// import ReactModal from "react-modal";

const RegMainContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

const RegContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 75%;
  gap: 2rem;
  position: relative;
  box-shadow: 2px 4px 30px 1px grey;
`;

const RegImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  width: 40vw;
  margin: auto;
  padding: 5px;
  background: #000;
`;

const RegSection = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background: #F1F2F3;
  padding: 5px;
  height: 85vh;
  color: #000;
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
            <Button label={""} onClick={openModal}>
              
                <Text headingLevel={"h1"} style={{ color: "#000", borderBottom: "solid #0069C2" }}>
                  Sign Up
                </Text>
            {/* <ReactModal isOpen={isModalOpen} onRequestClose={closeModal}>
            <SlideModal isOpen={isModalOpen} onClose={closeModal} />
            <RegistrationForm/>
          </ReactModal> */}
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
              Login
            </Text>
          </Button>
        </RegSectionRoles>
      </RegSection>
    </RegContainer>
    </RegMainContainer>
  );
}

export default Registration;


