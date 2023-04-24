import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

function Header({budget, setBudget, isValidBudget, setIsValidBudget}) {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidBudget ? (
            <p>Control Presupuesto</p>
        ) : (
            <NuevoPresupuesto 
                budget={budget} setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
            />
        )}

        
    </header>
  )
}

export default Header