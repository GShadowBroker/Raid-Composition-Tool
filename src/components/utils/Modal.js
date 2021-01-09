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

const ModalCard = styled.div`
  height: 350px;
  width: 400px;
  background: #4e4e4e;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ModalContainer = styled.div``;

const Modal = ({ isModalOpen, toggleModal, children }) => {
  const handleModalClick = (e) => {
    if (e.target.id !== "modal_overlay") return;
    toggleModal();
  };

  return (
    <ModalOverlay
      open={isModalOpen}
      onClick={handleModalClick}
      id="modal_overlay"
    >
      <ModalContainer>
        <ModalCard>{children}</ModalCard>
      </ModalContainer>
    </ModalOverlay>
  );
};

Modal.defaultProps = {
  isModalOpen: false,
  setIsModalOpen: () => {},
};

export default Modal;
