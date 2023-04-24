import React from 'react'
import { useState } from 'react';
import Mensaje from './Mensaje';

function NuevoPresupuesto({ budget, setBudget, setIsValidBudget }) {

    const [message, setMessage] = useState("");

    const handleBudget = (e) => {
        e.preventDefault();

        if(!Number(budget) || Number(budget) < 0){
            setMessage("No es un presupuesto válido");
            return;
        }
        setMessage("");
        setBudget(Number(budget));
        setIsValidBudget(true);

    }


    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        className='nuevo-presupuesto'
                        type="text" placeholder='Añade tu Presupuesto' value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                    />
                </div>
                <input type="submit" value="Añadir"/>

                {message && <Mensaje type="error">{message}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto