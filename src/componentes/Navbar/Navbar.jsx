import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import whatsappwhite from "../../imagenes/iconos/whatsapp-white.png";
import facebook from "../../imagenes/iconos/facebook-white.png";
import mail from "../../imagenes/iconos/mail.png";
import ubicacion from "../../imagenes/iconos/ubicacion.png";
import telefono from "../../imagenes/iconos/telefono.png";
import logo from "../../imagenes/logo/LOGO BARCELO.png";
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleWhatsappClick = () => {
        const numeroTelefono = '+542914717914'; // Tu número de teléfono
        const mensaje = 'Hola, estoy estoy en la pagina de taller Barceló ¿Quiero hacer una consulta?';
        const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <div>
            <nav>
                <div className='container-logo'>
                    <Link to="/" className='link'>
                        <img src={logo} alt="logo" />
                        <h2 className='poppins titulo-mobile'>BARCELÓ GERARDO </h2>
                    </Link>
                </div>

                <div className='container-list'>
                    <ul className={`poppins nav_items ${isOpen && "open"}`}>
                        <li><NavLink to="/" className='link' onClick={closeMenu}>inicio</NavLink></li>
                        <li><NavLink to="/servicios" className='link' onClick={closeMenu}>servicios</NavLink></li>
                        <li><NavLink to="/nosotros" className='link' onClick={closeMenu}>nosotros</NavLink></li>
                        <li><NavLink to="/ubicación" className='link' onClick={closeMenu}>ubicación</NavLink></li>
                    </ul>
                </div>

                <div className={`nav_toggle ${isOpen && "open"}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <div className='second-navbar'>
                <div className='container-redes'>
                    <Link className='link' onClick={handleWhatsappClick}><img src={whatsappwhite} alt="whatsapp" className='img-secondbar' /></Link>
                    <Link className='link'><img src={facebook} alt="facebook" className='img-secondbar' /></Link>
                    <Link className='link'><img src={mail} alt="mail" className='img-secondbar' /></Link>
                </div>
                <div className='container-flex-second-navbar'>
                    <div className='flex-second-navbar'>
                        <img src={ubicacion} alt="ubicación" className='img-secondbar' />
                        <p>Pacífico 25</p>
                    </div>
                    <div className='flex-second-navbar'>
                        <img src={telefono} alt="teléfono" className='img-secondbar' />
                        <p>+54 2914717914 <br />
                        +54 2916463423</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;