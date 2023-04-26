import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ 
  spends, 
  setEditSpend, 
  deleteSpend,
  filter,
  filteredSpends
}) => {
  return (
    <div className='listado-gastos contenedor'>
        {
          filter ? (
            <>
              <h2>{filteredSpends.length ? 'Gastos' : 'No hay gastos aún en esta categoría'}</h2>
              {filteredSpends.map( spend => (
                <Gasto
                    key={spend.id}
                    spend={spend} 
                    setEditSpend={setEditSpend}
                    deleteSpend={deleteSpend}
                />
              ))}
            </> 
          ) : (
            <>
              <h2>{spends.length ? 'Gastos' : 'No hay gastos aún'}</h2>
              {spends.map( spend => (
                <Gasto
                    key={spend.id}
                    spend={spend} 
                    setEditSpend={setEditSpend}
                    deleteSpend={deleteSpend}
                />
              ))}
            </>
          )
        }
    </div>
  )
}

export default ListadoGastos