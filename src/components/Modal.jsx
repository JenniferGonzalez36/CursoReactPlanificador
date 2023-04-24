import React from 'react'
import CloseButton from '../img/cerrar.svg';

const Modal = ({ setModal, modalAnimation, setModalAnimation }) => {

  const hiddeModal = () => {
    setModalAnimation(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CloseButton} alt="Cerrar modal" onClick={hiddeModal}/>
      </div>
      
      <form className={`formulario ${modalAnimation ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>

        <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input 
            id="nombre"
            type="text"
            placeholder='Añade el Nombre del Gasto'
          />

          <label htmlFor="cantidad">Cantidad</label>
          <input 
            id="cantidad"
            type="number"
            placeholder='Añade la cantidad del gasto: Ej. 300'
          />

          <label htmlFor="categoria">Categoría</label>
          <select name="categoria" id="categoria">
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
          
          <input type="submit" value="Añadir gasto"/>

        </div>
      </form>
    </div>
  )
}

export default Modal