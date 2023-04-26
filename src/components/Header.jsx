import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

function Header({
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget,
  spends
}) {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidBudget ? (
            <ControlPresupuesto budget={budget} spends={spends}/>
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