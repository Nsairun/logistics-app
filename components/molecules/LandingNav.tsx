'use client'

import styled from "@emotion/styled";
import Vehicule from "../atoms/Vehicule";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation"; 
import { useAppContext } from "../../hooks/AppContext";

const NavContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 100, 0, 0));

  @media screen and (max-width: 770px) {
    width: 100%;
  }
`;

const NavContainerSub = styled("div")`
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 1rem;
  padding-right: 5px;
  color: #fff;

  @media screen and (max-width: 770px) {
      display: none
  }
`;

const Logo = styled("div")`
  display: flex;
  align-items: center;
  padding-left: 3%;
  justify-content: space-evenly;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  font-family: Helvetica;
  text-shadow: 2px 2px 4px #87c656;
`;


function LandingNav() {

  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };
   const {currentUser} = useAppContext()
  
  return (
    <NavContainer>
      <Logo>
        LOGISTICBAMBE <Vehicule />
      </Logo>
      <NavContainerSub>
        <div
          style={{
            width: "10vw",
            color: "#fff",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"HomePage"}
            onClick={() => navigateToPage("/")}
          />
        </div>
       {!currentUser && (<div
          style={{
            width: "10vw",
            color: "#fff",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"Registration"}
            onClick={() => navigateToPage("/registrationlogin")}
          />
        </div>)}
       {! currentUser && (<div
          style={{
            width: "10vw",
            color: "#fff",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"Login"}
            onClick={() => navigateToPage("/login")}
          />
        </div>)}
       {currentUser && (<div
          style={{
            width: "10vw",
            color: "#fff",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"Dashboard"}
            onClick={() => navigateToPage("/dashboard")}
          />
        </div>)}
        {currentUser && (<div
          style={{
            width: "10vw",
            color: "#fff",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"About"}
            onClick={() => navigateToPage("/dashboard")}
          />
        </div>)}{currentUser && (<div
          style={{
            width: "10vw",
            color: "#fff",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Button
            label={"Contact"}
            onClick={() => navigateToPage("/dashboard")}
          />
        </div>)}
      </NavContainerSub>
    </NavContainer>
  );
}

export default LandingNav;
