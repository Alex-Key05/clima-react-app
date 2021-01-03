import { useEffect, useState } from "react";
import Clima from "./components/Clima";
import Error from "./components/Error";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, setConsultar] = useState(false);

  const [resultado, setResultado] = useState({});

  const [error, setError] = useState(false)

  const { ciudad, pais } = busqueda;

  useEffect(() => {

    if (consultar) {
      const consultarAPI = async () => {
        const apiKey = "bb78f1c0a92f7fed129b0400deec28fd";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsultar(false) // para hacer busquedas sin recargar
        if(resultado.cod === '404') {
          setError(true)
        } else {
          setError(false)
        }
      };
      consultarAPI();
    }
    // eslint-disable-next-line
  }, [consultar]);

  // Condicion gracias al error 404
  let condicion;
  if(error) {
    condicion = <Error mensaje='Ciudad no encontrada' />
  } else {
    condicion = <Clima resultado={resultado}/>
  }

  return (
    <>
      <Header titulo="Clima React-App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>

            <div className="col m6 s12">
              {condicion}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
