import React from "react";
import {motion} from "framer-motion";
import "./CalcDescription.css";
function CalcDescription() {
    return (
        <div as={motion.div} className="calc-descriptions-container d-flex flex-row justify-content-evenly my-5">
            <div as={motion.div} className="calc-description-div bg-dark p-3 justify-content-center">
                <div className="calc-description-text text-light text-break fs-5">Pour gérer les résultats affichés par la calculatrice, le hook <strong>useReducer</strong> a été utilisé et est mis à jour à chaque fois qu'on appuie sur un bouton de la calculatrice</div>
            </div>
            
            <div as={motion.div} className="calc-description-div bg-dark p-3 justify-content-center">
                <div className="calc-description-text text-light text-break fs-5">Pour gérer les résultats affichés par la calculatrice, le hook <strong>useReducer</strong> a été utilisé et est mis à jour à chaque fois qu'on appuie sur un bouton de la calculatrice</div>
            </div>
        </div>
    )
}

export default CalcDescription;
