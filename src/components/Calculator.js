import "./Calculator.css";
import {useReducer} from "react";
import Digit from "./CalculatorComponents/Digit";
import Operator from "./CalculatorComponents/Operator"

const ACTIONS = {
    NEW_NUMBER: "NewNumber",
    OPERATOR: "Operator",
    RESET: "Reset",
    DELETE: "Delete",
    POINT: "Point",
    EQUALS: "Equals"
}

function addNumber(state, newNumber) {
    console.log("addNum: ");
    console.log(newNumber);
    return {...state, currentNumber: newNumber};
}

function addOperator(state, operatorType) {
    console.log("addOpp: ");
    console.log(operatorType);
}

function reducer(state, {type, payload}) {
    switch (type) {
        case ACTIONS.NEW_NUMBER:
            return addNumber(state, payload);
        case ACTIONS.OPERATOR:
            return addOperator(state, payload)
        case ACTIONS.RESET:
            console.log("reset");
            break;
        case ACTIONS.DELETE:
            console.log("delete");
            break;
        case ACTIONS.POINT:
            console.log("point");
            break;
        case ACTIONS.EQUALS:
            console.log("equals");
            break;
        default:
            console.log("ERREUR REDUCER: ");
            console.log(state);
            console.log(type);
            console.log(payload);
    }
}


function Calculator() {
    const [state, dispatch] = useReducer(reducer,{
        previousNumber: null,
        currentNumber: null,
        operator: null
    });
    
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="calculation">CALCULATION</div>
                <div className="result">RESULT</div>
            </div>
            <button className="span-two" onClick={() => dispatch({type: "Reset"})}>AC</button>
            <button onClick={() => dispatch({type: "Delete"})}>DEL</button>
            <Operator operatorType="÷" dispatch={(operatorType) => dispatch({type: "Operator", payload: operatorType})}/>
            <Digit digit="1" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Digit digit="2" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Digit digit="3" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Operator operatorType="x" dispatch={(operatorType) => dispatch({type: "Operator", payload: operatorType})}/>
            <Digit digit="4" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Digit digit="5" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Digit digit="6" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Operator operatorType="+" dispatch={(operatorType) => dispatch({type: "Operator", payload: operatorType})}/>
            <Digit digit="7" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Digit digit="8" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Digit digit="9" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Operator operatorType="-" dispatch={(operatorType) => dispatch({type: "Operator", payload: operatorType})}/>
            <Digit digit="." dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Digit digit="0" dispatch={(digit) => dispatch({type: "NewNumber", payload: digit})}/>
            <Operator operatorType="=" dispatch={(operatorType) => dispatch({type: "Operator", payload: operatorType})}/>
        </div>
    );
}

export default Calculator;