import React from "react";
import "./styles/App.css";
import styled from "styled-components";

import specList from "./assets/specList";

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
  border: 1px solid green;
  min-width: 500px;
  flex: 1;
`;

const BuffsContainer = styled.div`
  border: 1px solid red;
  min-width: 300px;
  flex: 1;
`;

const App = () => {
  return (
    <Content>
      <RaidContainer>uno</RaidContainer>
      <BuffsContainer>dos</BuffsContainer>
    </Content>
  );
};

export default App;
