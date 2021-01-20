import React, { useState, useEffect, createRef } from "react";
import "./styles/App.css";
import styled from "styled-components";
import PieChart from "./components/PieChart";

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

  li {
    list-style: none;
  }

  @media only screen and (max-width: 910px) {
    padding: 0 0.6rem;
  }
`;

const SpecContainer = styled.div`
  display: flex;
`;

const PlayerClasses = styled.div`
  width: 50%;
  padding: 1rem 0.6rem;
`;

const PlayerClass = styled.div`
  cursor: pointer;
  color: ${(props) => props.color || "inherit"};
  font-weight: 700;
  border: ${(props) => `1px solid ${props.color}` || "inherit"};
  border-radius: 4px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  margin-bottom: 0.4rem;
  padding-right: 0.6rem;

  display: flex;
  justify-content: ${(props) =>
    props.selected ? "space-between" : "flex-start"};
  align-items: center;

  img {
    margin-right: 0.6rem;
  }

  &:hover {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    );
  }
`;

const ClassSpecs = styled.div`
  width: 50%;
  padding: 1rem 0.6rem;
`;

const PlayerSpec = styled(PlayerClass)``;

const Button = styled.button`
  border: none;
  background-color: #216869;
  color: inherit;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  margin: 0.5rem 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #247e80;
  }
`;

const Title = styled.h1`
  color: #49a078;
`;

const Subtitle1 = styled.h2`
  color: #49a078;
`;

const Subtitle2 = styled.h3`
  color: #49a078;
`;

const OutboundLink = styled.a`
  color: cyan !important;
  transition: color 0.2s linear;
  &:hover {
    color: #02d8d8;
  }
`;

const Footer = styled.footer`
  width: 100%;
  padding: 1.5rem 0;
  margin-top: 2rem;
  text-align: center;
  border: none;
  border-top: 0.5px solid #b3b3b3;
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

  const formatBuffs = (buffs) => {
    const types = [];

    for (let buff of buffs) {
      if (!types.find((t) => t.name === buff.type)) {
        types.push({ name: buff.type, list: [] });
      }
    }

    for (let type of types) {
      for (let buff of buffs) {
        if (
          type.name === buff.type &&
          !type.list.find((b) => b.name === buff.name)
        ) {
          type.list.push(buff);
        }
      }
    }
    return types;
  };

  const getDataset = () => {
    let dataset = [];

    for (let spec of raid) {
      for (let c of playerClasses) {
        if (c.specs.includes(spec)) {
          if (dataset.find((d) => d.name === c.name)) {
            dataset = dataset.map((d) => {
              if (d.name === c.name) {
                return { ...d, value: d.value + 1 };
              }
              return d;
            });
          } else {
            dataset.push({ name: c.name, color: c.color, value: 1 });
          }
        }
      }
    }
    return dataset;
  };

  return (
    <Content>
      <div style={{ width: "100%" }}>
        <Title>Raid Buffs Viewer</Title>
      </div>
      <Modal isModalOpen={isModalOpen} toggleModal={handleModalOpen}>
        <SpecContainer>
          <PlayerClasses>
            {playerClasses.map((c) => (
              <PlayerClass
                key={c.name}
                onClick={() => setSelectedClass(c.name)}
                color={c && c.color}
                selected={selectedClass === c.name}
              >
                <img src={c.icon} alt={c.name} width="22" height="22" />
                {selectedClass === c.name && "> "} {c.name}
              </PlayerClass>
            ))}
            <Button onClick={clearSlot}>clear slot</Button>
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
                      selected={lastSelectedSpec === c}
                    >
                      {spec && (
                        <img
                          src={spec.icon}
                          alt={spec.name}
                          width="22"
                          height="22"
                        />
                      )}
                      {lastSelectedSpec === c && "> "} {c}
                    </PlayerSpec>
                  );
                })}
          </ClassSpecs>
        </SpecContainer>
      </Modal>
      <RaidContainer>
        <RaidTable handleModalOpen={handleModalOpen} raidComp={raidComp} />
        <Button onClick={clearRaid}>reset raid</Button>
        {raid.length > 0 && (
          <PieChart
            data={getDataset()}
            title="class distribution"
            style={{ marginTop: "1rem" }}
          />
        )}
      </RaidContainer>
      <BuffsContainer>
        <Subtitle1 title="Buffs and Debuffs in each category will NOT stack with each other">
          BUFFS:
        </Subtitle1>
        <ul>
          {buffs &&
            formatBuffs(buffs).map((buff, index) => (
              <li key={index}>
                <Subtitle2>{buff.name}</Subtitle2>
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
        <Subtitle1 title="Buffs and Debuffs in each category will NOT stack with each other">
          DEBUFFS:
        </Subtitle1>
        <ul>
          {debuffs &&
            formatBuffs(debuffs).map((buff, index) => (
              <li key={index}>
                <Subtitle2>{buff.name}</Subtitle2>
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
      <Footer>
        <p>
          Developed by{" "}
          <OutboundLink
            href="https://github.com/GShadowBroker"
            rel="noreferrer"
            target="_blank"
          >
            Gledyson.
          </OutboundLink>
        </p>
        <p>
          Credits to Zigs who compiled all buffs and debuffs in{" "}
          <OutboundLink
            href="https://www.dalaran-wow.com/forums/community/general-discussion/topic/2149/the-comprehensive-list-of-raid-buffs-debuffs"
            rel="noreferrer"
            target="_blank"
          >
            this thread.
          </OutboundLink>
        </p>
      </Footer>
    </Content>
  );
};

export default App;
