import React  from 'react'
import './App.css'
function App() {
  // let nombre = 'pepe'
  // let dinero = 20
  return (
    <div className="container">
      <h1>Registro</h1>
      <form>
        <label htmlFor='nombre'>Nombre</label>
        <input type="text" placeholder='Ingresa tu nombre'/>
        <label htmlFor='apellido'>Apellido</label>
        <input type="text" placeholder='Ingresa tu apellido'/>
        <label htmlFor='email'>Email</label>
        <input type="text" placeholder='Ingresa tu email'/>
        <label htmlFor='telefono'>Telefono</label>
        <input type="text" placeholder='Ingresa tu telefono'/>
        <label htmlFor='password'>Password</label>
        <input type="text" placeholder='Ingresa tu password'/>
        <label htmlFor='confirmar password'>Confirma tu password</label>
        <input type="text" placeholder='confirma tu password'/>
      </form>
    </div>
  )
}
export default App;