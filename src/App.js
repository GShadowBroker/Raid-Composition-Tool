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
  max-width: 90vw;
  margin: auto;
  padding: 1rem 0.6rem;

  @media only screen and (max-width: 360px) {
    padding: 1rem 0;
    max-width: 300px;
  }
`;

const RaidContainer = styled.div`
  min-width: 500px;
  flex: 1;

  @media only screen and (max-width: 580px) {
    min-width: 300px;
  }
`;

const BuffsContainer = styled.div`
  min-width: 300px;
  flex: 1;
  padding: 0 1.2rem;

  @media only screen and (max-width: 910px) {
    padding: 0 0.6rem;
  }
`;

const SpecContainer = styled.div`
  display: flex;
`;

const PlayerClasses = styled.div`
  width: 50%;
`;

const PlayerClass = styled.div`
  color: ${(props) => props.color || "inherit"};
`;

const ClassSpecs = styled.div`
  width: 50%;
`;

const PlayerSpec = styled.div`
  color: ${(props) => props.color || "inherit"};
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

  const clearSlot = () => {
    console.log("cell", currentCell);
    const newRaidComp = raidComp;
    if (currentCell[1] === 1) {
      newRaidComp[currentCell[0] - 1] = [null, raidComp[currentCell[0] - 1][1]];
      setRaidComp(newRaidComp);
    } else if (currentCell[1] === 2) {
      newRaidComp[currentCell[0] - 1] = [raidComp[currentCell[0] - 1][0], null];
      setRaidComp(newRaidComp);
    }
    setIsModalOpen(false);
  };

  const clearRaid = () => {
    setRaidComp([
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
    setSelectedClass(null);
    setLastSelectedSpec(null);
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

  // console.log("buffs", buffs);
  // console.log("debuffs", debuffs);

  const formatBuffs = (buffs) => {
    const types = [];

    for (let buff of buffs) {
      if (!types.find((t) => t.name === buff.type)) {
        types.push({ name: buff.type, list: [] });
      }
    }

    for (let type of types) {
      for (let buff of buffs) {
        if (type.name === buff.type && type.list.indexOf(buff) < 0) {
          type.list.push(buff);
        }
      }
    }
    return types;
  };

  return (
    <Content>
      <Modal isModalOpen={isModalOpen} toggleModal={handleModalOpen}>
        <SpecContainer>
          <PlayerClasses>
            {playerClasses.map((c) => (
              <PlayerClass
                key={c.name}
                onClick={() => setSelectedClass(c.name)}
                color={c && c.color}
              >
                <img src={c.icon} alt={c.name} width="22" height="22" />
                {c.name}
              </PlayerClass>
            ))}
            <button onClick={clearSlot}>clear slot</button>
          </PlayerClasses>
          <ClassSpecs>
            {selectedClass &&
              playerClasses
                .filter((pc) => pc.name === selectedClass)[0]
                .specs.map((c) => {
                  const currentClass =
                    playerClasses.length > 0 &&
                    playerClasses.filter((pc) => pc.name === selectedClass)[0];
                  const classColor = currentClass && currentClass.color;
                  const spec = specList.find((s) => s.name === c);

                  return (
                    <PlayerSpec
                      key={c}
                      onClick={() => addSpec(c)}
                      color={classColor}
                    >
                      {spec && (
                        <img
                          src={spec.icon}
                          alt={spec.name}
                          width="22"
                          height="22"
                        />
                      )}
                      {lastSelectedSpec === c ? "-" : ""} {c}
                    </PlayerSpec>
                  );
                })}
          </ClassSpecs>
        </SpecContainer>
      </Modal>
      <RaidContainer>
        <RaidTable handleModalOpen={handleModalOpen} raidComp={raidComp} />
        <button onClick={clearRaid}>reset raid</button>
      </RaidContainer>
      <BuffsContainer>
        <h3>buffs:</h3>
        <ul>
          {buffs &&
            formatBuffs(buffs).map((buff, index) => (
              <li key={index}>
                <h4>{buff.name}</h4>
                <ul>
                  {buff.list.length > 0 &&
                    buff.list.map((b, i) => (
                      <li key={i}>
                        <a
                          href={`${db}${b.tooltip}`}
                          rel={`${b.tooltip}&lvl=80`}
                          target="_blank"
                        >
                          {b.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
        <h3>debuffs:</h3>
        <ul>
          {debuffs &&
            formatBuffs(debuffs).map((buff, index) => (
              <li key={index}>
                <h4>{buff.name}</h4>
                <ul>
                  {buff.list.length > 0 &&
                    buff.list.map((b, i) => (
                      <li key={i}>
                        <a
                          href={`${db}${b.tooltip}`}
                          rel={`${b.tooltip}&lvl=80`}
                          target="_blank"
                        >
                          {b.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </BuffsContainer>
    </Content>
  );
};

export default App;
