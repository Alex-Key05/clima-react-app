import React from 'react'
import PropTypes from 'prop-types'
import { calvinToCelcius } from '../helper'

const Clima = ({resultado}) => {

    const { name, main } = resultado

    if(!name) return null

    return (
        <div className="card-panel white col s-12">
           <div className="black-text">
           <h2>El clima de {name} es: </h2>
           <p className="temperatura">{calvinToCelcius(main.temp)}<span>&#x2103;</span></p>
           <p>La temperatura máxima del día es: {calvinToCelcius(main.temp_max)}<span>&#x2103;</span></p> 
           <p>La temperatura mínima del día es: {calvinToCelcius(main.temp_min)}<span>&#x2103;</span></p> 
           <p>La humedad es: {main.humidity}%</p>
           </div>
        </div>
    )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima
