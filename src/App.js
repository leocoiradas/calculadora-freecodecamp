import './App.css';
import './components/Row';
import './components/Button';
import Row from './components/Row';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
function App() {
  const calculator = [[1, 2, 3, '+'], [4, 5, 6, '-'], [7, 8, 9, '*'], ['=', 0, '.', '/']]
  const createButtons = (arr) => {
    const arrButtons = []
      for (let i = 0; i < arr.length; i++) {
        arrButtons.push(Row(arr[i]))
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
        {createButtons(calculator)}
      </div>
    </div>
  );
}

export default App;
