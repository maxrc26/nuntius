import '/src/styles/Usuario.css'

import { useState } from 'react'

import { Input } from '/src/components/Input'

export const Usuario = () => {
  const [nombre, setNombre] = useState("");

  const cambiarNombre = () => {
    localStorage.setItem("usuario", nombre);
  }

  return (
    <>
      <h2>Usuario</h2>
      <form>
        <Input texto={"Nombre"} valor={nombre} setter={setNombre} />
        <button onClick={cambiarNombre}>ACEPTAR</button>
      </form>
    </>
  )
}
