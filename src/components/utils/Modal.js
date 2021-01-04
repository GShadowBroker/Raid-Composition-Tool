import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background: ${(props) =>
    props.opacity ? props.opacity : "rgba(0, 0, 0, .4)"};
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div``;

const Modal = ({ isModalOpen, toggleModal }) => {
  return (
    <ModalOverlay open={isModalOpen} onClick={toggleModal}>
      <ModalContainer>content</ModalContainer>
    </ModalOverlay>
  );
};

Modal.defaultProps = {
  isModalOpen: false,
  setIsModalOpen: () => {},
};

export default Modal;
