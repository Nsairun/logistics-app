import styled, { css } from "styled-components";
import { useEffect, useState } from "react";

const NavbarContainer = styled.nav`
  display: none; /* Initially hide the navbar */
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f1f2f3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`;

const Logo = styled.div`
  font-size: 17px;
  font-weight: 500;
  background: linear-gradient(120deg, #43a047, #2e7d32);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

const MenuIcon = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Modal = styled.div<{ show: boolean }>`
  position: absolute;
  top: 60px;
  right: ${({ show }) => (show ? "0" : "-200px")};
  width: 200px;
  background-color: #f1f2f3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.div`
  cursor: pointer;
  padding: 5px;
`;

const NavLink = styled.a`
  padding: 10px;
  text-decoration: none;
  color: #000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d3d4d5;
  }
`;

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Handle window resize to show/hide the navbar based on screen width
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize on component mount to set initial state
    handleResize();

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavbarContainer>
      <Logo>logisticbambe</Logo>
      <MenuIcon onClick={() => setShowModal(!showModal)}>☰</MenuIcon>
      <Modal show={showModal}>
        <CloseButton onClick={() => setShowModal(false)} style={{display: "flex", alignItems: "center", width: "100%", justifyContent: "end", padding: "10px"}}>✕</CloseButton>
        <NavLink href="#">dashboard</NavLink>
        <NavLink href="#">order</NavLink>
        <NavLink href="#">customer</NavLink>
        <NavLink href="#">personnel</NavLink>
        <NavLink href="#">tracking</NavLink>
        <NavLink href="#">shipment</NavLink>
      </Modal>
    </NavbarContainer>
  );
};

export default Navbar;
