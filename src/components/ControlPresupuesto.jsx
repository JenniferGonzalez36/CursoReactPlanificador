import React from 'react'
import { useState, useEffect } from 'react';

const ControlPresupuesto = ({ budget, spends }) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = spends.reduce((total, spend) => spend.quantity + total, 0);
        setSpent(totalSpent);
        setAvailable(budget-totalSpent);
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
                <p>Grafica aquí</p>
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