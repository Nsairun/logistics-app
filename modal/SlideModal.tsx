import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  overflow: auto;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  margin-top: 5%;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  width: 80%;
  height: fit-content;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    margin-top: 20%;
    width: 100%;
  }
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={handleModalClick}>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;