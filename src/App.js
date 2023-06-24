import './App.css';
import Row from './components/Row';
import Screen from  './components/Screen';
import ClearButton from './components/Clear';
import { useState } from 'react';
import {evaluate} from 'mathjs'
import freeCodeCampLogo from './images/freecodecamp-logo.png';
function App() {
  const calculator = [[1, 2, 3, "+"],[4, 5, 6, "-"],[7, 8, 9, "*"],["=", 0, ".", "/"]];
  const [input, setInput] = useState("");
  const insertInput = (val) => {
    setInput(input + val);
    }
    const result = () => {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert("Por favor ingrese valores para realizar los cálculos.");
      }
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
        {Row(calculator, insertInput, result)}
        <ClearButton setClear={()=>setInput('')}>Clear</ClearButton>
      </div>
    </div>
  );
}

export default App;
