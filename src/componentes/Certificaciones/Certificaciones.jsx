import { useState } from 'react';
import "./Certificaciones.css"
import imagen1 from "../../imagenes/diplomas/1.png"
import imagen2 from "../../imagenes/diplomas/2.png"
import imagen3 from "../../imagenes/diplomas/3.png"
import imagen4 from "../../imagenes/diplomas/4.png"
import imagen5 from "../../imagenes/diplomas/5.png"
import imagen6 from "../../imagenes/diplomas/6.png"
import imagen7 from "../../imagenes/diplomas/7.png"

const Certificaciones = () => {
    const [imagenClicada, setImagenClicada] = useState(null);

    const handleClick = (imagen) => {
        setImagenClicada(imagen === imagenClicada ? null : imagen);
    };

    return (
        <div >
            <h2 className="subtitle ocultar">Certificaciones</h2>
            <div className="container-diplomas">
                {[
                    imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7
                ].map((imagen, index) => (
                    <img
                        key={index}
                        src={imagen}
                        alt=""
                        className={imagen === imagenClicada ? 'imagen-clicada' : ''}
                        onClick={() => handleClick(imagen)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Certificaciones;