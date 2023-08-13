import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

function Header({
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget,
  spends,
  setSpends
}) {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        <h2 className="developer">~ Por: Jennifer González ~</h2>
        <a href="https://jg36software.com/my-software.php?item=24-react" className="return-button">⬅ Regresar a mi página</a>

        {isValidBudget ? (
            <ControlPresupuesto 
              budget={budget} 
              setBudget={setBudget}
              spends={spends}
              setSpends={setSpends}
              setIsValidBudget={setIsValidBudget}
            />
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