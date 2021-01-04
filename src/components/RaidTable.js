import React, { useEffect } from "react";
import styled from "styled-components";

const Table = styled.table`
  background-color: #3d3d3d;
  width: 100%;
  border-radius: 2px;
  padding: 0.6rem;
`;

const THead = styled.thead`
  th {
    padding: 0.6rem;
  }
`;

const TBody = styled.tbody`
  td {
    text-align: center;
    color: #afafaf;
    cursor: pointer;
    transition: background-color 0.2s linear;
    border-radius: 2px;
    width: 50%;

    padding: 0.2rem 0rem;
  }
  td:hover {
    background: #4e4e4e;
  }
`;

const Row = ({ rowNumber, callback }) => {
  return (
    <tr>
      <td onClick={() => callback(rowNumber)}>Empty</td>
      <td onClick={() => callback(rowNumber)}>Empty</td>
    </tr>
  );
};

const RaidTable = ({ handleModalOpen }) => {
  useEffect(() => {
    const onEnter = (element) => {
      element.textContent = "Click to add player";
    };

    const onLeave = (element) => {
      element.textContent = "Empty";
    };

    document.querySelectorAll("td").forEach((td) => {
      td.addEventListener("mouseenter", () => onEnter(td));
      td.addEventListener("mouseleave", () => onLeave(td));
    });

    return () => {
      document.querySelectorAll("td").forEach((td) => {
        td.removeEventListener("mouseenter", () => onEnter(td));
        td.removeEventListener("mouseleave", () => onLeave(td));
      });
    };
  }, []);

  return (
    <>
      <Table>
        <THead>
          <tr>
            <th>Group 1</th>
            <th>Group 2</th>
          </tr>
        </THead>
        <TBody>
          <Row rowNumber={1} callback={handleModalOpen} />
          <Row rowNumber={2} callback={handleModalOpen} />
          <Row rowNumber={3} callback={handleModalOpen} />
          <Row rowNumber={4} callback={handleModalOpen} />
          <Row rowNumber={5} callback={handleModalOpen} />
        </TBody>
      </Table>

      <Table>
        <THead>
          <tr>
            <th>Group 3</th>
            <th>Group 4</th>
          </tr>
        </THead>
        <TBody>
          <Row rowNumber={6} callback={handleModalOpen} />
          <Row rowNumber={7} callback={handleModalOpen} />
          <Row rowNumber={8} callback={handleModalOpen} />
          <Row rowNumber={9} callback={handleModalOpen} />
          <Row rowNumber={10} callback={handleModalOpen} />
        </TBody>
      </Table>

      <Table>
        <THead>
          <tr>
            <th>Group 5</th>
            <th>Group 6</th>
          </tr>
        </THead>
        <TBody>
          <Row rowNumber={11} callback={handleModalOpen} />
          <Row rowNumber={12} callback={handleModalOpen} />
          <Row rowNumber={13} callback={handleModalOpen} />
          <Row rowNumber={14} callback={handleModalOpen} />
          <Row rowNumber={15} callback={handleModalOpen} />
        </TBody>
      </Table>
    </>
  );
};

export default RaidTable;
