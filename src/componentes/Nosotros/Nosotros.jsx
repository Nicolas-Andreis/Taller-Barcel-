import React from 'react'
import "./Nosotros.css"
import nosotros from "../../imagenes/taller/pexels-cottonbro-studio-4481942.jpg"
import { useEffect } from 'react'
const Nosotros = () => {
    
    return (
        <div>
            <h2 className="subtitle">Nosotros</h2>
            <div className='card-nosotros'>
                <div>
                    <h3>Gerardo Barceló</h3>
                    <p className='parrafo-nosotros'>Gerardo Barceló es un taller mecánico con una sólida
                        trayectoria de más de 30 años en el sector automotriz.
                        Reconocidos por nuestra experiencia y profesionalismo,
                        somos una empresa familiar compuesta por un equipo
                        de padre e hijo dedicados a brindar servicios de alta
                        calidad. Aceptamos todos los medios de pago para
                        mayor comodidad de nuestros clientes. Nuestra
                        filosofía se centra en la excelencia técnica y el trato
                        personalizado, donde cada vehículo es atendido con el
                        máximo cuidado y atención. Destacamos por nuestra
                        eficiencia, honestidad y compromiso con la satisfacción
                        del cliente, ofreciendo soluciones integrales a las necesidades
                        de tu automóvil. En Gerardo Barceló, nos distinguimos
                        por la pasión y el compromiso con nuestro trabajo, brindando
                        un servicio confiable y de confianza que supera las expectativas
                        de quienes</p>
                </div>
                <div>
                    <img src={nosotros} alt="" className='img-nosotros'/>
                </div>
            </div>
        </div>
    )
}

export default Nosotros