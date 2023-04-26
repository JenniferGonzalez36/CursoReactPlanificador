import { useState } from 'react';
import Mensaje from './Mensaje';
import CloseButton from '../img/cerrar.svg';

const Modal = ({ 
  setModal, 
  modalAnimation, 
  setModalAnimation, 
  saveSpend 
}) => {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [message, setMessage] = useState("");

  const hiddeModal = () => {
    setModalAnimation(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if([name, quantity, category].includes('')){
      setMessage("Todos los campos son obligatorios");
      setTimeout(() => {setMessage("")}, 3000)
      return;
    }

    saveSpend({name, quantity, category});
  };

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CloseButton} alt="Cerrar modal" onClick={hiddeModal}/>
      </div>
      
      <form 
        className={`formulario ${modalAnimation ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>
        {message && <Mensaje type="error">{message}</Mensaje>}

        <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input 
            id="nombre"
            type="text"
            placeholder='Añade el Nombre del Gasto'
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor="cantidad">Cantidad</label>
          <input 
            id="cantidad"
            type="number"
            placeholder='Añade la cantidad del gasto: Ej. 300'
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />

          <label htmlFor="categoria">Categoría</label>
          <select 
            name="categoria" id="categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
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