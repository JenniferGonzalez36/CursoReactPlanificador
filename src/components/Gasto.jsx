import React from 'react';
import { formatDate } from '../helpers';

import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';

const iconDictionary = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
}

const Gasto = ( {spend} ) => {
    const { category, name, quantity, id, date } = spend;
    return (
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
                <img src={iconDictionary[category]} alt="Icono representativo a la categoría" />
                <div className='descripcion-gasto'>
                    <p className='categoria'>{category}</p>
                    <p className='nombre-gasto'>{name}</p>
                    <p className='fecha-gasto'>Agregado el: <span>{formatDate(date)}</span></p>
                </div>
            </div>
            <p className='cantidad-gasto'>${quantity}</p>
        </div>
    )
}

export default Gasto