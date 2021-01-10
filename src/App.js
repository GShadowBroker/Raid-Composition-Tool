import React, { useState } from "react";
import "./styles/App.css";
import styled from "styled-components";

import specList from "./assets/specList";
import { db } from "./constants/links";
import playerClasses from "./assets/playerClasses";
import RaidTable from "./components/RaidTable";
import Modal from "./components/utils/Modal";

const Content = styled.div`
  display: flex;
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

const SpecContainer = styled.div`
  display: flex;
`;

const PlayerClasses = styled.div`
  border: 1px solid blue;
  width: 50%;
`;

const PlayerClass = styled.div`
  border: 1px solid green;
`;

const ClassSpecs = styled.div`
  border: 1px solid purple;
  width: 50%;
`;

const PlayerSpec = styled.div`
  border: 1px solid Orangered;
`;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [lastSelectedSpec, setLastSelectedSpec] = useState(null);
  const [currentCell, setCurrentCell] = useState([null, null]);
  const [raidComp, setRaidComp] = useState([
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
  ]);

  const handleModalOpen = (row, column) => {
    setIsModalOpen(!isModalOpen);

    if (row && column) {
      setCurrentCell([row, column]);

      if (column === 1) {
        if (raidComp[row - 1][0]) {
          setLastSelectedSpec(raidComp[row - 1][0]);
          setSelectedClass(
            playerClasses.find(
              (c) => c.specs.indexOf(raidComp[row - 1][0]) >= 0
            ).name
          );
        }
      } else {
        if (raidComp[row - 1][1]) {
          setLastSelectedSpec(raidComp[row - 1][1]);
          setSelectedClass(
            playerClasses.find(
              (c) => c.specs.indexOf(raidComp[row - 1][1]) >= 0
            ).name
          );
        }
      }
    }
  };

  // Adds selected spec to raid table
  const addSpec = (spec) => {
    setLastSelectedSpec(spec);
    const newRaidComp = raidComp;
    if (currentCell[1] === 1) {
      newRaidComp[currentCell[0] - 1] = [spec, raidComp[currentCell[0] - 1][1]];
      setRaidComp(newRaidComp);
    } else if (currentCell[1] === 2) {
      newRaidComp[currentCell[0] - 1] = [raidComp[currentCell[0] - 1][0], spec];
      setRaidComp(newRaidComp);
    }
    setIsModalOpen(false);
  };

  const raid = [];
  raidComp.forEach((row) => {
    if (row[0]) {
      raid.push(row[0]);
    }
    if (row[1]) {
      raid.push(row[1]);
    }
  });

  const buffs = [];
  const debuffs = [];
  raid.forEach((spec) => {
    const matchedSpec = specList.find((s) => s.name === spec);
    if (!matchedSpec) return;
    if (matchedSpec.buffs.length > 0) {
      matchedSpec.buffs.forEach((b) => buffs.push(b));
    }
    if (matchedSpec.debuffs.length > 0) {
      matchedSpec.debuffs.forEach((d) => debuffs.push(d));
    }
  });

  console.log("buffs", buffs);
  console.log("debuffs", debuffs);

  return (
    <Content>
      <Modal isModalOpen={isModalOpen} toggleModal={handleModalOpen}>
        <SpecContainer>
          <PlayerClasses>
            {playerClasses.map((c) => (
              <PlayerClass
                key={c.name}
                onClick={() => setSelectedClass(c.name)}
              >
                {selectedClass === c.name ? "-" : ""} {c.name}
              </PlayerClass>
            ))}
          </PlayerClasses>
          <ClassSpecs>
            {selectedClass &&
              playerClasses
                .filter((pc) => pc.name === selectedClass)[0]
                .specs.map((c) => (
                  <PlayerSpec key={c} onClick={() => addSpec(c)}>
                    {lastSelectedSpec === c ? "-" : ""} {c}
                  </PlayerSpec>
                ))}
          </ClassSpecs>
        </SpecContainer>
      </Modal>
      <RaidContainer>
        <RaidTable handleModalOpen={handleModalOpen} raidComp={raidComp} />
      </RaidContainer>
      <BuffsContainer>
        <h3>buffs:</h3>
        <ul>
          {buffs
            ? buffs
                .filter((buff, index) => buffs.indexOf(buff) === index)
                .map((buff, index) => (
                  <li key={index}>
                    <a
                      href={`${db}${buff.tooltip}`}
                      rel={`${buff.tooltip}&lvl=80`}
                      target="_blank"
                    >
                      {buff.name}
                    </a>
                  </li>
                ))
            : "---"}
        </ul>
        <h3>debuffs:</h3>
        <ul>
          {debuffs
            ? debuffs
                .filter((debuff, index) => debuffs.indexOf(debuff) === index)
                .map((debuff, index) => (
                  <li key={index}>
                    <a
                      href={`${db}${debuff.tooltip}`}
                      rel={`${debuff.tooltip}&lvl=80`}
                      target="_blank"
                    >
                      {debuff.name}
                    </a>
                  </li>
                ))
            : "---"}
        </ul>
      </BuffsContainer>
    </Content>
  );
};

export default App;
