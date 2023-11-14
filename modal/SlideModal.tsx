"use client"
import React from 'react'
import ReactModal from 'react-modal';
import Registration from '../components/molecules/Login';
import { RegContainer } from '../components/molecules/RegistrationForm';


const SlideModal = ({ isOpen, onClose }: any) => {
    return (
    <RegContainer>
      <ReactModal isOpen={isOpen} onRequestClose={onClose}>
        <Registration/>
        <button onClick={onClose}>Close</button>
      </ReactModal>
    </RegContainer>
    );
}

export default SlideModal