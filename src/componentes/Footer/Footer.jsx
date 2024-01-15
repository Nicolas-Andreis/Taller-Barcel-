import React from 'react'
import logo from "../../imagenes/logo/LOGO BARCELO.png"
import "./Footer.css"
import telefono from "../../imagenes/footer/telefono.png"
import mapa from "../../imagenes/footer/mapa.png"
import certificado from "../../imagenes/footer/certificado.png"


const Footer = () => {
    return (
        <div className='element'>
            <div className='container-footer'>
                <div className='container-logo-footer'>
                    <img src={logo} alt="" />
                </div>
                <div className='flex'>
                    <img src={mapa} alt="" />
                    <div>
                        <p>pacifico 25</p>
                        <p>Bahia Blanca</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={telefono} alt="" />
                    <p>+54 2914717914</p>
                </div>
                <div className='flex'>
                    <img src={certificado} alt="" />
                    <div>
                        <p>Garantia y seguridad</p>
                        <p>Calidad certificada</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer