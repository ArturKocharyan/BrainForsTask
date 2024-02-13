import React, { useState, useMemo, useEffect } from "react";
import "./MyTable.css";
import Modal from "react-modal";
import RedactLabelIcon from "../icons/Icons";
import ChatIcon from "../icons/ChatIcon";
import TimerIcon from "../icons/TimerIcon";
import { v4 as uuidv4 } from 'uuid'
Modal.setAppElement("#root");


const getShownColumns = (columns) => columns.filter(({ hidden }) => hidden);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
  },
};

export const MyTable = ({ columns, data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [_columns, setColumns] = useState([...columns]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([...columns]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    const filteredData = columns.filter((item) =>
      item.Header.toLowerCase().includes(search)
    );
    setFilteredArray(filteredData);
  }, [search, columns]);

  const columnsToShow = useMemo(() => getShownColumns(_columns), [_columns]);

  const renderCell = (column, row) => {
    const { accessor } = column;
    let cellValue = "";

    const isAccesssorString = typeof accessor === "string";
    const isAccesstorFunction = typeof accessor === "function";
    if (isAccesssorString) {
      cellValue = row[accessor] || "";
    }
    if (isAccesstorFunction) {
      cellValue = accessor(row);
    }

    return <td key={uuidv4()}>{cellValue}</td>;
  };

  const renderRow = (row, index) => {

    return (
      <tr key={index}>
        <td>
          <div className="iconDiv">
            <RedactLabelIcon></RedactLabelIcon>
            <ChatIcon></ChatIcon>
            <TimerIcon></TimerIcon>
          </div>
        </td>
        {columnsToShow.map((column) => renderCell(column, row))}
      </tr>
    );
  };
  return (
    <>
      <button className="manageButton" onClick={openModal}>
        <h2>Manage Columns</h2>
      </button>
      <span></span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modalHeadDiv">
          <h1>Manage Template Columns</h1>
          <button className="closeBtn" onClick={closeModal}>
            X
          </button>
        </div>
        <p>
          Select the columns you would like to see in the table. They will
          appear in the order of selection
        </p>
        <input
          className="search-input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <div className="columnsDiv">
          {filteredArray.map(({ Header }) => {
            return (
              <div key={Header} className="columnsCheck">
                <input
                  type="checkbox"
                  checked={
                    !!_columns.find((column) => column.Header === Header)
                      ?.hidden
                  }
                  onChange={(e) => {
                    const hidden = e.target.checked;
                    let toChange = [..._columns];
                    toChange = toChange.map((column) => {
                      if (column.Header === Header) {
                        column.hidden = hidden;
                      }

                      return column;
                    });
                    setColumns(toChange);
                  }}
                />
                <div style={{ marginLeft: "10px" }}>{Header}</div>
              </div>
            );
          })}
        </div>
        <div className="btnDiv">
          <button
            className="btnCancel"
            onClick={() => {
            
              closeModal();
            }}
          >
            Cancel
          </button>
          <button className="btnContinue" 
           onClick={closeModal}
          >Continue</button>
        </div>
      </Modal>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>{/* Empty column */}</th>
              {columnsToShow.map(({ Header }) => (
                <th key={Header}>{Header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {(data || []).map((row, index) => renderRow(row, index))}
          </tbody>
        </table>
      </div>
    </>
  );
};
