import React from 'react';
import "./Modal.css"

const Modal = ({ servicio, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
            
            <div className='modal-card'>
            <img src={servicio.img} alt="" />
            
                <h2>{servicio.title}</h2>
                <p>
                            {servicio.descripcion.split('|').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                <button onClick={onClose}> Volver </button>
            </div>
                
                
            </div>
        </div>
    );
};

export default Modal;