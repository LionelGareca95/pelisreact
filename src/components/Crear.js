import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir Pelicula";
    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: "",
    })

    const { titulo, descripcion} = peliState
    const conseguirDatosForm = e => {
        e.preventDefault()

        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        // Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        // Guarda Estado
        setPeliState(peli)
        //Actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, peli]
        })
        // Guardar en el Local Storage o Almacenamiento local
        GuardarEnStorage("pelis", peli)


       
    }
   
    return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <strong>
            {(titulo && descripcion) && "has creado la pelicula: "+titulo}
        </strong>
        
        <form onSubmit={conseguirDatosForm}>
            <input type="text" id="titulo" placeholder="Titulo" name='Titulo'/>
            <textarea id="descripcion" placeholder="Descripción" name='descripcion'></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}

export default Crear