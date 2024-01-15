import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css';
import whatsapp from "../../imagenes/iconos/whatsapp.png";
import Servicios from '../Servicios/Servicios';
import Marcas from '../Marcas/Marcas';
import Ubicación from '../Ubicación/Ubicación';
import Nosotros from '../Nosotros/Nosotros';
import Certificaciones from '../Certificaciones/Certificaciones';
import Footer from '../Footer/Footer';

const Home = () => {
  const numeroTelefono = '+542914717914'; // Tu número de teléfono

  const handleWhatsappClick = () => {
    const mensaje = 'Hola, estoy en la página de taller Barceló. ¿Quiero hacer una consulta?';
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['servicios', 'marcas', 'ubicacion', 'nosotros', 'certificaciones', 'footer'];
  
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;
  
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (rect.top <= windowHeight * 0.75) {
          element.classList.add('fade-in');
        }
      });
    };
  
    // Agrega el evento de scroll
    window.addEventListener('scroll', handleScroll);
  
    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div className='fondoImagen'>
        <div className='container-title'>
          <h1>Mecánica Barceló</h1>
        </div>
        <div className='container-pagos'>
          <h3>Todos los medios de pago</h3>
        </div>
        <a href={`tel:${numeroTelefono}`} className='flotante-whatsapp' onClick={handleWhatsappClick}>
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
      <Servicios />
      <Marcas />
      <Ubicación />
      <Nosotros />
      <Certificaciones />
      <Footer />
    </div>
  );
};

export default Home;