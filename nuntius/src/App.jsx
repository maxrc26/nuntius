import '/src/App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Nav } from '/src/pages/Nav.jsx'
import { Footer } from '/src/pages/Footer.jsx'

import { Nightmode } from '/src/components/Nightmode'

import { Inicio } from '/src/pages/Inicio.jsx'
import { Usuario } from '/src/pages/Usuario.jsx'
import { Ajustes } from '/src/pages/Ajustes.jsx'

function Main() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/usuario" element={<Usuario />} />
        <Route exact path="/ajustes" element={<Ajustes />} />
      </Routes>
      <Nightmode hidden={true} />
    </main>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
