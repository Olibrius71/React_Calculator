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
    //console.table(state);
    if (newNumber!==".") {
        if (state.currentNumber != null) {
            return {...state, currentNumber: state.currentNumber.toString() + newNumber.toString()};
        }
        return {
            ...state,
            currentNumber: newNumber
        }
    }
}

/*
function handleOperator(state, operatorType) {
    if (operatorType !== "=") {
        return {
            ...state,
            operator: operatorType
        }
    }
    switch (operatorType) {
        case "+":
            return ;
        case "-":
            return
        case "x":
            return
        case "÷":
            return
        case "=":
            return
        default:
            console.log("ERREUR OPERATOR");
    }
    console.log("addOpp: ");
    console.table(state);
    console.table(operatorType);
}
*/


function handleEquals(state) {
    if (state.currentNumber == null || state.previousNumber == null) {
        console.log("UN DES 2 NOMBRES N'A PAS DE VALEUR");
        return;
    }
    console.table(state);
    switch (state.operator) {
        case "+":
            return {
                ...state,
                currentNumber: parseFloat(state.previousNumber) + parseFloat(state.currentNumber)
            }
    }
}

function reducer(state, {type, payload}) {
    switch (type) {
        case ACTIONS.NEW_NUMBER:
            return addNumber(state, payload.payload.digit);
        case ACTIONS.OPERATOR:
            return {
                ...state,
                previousNumber: state.currentNumber,
                currentNumber: null,
                operator: payload.payload.operatorType
            }
        case ACTIONS.RESET:
            return {
                ...state,
                currentNumber: null
            }
        case ACTIONS.DELETE:
            if (state.currentNumber != null) {
                return {
                    ...state,
                    currentNumber: state.currentNumber.slice(0, -1)
                }
            }
            break;
        case ACTIONS.EQUALS:
            handleEquals(state);
        default:
            console.log("ERREUR REDUCER: ");
            console.table(state);
            console.table(type);
            console.table(payload);
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
                <div className="calculation">{state.currentNumber}</div>
                <div className="result"></div>
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
            <button className="span-two" onClick={() => dispatch({type: "Equals"})}>=</button>
        </div>
    );
}

export default Calculator;