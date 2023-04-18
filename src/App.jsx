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

  const [turn, setturn] = useState("(Imm .. I Don't Lnow)");

  const btnClicked = () => {
    if (player == "X") {
      player = "O";
    } else {
      player = "X";
    }

    setturn(player);
  };

  const whoWon = () => {
    console.log('iam here!!');
    if (NW == NO && NE == NO && NW == 'X' ) {
      alert('Player X Won :)')
      window.location.reload()
    }
    else if (NW == NO && NE == NO && NW == 'O' ) {
      alert('Player O Won :)')
      window.location.reload()
    }

    if (SW == SO && SE == SO && SW == 'X' ) {
      alert('Player X Won :)')
      window.location.reload()
    }
    else if (SW == SO && SE == SO && SW == 'O' ) {
      alert('Player O Won :)')
      window.location.reload()
    }

    if (NW == WE && SW == WE && WE == 'X' ) {
      alert('Player X Won :)')
      window.location.reload()
    }
    else if (NW == WE && SW == WE && WE == 'O' ) {
      alert('Player O Won :)')
      window.location.reload()
    }
  }

  return (
    <div onClick={() =>{whoWon()}}>
      <h1>The Last Turn:
        Player <a className="neon">{turn}</a>
      </h1>

      {/* squares to play*/}
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={() => {
                  btnClicked();
                  if (NW == "") {
                    setNW(player);
                  } else {
                    alert(
                      "مينفعش تلعب مكان صاحبك ، مش أصول بردو \n و عشان كده دورك هيروح، حق صاحبك اللي كنت هتتضحك عليه"
                    );
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
                  if (NO == "") {
                    setNO(player);
                  } else {
                    alert(
                      "مينفعش تلعب مكان صاحبك ، مش أصول بردو \n و عشان كده دورك هيروح، حق صاحبك اللي كنت هتتضحك عليه"
                    );
                  }
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
                  if (NE == "") {
                    setNE(player);
                  } else {
                    alert(
                      "مينفعش تلعب مكان صاحبك ، مش أصول بردو \n و عشان كده دورك هيروح، حق صاحبك اللي كنت هتتضحك عليه"
                    );
                  }
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
                  if (WE == "") {
                    setWE(player);
                  } else {
                    alert(
                      "مينفعش تلعب مكان صاحبك ، مش أصول بردو \n و عشان كده دورك هيروح، حق صاحبك اللي كنت هتتضحك عليه"
                    );
                  }
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
                  if (CE == "") {
                    setCE(player);
                  } else {
                    alert(
                      "مينفعش تلعب مكان صاحبك ، مش أصول بردو \n و عشان كده دورك هيروح، حق صاحبك اللي كنت هتتضحك عليه"
                    );
                  }
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
                  if (EA == "") {
                    setEA(player);
                  } else {
                    alert(
                      "مينفعش تلعب مكان صاحبك ، مش أصول بردو \n و عشان كده دورك هيروح، حق صاحبك اللي كنت هتتضحك عليه"
                    );
                  }
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
                  if (SW == "") {
                    setSW(player);
                  } else {
                    alert(
                      "مينفعش تلعب مكان صاحبك ، مش أصول بردو \n و عشان كده دورك هيروح، حق صاحبك اللي كنت هتتضحك عليه"
                    );
                  }
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
                  if (SO == "") {
                    setSO(player);
                  } else {
                    alert(
                      "مينفعش تلعب مكان صاحبك ، مش أصول بردو \n و عشان كده دورك هيروح، حق صاحبك اللي كنت هتتضحك عليه"
                    );
                  }
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
                  if (SE == "") {
                    setSE(player);
                  } else {
                    alert(
                      "مينفعش تلعب مكان صاحبك ، مش أصول بردو \n و عشان كده دورك هيروح، حق صاحبك اللي كنت هتتضحك عليه"
                    );
                  }
                }}
                className=""
              >
                {SE}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* reset btn */}
      <button 
      onClick={() => {
        window.location.reload()
      }} 
      className="reset">
        Reset
      </button>
    </div>
  );
};

export default App;
