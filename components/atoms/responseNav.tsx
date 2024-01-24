'use client';
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/AppContext";
import { useRouter } from "next/navigation";
import { IRoles, IUser, Roles } from "@/services/Interfaces/Interface";

const NavbarContainer = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f1f2f3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 5;
  }
`;

const Logo = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 17px;
    font-weight: 500;
    background: linear-gradient(120deg, #43a047, #2e7d32);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
`;

const MenuIcon = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Modal = styled.div<{ show: boolean }>`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: ${({ show }) => (show ? "0" : "-200px")};
    width: 200px;
    height: 70vh;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  padding: 5px;
`;

const StyledButton = styled.button`
  background-color: rgba(0, 128, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 128, 0, 0.8);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const Button = ({ label, onClick }: ButtonProps) => {
    return <StyledButton onClick={onClick}>{label}</StyledButton>;
  };

  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };
  const { currentUser } = useAppContext();

  const isAdmin = (currentUser: IUser | null | undefined) => {
    return currentUser?.role === "ADMIN";
  };

  useEffect(() => {
    if(typeof window === undefined) return;
    
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth <= 700) {
        setShowModal(true);
      } else {


        setShowModal(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavbarContainer>
      <Logo>logisticbambe</Logo>
      <MenuIcon onClick={() => setShowModal(!showModal)}>☰</MenuIcon>
      <Modal show={showModal}>
        <CloseButton
          onClick={() => setShowModal(false)}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            color: "#fff",
            justifyContent: "end",
            padding: "10px",
          }}
        >
          ✕
        </CloseButton>
        <ButtonContainer>
          <Button label={"Homepage"} onClick={() => navigateToPage("/")} />
          <Button label={"Order"} onClick={() => navigateToPage("/orders")} />
          <Button
            label={"Customer"}
            onClick={() => navigateToPage("/customer")}
          />
          <Button
            label={"Tracking"}
            onClick={() => navigateToPage("/tracking")}
          />
          {isAdmin(currentUser) && (
            <>
              <Button
                label={"Personnel"}
                onClick={() => navigateToPage("/personnel")}
              />
              <Button
                label={"Transportation"}
                onClick={() => navigateToPage("/transportation")}
              />{" "}
            </>
          )}
        </ButtonContainer>
      </Modal>
    </NavbarContainer>
  );
};

export default Navbar;
