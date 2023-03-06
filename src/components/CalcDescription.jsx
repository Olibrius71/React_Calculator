import React, {useEffect, useLayoutEffect, useState} from "react";
import {motion} from "framer-motion";
import "./CalcDescription.css";

function CalcDescription() {
    const [showFirst, setShowFirst] = useState(true);
    const [showSecond, setShowSecond] = useState(true);
    
    const [showRespawn, setShowRespawn] = useState(false);
    const [respawn, setRespawn] = useState(false);
    
    useLayoutEffect(() => {
        if (!showFirst || !showSecond) {
            setShowRespawn(true);
        }
        else {
            setShowRespawn(false);
        }
    }, [showFirst, showSecond]);
    
    useLayoutEffect(() => {
        setShowFirst(true);
        setShowSecond(true);
        setRespawn(false)
    }, [respawn])
    
    return (
        <div as={motion.div} className="calc-descriptions-container d-flex flex-row justify-content-evenly my-5">
            {showRespawn &&
                <button className="respawn-button text-light align-self-center text-wrap p-1" onClick={() => setRespawn(true)}>Remontrer Descriptions</button>
            }
            
            {showFirst &&
            <div component={motion.div}
                 
                 className="calc-description-div bg-dark p-3 d-flex flex-column justify-content-between">
                <div className="calc-description-text text-light text-break fs-5">Pour gérer les résultats affichés par la calculatrice, le hook <strong>useReducer</strong> a été utilisé et est mis à jour à chaque fois qu'on appuie sur un bouton de la calculatrice</div>
                *<button className="calc-description-button align-self-center text-light" onClick={() => setShowFirst(!showFirst)}>CACHER</button>
            </div>
            }
            {showSecond &&
            <div as={motion.div} className="calc-description-div bg-dark p-3 d-flex flex-column justify-content-between">
                <div className="calc-description-text text-light text-break fs-5">Pour gérer les résultats affichés par la calculatrice, le hook <strong>useReducer</strong> a été utilisé et est mis à jour à chaque fois qu'on appuie sur un bouton de la calculatrice</div>
                <button className="calc-description-button align-self-center text-light" onClick={() => setShowSecond(!showSecond)}>CACHER</button>
            </div>
            }
        </div>
    )
}

export default CalcDescription;
