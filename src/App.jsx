import { React, useState } from "react";

var player = "";

const App = (props) => {
  const [NW, setNW] = useState(""),
    [NO, setNO] = useState(""),
    [NE, setNE] = useState(""),
    [WE, setWE] = useState(""),
    [CE, setCE] = useState(""),
    [EA, setEA] = useState(""),
    [SW, setSW] = useState(""),
    [SO, setSO] = useState(""),
    [SE, setSE] = useState("");

  const [turn, setturn] = useState("(Imm .. who'r u?)");

  const btnClicked = () => {
    if (player == "X") {
      player = "O";
    } else {
      player = "X";
    }

    setturn(player);
  };
  return (
    <div>
      <h1>
        Player <a className="neon">{turn}</a>
      </h1>
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  if (NW == '') {
                    setNW(player);
                  }
                  else{
                    alert('مينفعش')
                  }
                }}
                className=""
              >
                {NW}
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  setNO(player);
                }}
                className=""
              >
                {NO}
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  setNE(player);
                }}
                className=""
              >
                {NE}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  setWE(player);
                }}
                className=""
              >
                {WE}
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  setCE(player);
                }}
                className=""
              >
                {CE}
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  setEA(player);
                }}
                className=""
              >
                {EA}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  setSW(player);
                }}
                className=""
              >
                {SW}
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  setSO(player);
                }}
                className=""
              >
                {SO}
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  setSE(player);
                }}
                className=""
              >
                {SE}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
