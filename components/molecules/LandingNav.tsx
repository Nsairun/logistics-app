import React from "react";
import styled from "styled-components";
import Vehicule from "../atoms/Vehicule";
import Button from "../atoms/Button";

const NavContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
  border: 0.5px solid grey;
  background: linear-gradient(
    to bottom,
    rgba(0, 128, 0, 0.5),
    rgba(0, 128, 0, 0)
  );
`;

const NavContainerSub = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-right: 10px;
  width: 30vw;
  color: #fff;
`;

const Logo = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 700;
  font-size: 18px;
  padding: 20px;
  color: #fff;
  font-family: Helvetica;
  text-shadow: 2px 2px 4px #87c656;
`;

function LandingNav() {
  return (
    <NavContainer>
      <Logo>
        LOGISTICBAMBE <Vehicule />
      </Logo>
      <NavContainerSub>
        <div
          style={{
            width: "10vw",
            color: "#87c656",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"HomePage"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div
          style={{
            width: "10vw",
            color: "#87c656",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"Registration"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div
          style={{
            width: "10vw",
            color: "#87c656",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"Login"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </NavContainerSub>
    </NavContainer>
  );
}

export default LandingNav;
