import { useState } from 'react';
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generateId } from './helpers';
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  const [spends, setSpends] = useState([]);

  const handleNewSpend = () => {
    setModal(true);

    setTimeout(() => {
      setModalAnimation(true);
    }, 300);
  }

  const saveSpend = spend => {
    spend.id = generateId();
    spend.date = Date.now();
    setSpends([...spends, spend]);

    setModalAnimation(false);
    setTimeout(() => {
      setModal(false)
    }, 300);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        budget={budget} setBudget={setBudget} 
        isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget}
        />
      {isValidBudget && (
        <>
          <main>
            <ListadoGastos spends={spends}/>
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto} alt="Icono nuevo gasto" 
              onClick={handleNewSpend}
            />
          </div>
        </>
      )}

      {
        modal && 
          <Modal 
            setModal={setModal} 
            modalAnimation={modalAnimation}
            setModalAnimation={setModalAnimation}
            saveSpend={saveSpend}
          />
      }
      
    </div>
  )
}

export default App
