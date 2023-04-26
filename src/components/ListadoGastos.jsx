import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ spends, setEditSpend, deleteSpend }) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{spends.length ? 'Gastos' : 'No hay gastos aún'}</h2>

        {spends.map( spend => (
            <Gasto
                key={spend.id}
                spend={spend} 
                setEditSpend={setEditSpend}
                deleteSpend={deleteSpend}
            />
        ))}
        
    </div>
  )
}

export default ListadoGastos