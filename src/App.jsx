
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./componentes/Navbar/Navbar"
import Home from './componentes/Home/Home';
import Servicios from './componentes/Servicios/Servicios';
import Nosotros from './componentes/Nosotros/Nosotros';
import Ubicación from './componentes/Ubicación/Ubicación';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/ubicación' element={<Ubicación />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App