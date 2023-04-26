import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filtros from './components/Filtros';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generateId } from './helpers';
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  const [spends, setSpends] = useState(
    localStorage.getItem("spends") ? JSON.parse(localStorage.getItem("spends")) : []
    );
  const [editSpend, setEditSpend] = useState({});

  const [filter, setFilter] = useState("");
  const [filteredSpends, setFilteredSpends] = useState([]);

  useEffect(() => {
    if(Object.keys(editSpend).length > 0){
      setModal(true);
    
      setTimeout(() => {
        setModalAnimation(true);
      }, 300);
    }
  }, [editSpend]);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('spends', JSON.stringify(spends) ?? []);
  }, [spends]);

  useEffect(() => {
    if(filter){
      const newFilteredSpends = spends.filter(spend => spend.category === filter);
      
      setFilteredSpends(newFilteredSpends);
    }
  }, [filter]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLS > 0) setIsValidBudget(true);
  }, []);

  const handleNewSpend = () => {
    setModal(true);
    setEditSpend({});

    setTimeout(() => {
      setModalAnimation(true);
    }, 300);
  }

  const saveSpend = spend => {
    if(spend.id){
      const updatedSpends = spends.map(spendState => spendState.id === spend.id ? spend : spendState);
      setSpends(updatedSpends);
      setEditSpend({});
    } else {
      spend.id = generateId();
      spend.date = Date.now();
      setSpends([...spends, spend]);
    }
    setModalAnimation(false);
    setTimeout(() => {
      setModal(false)
    }, 300);
  }

  const deleteSpend = id => {
    const updatedSpends = spends.filter(spend => spend.id !== id);

    setSpends(updatedSpends);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        budget={budget} setBudget={setBudget} 
        isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget}
        spends={spends} setSpends={setSpends}
        />
      {isValidBudget && (
        <>
          <main>
            <Filtros filter={filter} setFilter={setFilter}/>
            <ListadoGastos 
              spends={spends} 
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
              filter={filter}
              filteredSpends={filteredSpends}
            />
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
            editSpend={editSpend}
            setEditSpend={setEditSpend}
          />
      }
      
    </div>
  )
}

export default App
