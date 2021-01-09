import React, { useEffect } from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  background-color: #3d3d3d;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Table = styled.table`
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

const Row = ({ rowNumber, raidComp, callback }) => {
  return (
    <tr>
      <td onClick={() => callback(rowNumber, 1)}>
        {raidComp[rowNumber - 1][0] ? raidComp[rowNumber - 1][0] : "Empty"}
      </td>
      <td onClick={() => callback(rowNumber, 2)}>
        {raidComp[rowNumber - 1][1] ? raidComp[rowNumber - 1][1] : "Empty"}
      </td>
    </tr>
  );
};

const RaidTable = ({ handleModalOpen, raidComp }) => {
  useEffect(() => {
    const onEnter = (element) => {
      if (element.textContent === "Empty") {
        element.textContent = "Click to add player";
      }
    };

    const onLeave = (element) => {
      if (element.textContent === "Click to add player") {
        element.textContent = "Empty";
      }
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
    <TableContainer>
      <Table>
        <THead>
          <tr>
            <th>Group 1</th>
            <th>Group 2</th>
          </tr>
        </THead>
        <TBody>
          <Row rowNumber={1} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={2} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={3} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={4} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={5} callback={handleModalOpen} raidComp={raidComp} />
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
          <Row rowNumber={6} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={7} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={8} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={9} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={10} callback={handleModalOpen} raidComp={raidComp} />
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
          <Row rowNumber={11} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={12} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={13} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={14} callback={handleModalOpen} raidComp={raidComp} />
          <Row rowNumber={15} callback={handleModalOpen} raidComp={raidComp} />
        </TBody>
      </Table>
    </TableContainer>
  );
};

export default RaidTable;
