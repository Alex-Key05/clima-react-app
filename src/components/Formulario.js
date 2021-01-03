import { useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error'

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    const [error, setError] = useState(false)

    const handleChange = e => {
        setBusqueda({ ...busqueda, [e.target.name] : e.target.value })
    }

    const formSubmit = e => {
        e.preventDefault();
        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        setConsultar(true)
        setBusqueda(busqueda)
    }

    const { ciudad, pais } = busqueda

    return (
        <form
            onSubmit={formSubmit}
        >
            { error ? <Error mensaje="Todos los campos son obligatorios" /> : null }
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad" // para que le de un efecto
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">--Seccione un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País</label>
            </div>
            <button 
                className="btn waves-effect waves-light input-field col s12 yellow btn-large btn-block accent-4" 
                type="submit" 
                name="action"                
                >Consultar clima</button>
        </form>
    )
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired        
}

export default Formulario
