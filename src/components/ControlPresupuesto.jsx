import React from 'react'
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ budget, spends }) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const totalSpent = spends.reduce((total, spend) => spend.quantity + total, 0);
        const totalAvailable = budget - totalSpent;

        const newPercentage = ((budget - totalAvailable) / budget * 100).toFixed(2);

        setAvailable(totalAvailable);
        setPercentage(newPercentage);
        setTimeout(() => {
            setSpent(totalSpent);
        }, 1500);
    }, [spends]);

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: "#3B82F6",
                        trailColor: "#F5F5F5",
                        textColor: "#3B82F6"
                    })}
                    value={percentage}
                    text={`${percentage}% Gastado`}
                />
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatQuantity(budget)}
                </p>
                <p>
                    <span>Disponible: </span> {formatQuantity(available)}
                </p>
                <p>
                    <span>Gastado: </span> {formatQuantity(spent)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto