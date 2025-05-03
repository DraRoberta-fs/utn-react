import React, {useState} from 'react'


const ESTADOS__DISPONIBLES={
    NO_COMPRADO: 'NO_COMPRADO',
    COMPRADO: 'COMPRADO',
    CARGANDO: 'CARGANDO,'
}

const BotonComprar = () => {
    const [estado_boton, setEstadoBoton] = useState(ESTADOS__DISPONIBLES.CARGANDO)

    const comprar = () => {
      setEstadoBoton(ESTADOS__DISPONIBLES.CARGANDO)
    }

    let content 
    if (estado_boton === ESTADOS__DISPONIBLES.COMPRADO){
        content = <button disabled>Comprado</button>
    }
    else if (estado_boton === ESTADOS__DISPONIBLES.CARGANDO){
        content =<button>Cargando...</button>
    }
    else{
        content= <button>Comprar</button>
    }
  return (
    <div> {content} </div>
  )
}

export default BotonComprar