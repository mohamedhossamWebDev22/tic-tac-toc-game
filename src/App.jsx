import { React, useState } from "react";

var player = "";

const App = (props) => {
  const 
    [NW, setNW] = useState(""),[NO, setNO] = useState(""),[NE, setNE] = useState(""),
    [WE, setWE] = useState(""),[CE, setCE] = useState(""),[EA, setEA] = useState(""),
    [SW, setSW] = useState(""),[SO, setSO] = useState(""),[SE, setSE] = useState("");

  const [turn, setturn] = useState("(Imm .. I Don't Know)");

  const btnClicked = () => {
    if (player == "X") {
      player = "O";
    } else {
      player = "X";
    }

    setturn(player);
  };

  const x_won=() => {
    alert('Player X Won :)')
    location.reload(true)
  }
  const o_won=() => {
    alert('Player O Won :)')
    location.reload(true)
  }

  const whoWon = () => {
    console.log('iam here!!');
    if (NW == NO && NE == NO && NW == 'X' ) {
      x_won()
    }
    else if (NW == NO && NE == NO && NW == 'O' ) {
      o_won()
    }

    if (SW == SO && SE == SO && SW == 'X' ) {
      x_won()
    }
    else if (SW == SO && SE == SO && SW == 'O' ) {
      o_won()
    }

    if (NW == WE && SW == WE && WE == 'X' ) {
      x_won()
    }
    else if (NW == WE && SW == WE && WE == 'O' ) {
      o_won()
    }

    if (NE == EA && SE == EA && EA == 'X') {
      x_won()
    }
    else if (NE == EA && SE == EA && EA == 'O') {
      o_won()
    }

    if (CE == EA && WE == EA && EA == 'X') {
      x_won()
    }
    else if (CE == EA && WE == EA && EA == 'O') {
      o_won()
    }

    if (NO == SO && SO == CE && NO == 'X') {
      x_won()
    }
    else if (NO == SO && SO == CE && NO == 'O') {
      o_won()
    }

    if (NW == CE && SE == CE && CE == 'X') {
      x_won()
    }
    else if (NW == CE && SE == CE && CE == 'O') {
      o_won()
    }

    if (NE == CE && SW == CE && CE == 'X') {
      x_won()
    }
    else if (NE == CE && SW == CE && CE == 'O') {
      o_won()
    }
  }

  return (
    <div>
      <h1>The Next Turn:
        Player <a className="neon">{turn}</a>
      </h1>

      {/* squares to play*/}
      <table onClick={() =>{whoWon()}}>
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
        location.reload(true)
      }} 
      className="reset">
        Reset
      </button>

      <button 
      onClick={() => {
        whoWon()
      }} 
      className="done">
        Done
      </button>

      <h1 className="neon_B">Made By:
      <br/>Mohamed Hossam</h1>
    </div>
  );
};

export default App;
