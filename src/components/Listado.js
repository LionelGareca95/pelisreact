import React, { useEffect, useState } from 'react'
import Edicion from './Edicion';


const Listado = ({listadoState, setListadoState}) => {


    const  [editar, setEditar] = useState(0)
    useEffect( () => {
        conseguirPeliculas()

    }, [] );

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

     setListadoState(peliculas);
     return peliculas;
    }

 const borrarPeli = (id) => {
    // Conseguir peliculas almacenadas en el local storage
        let pelis_almacenadas = conseguirPeliculas();

    // Filtrar esas peliculpas para que se elimine del array la que no quiero
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id) );

    // Actualizar estado del listado

    setListadoState(nuevo_array_pelis)

    // Actualizar los datos en el LocalStorage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis) )
}

  return (
    <>
    {listadoState != null ? listadoState.map(peli => {
        return (
            <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button className="edit" onClick={ () => { setEditar(peli.id)} }>Editar</button>
            <button className="delete" onClick={ () => borrarPeli(peli.id) }>Borrar</button>

            {/* aparece formulario editar */} 
            {editar === peli.id && (
                <Edicion peli={peli}
                conseguirPeliculas={conseguirPeliculas}
                setEditar={setEditar}
                setListadoState={setListadoState}
                />
            )}
        </article>
        )
    })
        : <h2> No Hay peliculas para mostrar</h2>
    }
    
    </>
  )
}

export default Listado