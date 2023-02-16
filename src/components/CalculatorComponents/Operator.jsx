import React from "react";
import ACTIONS from "../Calculator";

export default function Digit({dispatch, operatorType}) {
    return (
        <button onClick={
            () => dispatch({type: ACTIONS.OPERATOR, payload: {operatorType}  })
        }
        >{operatorType}</button>
    );
}