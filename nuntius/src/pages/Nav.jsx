import '/src/styles/Nav.css'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import imgUsuario from '/src/assets/usuario.png'
import imgAjustes from '/src/assets/ajustes.png'

export const Nav = () => {
  const navigate = useNavigate();
  const [main, setMain] = useState();
  const [usuario, setUsuario] = useState(localStorage.getItem("usuario") || "Pedrito");
  const [desplegarNav, setDesplegarNav] = useState(true);

  const handleDesplegar = () => {
    setDesplegarNav(!desplegarNav);
  }

  useEffect(() => {
    if (main != null) {
      if (desplegarNav) {
        main.classList.remove("desplegada");
        main.classList.add("replegada");
      }
      else {
        main.classList.remove("replegada");
        main.classList.add("desplegada");
      }
    }
  }, [desplegarNav])

  useEffect(() => {
    setMain(document.querySelector("main"));
  }, [])

  return (
    <nav className={desplegarNav ? undefined : "navMin"}>
      <h1 onClick={() => navigate('/')}>PAGINA</h1>
      <p>Bienvenido {usuario}</p><br />
      <ul>
        <li onClick={() => navigate('/')}><img src={imgUsuario} /><h4>Inicio</h4></li>
        <li onClick={() => navigate('/usuario')}><img src={imgUsuario} /><h4>Usuario</h4></li>
        <li onClick={() => navigate('/ajustes')}><img src={imgAjustes} /><h4>Ajustes</h4></li>
      </ul>
      <button onClick={handleDesplegar} id='botonDesplegar'>{desplegarNav ? "◀" : "▶"}</button>
    </nav>
  )
}