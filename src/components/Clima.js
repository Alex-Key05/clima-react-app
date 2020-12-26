import { calvinToCelcius } from '../helper'

const Clima = ({ resultado }) => {

    const { name, main } = resultado

    if(!name) return null;

    return (
        <div className="card-panel white col s12">
          <div className="black-text">
            <h2>El clima de la ciudad {name} es:</h2>
            <p className="temperatura">{calvinToCelcius(main.temp)}<span>&#x2103;</span></p>

            <p>Temperatura Máxima: {calvinToCelcius(main.temp_max)}<span>&#x2103;</span></p>

            <p>Temperatura Mínima: {calvinToCelcius(main.temp_min)}<span>&#x2103;</span></p>

            <p>{name} tiene una humedad de: { main.humidity }%</p>

          </div>
        </div>
    )
}

export default Clima
