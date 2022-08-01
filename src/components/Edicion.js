import React, {useState} from 'react'

const Edicion = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar Pelicula"

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        // Conseguir el target del evento 
        let target = e.target;
        // Buscar el indice del objeto de la pelicular a actualizar

        const pelis_almacenadas = conseguirPeliculas()
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        // Crear objeto con ese id de ese index, con titulo y descripcion del formulario
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }
        // Actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada;

       // Guardar el nuevo array de objetos en el local Storage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
       // Actualizar Estados
       setListadoState(pelis_almacenadas)
       setEditar(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type="text" 
            name='titulo' 
            className='titulo_editado' 
            defaultValue={peli.titulo} />
            <textarea 
                name='descripcion'
                defaultValue={peli.descripcion}
                className="descripcion_editada"/>

            <input type="submit"  className='editar' value="Actualizar"/>
        </form>
    </div>
  )
}

export default Edicion