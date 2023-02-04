import "./Calculator.css";
import {useReducer} from "react";


const OPERATIONS = {
    NEWNUMBER: "NewNumber",
    ADD: "Add",
    SUBSTRACT: "Substract",
    MULTIPLY: "Multiply",
    DIVIDE: "Divide",
    RESET: "Reset",
    DELETE: "Delete",
    POINT: "Point",
    EQUALS: "Equals"
}



function reducer(state, action) {
    switch (action.type) {
        case OPERATIONS.NEWNUMBER:
            console.log("newNum -> "+action.newNumber);
            break;
        case OPERATIONS.ADD:
            console.log("add");
            break;
        case OPERATIONS.SUBSTRACT:
            console.log("sub");
            break;
        case OPERATIONS.MULTIPLY:
            console.log("mul");
            break;
        case OPERATIONS.DIVIDE:
            console.log("divid");
            break;
        case OPERATIONS.RESET:
            console.log("reset");
            break;
        case OPERATIONS.DELETE:
            console.log("delete");
            break;
        case OPERATIONS.POINT:
            console.log("point");
            break;
        case OPERATIONS.EQUALS:
            console.log("equals");
            break;
        default:
            console.log("ERREUR REDUCER");
    }
}


function Calculator() {
    const [state, dispatch] = useReducer(reducer, {});
    
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="calculation">CALCULATION</div>
                <div className="result">RESULT</div>
            </div>
            <button className="span-two" onClick={() => dispatch({type: "Reset"})}>AC</button>
            <button onClick={() => dispatch({type: "Delete"})}>DEL</button>
            <button onClick={() => dispatch({type: "Divide"})}>÷</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 1})}>1</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 2})}>2</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 3})}>3</button>
            <button onClick={() => dispatch({type: "Multiply"})}>x</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 4})}>4</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 5})}>5</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 6})}>6</button>
            <button onClick={() => dispatch({type: "Add"})}>+</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 7})}>7</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 8})}>8</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 9})}>9</button>
            <button onClick={() => dispatch({type: "Substract"})}>-</button>
            <button onClick={() => dispatch({type: "Point"})}>.</button>
            <button onClick={() => dispatch({type: "NewNumber", newNumber: 0})}>0</button>
            <button className="span-two" onClick={() => dispatch({type: "Equals"})}>=</button>
        </div>
    );
}

export default Calculator;