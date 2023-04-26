import React from 'react'
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ 
    budget, 
    setBudget,
    spends,
    setSpends,
    setIsValidBudget
}) => {

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

    const handleResetApp = () => {
        const confirmation = confirm('¿Estás seguro de querer reiniciar el presupuesto y los gastos?');

        if(confirmation){
            setSpends([]);
            setBudget(0);
            setIsValidBudget(false);
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage > 100 ? "#dc2626" : "#3B82F6",
                        trailColor: "#F5F5F5",
                        textColor: percentage > 100 ? "#dc2626" : "#3B82F6"
                    })}
                    value={percentage}
                    text={`${percentage}% Gastado`}
                />
            </div>
            <div className='contenido-presupuesto'>
                <button 
                    className='reset-app' 
                    type='button'
                    onClick={handleResetApp}
                >
                    Resetear app
                </button>
                <p>
                    <span>Presupuesto: </span> {formatQuantity(budget)}
                </p>
                <p className={`${available < 0 ? 'negativo' : ''}`}>
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