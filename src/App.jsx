import { React, useState }from 'react';

const App = (props) => {
  const 
  [NW, setNW] = useState(''),[NO, setNO] = useState(''),[NE, setNE] = useState(''),
  [WE, setWE] = useState(''),[CE, setCE] = useState(''),[EA, setEA] = useState(''),
  [SW, setSW] = useState(''),[SO, setSO] = useState(''),[SE, setSE] = useState('');

  return (
    <div>
      <table>
        <tr>
          <td>
            <button>{NW}</button>
          </td>
          <td>
            <button>{NO}</button>
          </td>
          <td>
            <button>{NE}</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>{WE}</button>
          </td>
          <td>
            <button>{CE}</button>
          </td>
          <td>
            <button>{EA}</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>{SW}</button>
          </td>
          <td>
            <button>{SO}</button>
          </td>
          <td>
            <button>{SE}</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
