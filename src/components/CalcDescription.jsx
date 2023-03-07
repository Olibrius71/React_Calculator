import React, {useLayoutEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <div className="container-fluid d-flex flex-row justify-content-evenly position-relative">
            {showRespawn &&
                <button className="respawn-button text-light text-wrap p-1 align-self-center position-absolute" onClick={() => setRespawn(true)}>Faire Réapparaître Descriptions</button>
            }
            
            <div className="calc-descriptions-container d-flex flex-row justify-content-evenly my-5 ">
                <AnimatePresence>
                    {showFirst && (
                        <motion.div
                             initial={{
                                 x: "-2vw",
                                 y: "10vh"
                            }}
                             animate={{
                                 x: 0,
                                 y: 0
                             }}
                             transition={{
                                 duration: 0.8
                             }}
                             exit={{
                                 opacity: 0,
                             }}
                             className="calc-description-div bg-dark p-3 d-flex flex-column justify-content-between"
                             >
                            <div className="calc-description-text text-light text-break fs-5">Pour gérer les résultats affichés par la calculatrice, le hook <strong>useReducer</strong> a été utilisé et est mis à jour à chaque fois qu'on appuie sur un bouton de la calculatrice</div>
                            <button className="calc-description-button align-self-center my-2 text-light" onClick={() => setShowFirst(!showFirst)}>CACHER</button>
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <AnimatePresence>
                    {showSecond && (
                        <motion.div
                            initial={{
                                x: "2vw",
                                y: "10vh"
                            }}
                            animate={{
                                x: 0,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            className="calc-description-div bg-dark p-3 d-flex flex-column justify-content-between">
                            <div className="calc-description-text text-light text-break fs-5">Pour faire disparraître et réapparaître ces div et le bouton de réapparition, les hooks <strong>useState</strong> et <strong>useLayoutEffect</strong> ont été utilisés et sont mis à jour au click sur un des boutons </div>
                            <button className="calc-description-button align-self-center my-2 text-light" onClick={() => setShowSecond(!showSecond)}>CACHER</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default CalcDescription;
