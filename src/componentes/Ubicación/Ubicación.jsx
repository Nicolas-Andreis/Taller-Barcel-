import React from 'react'
import "./Ubicación.css"
const Ubicación = () => {
    
    return (
        <div>
            <h2 className="subtitle">Ubicación</h2>
            <div className='card-ubicacion'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.1575108892534!2d-62.290608899999995!3d-38.7371476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcebeb42a55f%3A0xf20e21d14fb163fb!2sPac%C3%ADfico%2025%2C%20B8000BXA%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1705297438199!5m2!1ses!2sar"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className='parrafo'>
                    <h3>Bahia Blanca</h3>
                    <p>Calle: Pacifico 25</p>
                    <p>+54 123456789</p>
                </div>
            </div>
        </div>
    );
};

export default Ubicación