// Servicios.jsx
import React, { useState } from 'react';
import Modal from '../Modal/Modal';  // Ajusta la ruta según la ubicación de tu componente Modal
import "./Servicios.css";

// Importa tus imágenes aquí
import escaneos from "../../imagenes/servicios/escaneos.png";
import filtro from "../../imagenes/servicios/filtros.png";
import frenos from "../../imagenes/servicios/frenos.png";
import suspensión from "../../imagenes/servicios/suspension.png";
import embreagues from "../../imagenes/servicios/embreagues.png";
import motor from "../../imagenes/servicios/motor.png";
import tren from "../../imagenes/servicios/tren delantero.png";
import distribución from "../../imagenes/servicios/distribución.png";

const Servicios = () => {
    const [modalOpen, setModalOpen] = useState(null);

    const servicios = [
        {
            id: 1,
            img: escaneos,
            title: "Escaneos computarizados",
            descripcion: "Realizamos chequeos: | -controlamos parametros | -corroboramos estado de bateria y carga de alternador |  -leemos codigos de fallas",
        },
        {
            id: 2,
            img: distribución,
            title: "Distribución",
            descripcion: "-controlamos puesta a punto | -reemplazamos correa y tensores de distribuciones| -reemplazamos bomba de agua| -reemplazamos correas exteriores de aire acondicionado/alternador y/o aire acondicionado",
        },
        {
            id: 3,
            img: filtro,
            title: "Cambios de aceite y filtro",
            descripcion: "-reemplazo aceite motor y otros fluidos (direccion hidrahulica / aceite caja Trasmisión/ agua y refrigerante )| -filtros (aceite - aíre - combustible - habitaculos)| -control (luces , frenos , limpia parabrisas etc)",
        },
        {
            id: 4,
            img: tren,
            title: "Tren delantero",
            descripcion: "revisión y o reemplazo: |-parrilas| -suspencion| -rotulas| -extremos direccion| -precap| -bujes barra estabilizadoras| -bieletas",
        },
        {
            id: 5,
            img: frenos,
            title: "Frenos",
            descripcion: "control y/o reemplazos:| -liquidos de frenos| -bombas frenos| -pastillas y discos| -cilindros y cintas| -flexibles| -registros",
        },
        {
            id: 6,
            img: suspensión,
            title: "Suspensión",
            descripcion: "control y/o reemplazo:| -amortiguadores delanteros / traseros| -espirales delanteros/ traseros| -casoletas y bujes",
        },
        {
            id: 7,
            img: embreagues,
            title: "Embragues",
            descripcion: "control y/o reemplazo:| -bomba embrague| -crapodina| -placas y disco| -volante| -cables| -registros",
        },
        {
            id: 8,
            img: motor,
            title: "Motor",
            descripcion: "control y/o reparaciones:| -rectificaciones: tapa cilindro / motores| -reemplazo levas / botadores| -reemplazo bombas aceite| -mantenimientos varios (mangueras - termostato- bomba nafta- inyectores - bobinas - bujias - sensores -etc)",
        },
        // Puedes agregar más servicios aquí...
    ];

    const openModal = (servicioId) => {
        setModalOpen(servicioId);
    };

    const closeModal = () => {
        setModalOpen(null);
    };

    return (
        <div>
            <h2 className="subtitle">Nuestros servicios</h2>
            <div className='container-servicios'>
                {servicios.map((servicio) => (
                    <div key={servicio.id} className='card-servicios'>
                        <img src={servicio.img} alt={servicio.title} />
                        <h3>{servicio.title}</h3>
                        
                        <button onClick={() => openModal(servicio.id)}>ver más</button>
                    </div>
                ))}
            </div>

            {modalOpen !== null && (
                <Modal servicio={servicios.find((servicio) => servicio.id === modalOpen)} onClose={closeModal} />
            )}
        </div>
    );
};

export default Servicios;