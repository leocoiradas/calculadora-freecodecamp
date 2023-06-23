import './App.css';
import Row from './components/Row';
import Screen from  './components/Screen';
import ClearButton from './components/Clear';
import { useState } from 'react';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
function App() {
  const [input, setInput] = useState("");
  const insertInput = (val) => {
    setInput(input + val);
    }
  const calculator = [[1, 2, 3, '+'], [4, 5, 6, '-'], [7, 8, 9, '*'], ['=', 0, '.', '/']]
  const createButtons = (arr) => {
    const arrButtons = []
      for (let i = 0; i < arr.length; i++) {
        arrButtons.push(Row(arr[i], insertInput))
      }
      return(arrButtons)
    }
  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='appContainer'>
        <Screen input = {input}/>
        {createButtons(calculator)}
        <ClearButton setClear={()=>setInput('')}>Clear</ClearButton>
      </div>
    </div>
  );
}

export default App;
