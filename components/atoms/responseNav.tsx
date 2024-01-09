import styled from "styled-components";
import { useEffect, useState } from "react";

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

const NavLink = styled.a`
  @media screen and (max-width: 768px) {
    padding: 10px;
    text-align: left;
    margin-bottom: 5%;
    text-decoration: none;
    width: 30vw;
    font-weight: bold;
    border-bottom: 1px solid green;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d3d4d5;
    }
  }
`;

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
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
        <NavLink href="#">Dashboard</NavLink>
        <NavLink href="#">Order</NavLink>
        <NavLink href="#">Customer</NavLink>
        <NavLink href="#">Personnel</NavLink>
        <NavLink href="#">Tracking</NavLink>
        <NavLink href="#">Shipment</NavLink>
      </Modal>
    </NavbarContainer>
  );
};

export default Navbar;
