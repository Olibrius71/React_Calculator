import './App.css';
import AppHeader from "./components/AppHeader.js";
import CalcContainer from "./components/CalcContainer.js";
import Presentation from "./components/Presentation.js";
import Calculator from "./components/Calculator.js";

function App() {
  return (
      <div className="App">
        <AppHeader />
        <CalcContainer>
            <Presentation />
            <Calculator />
        </CalcContainer>
      </div>
  )
  ;
}

export default App;
