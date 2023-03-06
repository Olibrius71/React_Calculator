import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/AppHeader.jsx";
import CalcContainer from "./components/CalcContainer.jsx";
import Presentation from "./components/Presentation.jsx";
import Calculator from "./components/Calculator.js";
import CalcDescription from "./components/CalcDescription";

function App() {
  return (
      <div className="App">
        <AppHeader />
        <CalcContainer>
            <Presentation />
            <CalcDescription />
            <Calculator />
        </CalcContainer>
      </div>
  )
  ;
}

export default App;
