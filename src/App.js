import React, { useState } from "react";
import "./styles/App.css";
import styled from "styled-components";

// import specList from "./assets/specList";
import RaidTable from "./components/RaidTable";
import Modal from "./components/utils/Modal";

const Content = styled.div`
  display: flex;
  background: gray;
  flex-direction: row;
  flex-wrap: wrap;

  width: 1000px;
  max-width: 100vw;
  margin: auto;
  padding: 1rem 0.6rem;
`;

const RaidContainer = styled.div`
  min-width: 500px;
  flex: 1;
`;

const BuffsContainer = styled.div`
  min-width: 300px;
  flex: 1;
`;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Content>
      <Modal isModalOpen={isModalOpen} toggleModal={handleModalOpen} />
      <RaidContainer>
        <RaidTable handleModalOpen={handleModalOpen} />
      </RaidContainer>
      <BuffsContainer>buffs and debuffs</BuffsContainer>
    </Content>
  );
};

export default App;
