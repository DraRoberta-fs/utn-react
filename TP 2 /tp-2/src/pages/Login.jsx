export default function Login() {
    return (
      <div>
        <h2>Iniciar sesión</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required /><br/>
          <input type="password" placeholder="Contraseña" required /><br/>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
  