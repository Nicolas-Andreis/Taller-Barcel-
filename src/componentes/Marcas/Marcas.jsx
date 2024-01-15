import "./Marcas.css"
import audi from "../../imagenes/marcas/Audi.png"
import bmw from "../../imagenes/marcas/bmw.png"
import chery from "../../imagenes/marcas/CHERY.png"
import chevrolet from "../../imagenes/marcas/CHEVROLET.png"
import citroen from "../../imagenes/marcas/CITROEN.png"
import dodge from "../../imagenes/marcas/DODGE.png"
import fiat from "../../imagenes/marcas/FIAT.png"
import ford from "../../imagenes/marcas/FORD.png"
import honda from "../../imagenes/marcas/HONDA.png"
import hyundai from "../../imagenes/marcas/HYUNDAI.png"
import jeep from "../../imagenes/marcas/JEEP.png"
import kia from "../../imagenes/marcas/kia.png"
import mercedes from "../../imagenes/marcas/Mercedes.png"
import mitsubishi from "../../imagenes/marcas/MITSUBISHI.png"
import peugeot from "../../imagenes/marcas/PEUGEOT.png"
import renault from "../../imagenes/marcas/RENAULT.png"
import seat from "../../imagenes/marcas/SEAT.png"
import suzuki from "../../imagenes/marcas/SUZUKI.png"
import toyota from "../../imagenes/marcas/TOYOTA.png"
import volkswagen from "../../imagenes/marcas/VOLKSWAGEN.png"
import { useEffect } from "react"

const Marcas = () => {
    useEffect(() => {
        const handleScroll = () => {
          const element = document.getElementById('marcas-container');
          if (!element) return;
    
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
    
          if (rect.top <= windowHeight * 0.75) {
            element.classList.add('fade-in');
          }
        };
    
        // Agrega el evento de scroll
        window.addEventListener('scroll', handleScroll);
    
        // Limpia el evento al desmontar el componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <div id="marcas-container" className='element scroll-fade'>
            <h2 className="subtitle ELEM">Taller multimarca Bahia Blanca</h2>
            <div className='container-marcas animation-container'>
                <img src={audi} alt="" />
                <img src={bmw} alt="" />
                <img src={chery} alt="" />
                <img src={chevrolet} alt="" />
                <img src={citroen} alt="" />
                <img src={dodge} alt="" />
                <img src={fiat} alt="" />
                <img src={ford} alt="" />
                <img src={honda} alt="" />
                <img src={hyundai} alt="" />
                <img src={jeep} alt="" />
                <img src={kia} alt="" />
                <img src={mercedes} alt="" />
                <img src={mitsubishi} alt="" />
                <img src={peugeot} alt="" />
                <img src={renault} alt="" />
                <img src={seat} alt="" />
                <img src={suzuki} alt="" />
                <img src={toyota} alt="" />
                <img src={volkswagen} alt="" />
            </div>
        </div>
    )
}

export default Marcas