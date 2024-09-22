import '/src/styles/Inicio.css'

import imgCarpeta from '/src/assets/carpeta.png'
import { useEffect } from 'react'

const data = [
  {
    id: 1,
    nombre: "YO",
    img: "/src/assets/ejemplo.png",
    color: "FDFD96"
  },
  {
    id: 2,
    nombre: "VOS",
    img: "/src/assets/ejemplo.png",
    color: "C7F3C7",
    funcion: 2
  },
  {
    id: 3,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FFDA89",
    funcion: "https://www.youtube.com/watch?v=WuvhOD-mP8M&list=RDWuvhOD-mP8M&start_radio=1&ab_channel=TaylorSwiftVEVO"
  },
  {
    id: 4,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 5,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 6,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 7,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 8,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 9,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 10,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 11,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 12,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 13,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 14,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  },
  {
    id: 15,
    nombre: "USTED",
    img: "/src/assets/ejemplo.png",
    color: "FF6A00"
  }
]

const Item = ({ nombre, img, color, funcion }) => {
  const handleClick = () => {
    if(typeof(funcion) == "number"){
      // codigo para cargar la carpeta
    }
    else if(typeof(funcion) == "string"){
      window.open(funcion)
    }
    else {
      // codigo para agregarlo al array
    }
  }

  return (
    <div onClick={handleClick} className='tablero-item' style={{ backgroundColor: "#" + color }}>
      <img className='imagen' src={img} />
      <p>{nombre}</p>
      {funcion && <img className='carpeta' src={imgCarpeta} />}
    </div>
  )
}

export const Inicio = () => {

  return (
    <>
      <h2>Inicio</h2>
      <select id='select'>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <div id='xd'>
        <div id='controles'>
          <button>●</button>
          <button>↺</button>
          <div id='contenido'></div>
          <button>▶</button>
          <button>◀</button>
          <button>■</button>
        </div>
        {
          data.map((item) => {
            return <Item key={item.id} nombre={item.nombre} img={item.img} color={item.color} funcion={item.funcion} />
          })
        }
      </div>
    </>
  )
}