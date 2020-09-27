import React,{useState} from 'react'
import Error from './Error.js'
import PropTypes from 'prop-types';


const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

  //Error State
  const [ error, guardarError ] = useState(false);


  //Destructuring
  const  { ciudad, pais } = busqueda;

  // Función que coloca los elementos en el state
  const handleChange = e => {
    //Actualizar el State
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  //Cual el usuario da Submit al Form
  const handleSubmit = e => {
    e.preventDefault();

    //Validar
    if(ciudad.trim() === '' || pais.trim() === ''){
      guardarError(true);
      return;
    }
    guardarError(false);

    //Pasarlo al componente Principal
    guardarConsultar(true);
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      { error ? <Error mensaje="Ambos campos son obligatorios"/> : null }
      <div className="input-field col s12">
        <input
         type="text"
         name="ciudad"
         id="ciudad"
         value={ciudad}
         onChange={handleChange}
          />
         <label htmlFor="ciudad">Ciudad:</label>
      </div>
      <div className="input-field col s12">
        <select
          name="pais"
          id="pais"
          value={pais}
          onChange={handleChange}
        >
          <option value=""> -- Seleccione un País --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País: </label>
      </div>
      <div className="input-field col s12">
        <input
         className="waves-effect waves-light btn-large btn-block yellow accent-4"
         type="submit"
         value="Buscar Clima" />
      </div>
    </form>
  )
}
Formulario.propTypes={
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired,
}
export default Formulario
