import React from "react";
import ACTIONS from "../Calculator";


export default function Digit({dispatch, digit}) {
    return (
        <button onClick={
            () => dispatch({type: ACTIONS.NEW_NUMBER, payload: {digit}  })
        }
        >{digit}</button>
    );
}

