import React, {useState} from 'react'

const Contador = () => {
    // const [valor_Contador, setContador] = useState{10}(forma recomendable)
    let estado = useState(1)
    let valor_contador = estado[0]
    let setContador = estado[1]
    
    // useState retorna un array de 2 elemntos
    // 1er elemento es el valor de mi estado
    // 2do elemento es el setter o funcion de actualizacion de mi estado
    // la funcion setter nos permite pasarle el valor a actualizara y luego recargara el componente

    const sumar = () => {
      setContador (valor_contador + 1)
      

    }
    const restar =() => {
        setContador (valor_contador - 1)
        

    }
  return (
    <div>
        <button
         onClick={restar}
         disabled={valor_contador === 0}>-</button>
        <span>{valor_contador}</span>
        <button
        onClick={sumar}>+</button>
        
    </div>

  )
}

export default Contador