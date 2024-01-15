import escaneos from "../../imagenes/servicios/escaneos.png"
import filtro from "../../imagenes/servicios/filtros.png"
import frenos from "../../imagenes/servicios/frenos.png"
import suspensión from "../../imagenes/servicios/suspension.png"
import embreagues from "../../imagenes/servicios/embreagues.png"
import motor from "../../imagenes/servicios/motor.png"
import tren from "../../imagenes/servicios/tren delantero.png"
import distribución from "../../imagenes/servicios/distribución.png"

import "./Servicios.css"
const Servicios = () => {
    
  return (
    <div >
        <h2 className="subtitle">Nuestros servicios</h2>
        <div className='container-servicios'>
        <div className='card-servicios'>
            <img src={escaneos} alt="computadora" />
            <h3>Escaneos computarizados</h3>
            <button>ver más</button>
        </div>

        <div className='card-servicios'>
            <img src={distribución} alt="distribución" />
            <h3>Distribución</h3>
            <button>ver más</button>
        </div>

        <div className='card-servicios'>
            <img src={filtro} alt="filtro" />
            <h3>Cambios de aceite y filtro</h3>
            <button>ver más</button>
        </div>

        <div className='card-servicios'>
            <img src={tren} alt="tren delantero" />
            <h3>Tren delantero</h3>
            <button>ver más</button>
        </div>

        <div className='card-servicios'>
            <img src={frenos} alt="frenos" />
            <h3>Frenos</h3>
            <button>ver más</button>
        </div>

        <div className='card-servicios'>
            <img src={suspensión} alt="suspensión" />
            <h3>Suspensión</h3>
            <button>ver más</button>
        </div>

        <div className='card-servicios'>
            <img src={embreagues} alt="embreagues" />
            <h3>Embreagues</h3>
            <button>ver más</button>
        </div>

        <div className='card-servicios'>
            <img src={motor} alt="motor" />
            <h3>Motor</h3>
            <button>ver más</button>
        </div>

        
        </div>
        

    </div>
  )
}

export default Servicios