import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';

//Componentes
import Estructura from './resources/componentes/Estructura/Estructura';
import Herramientas from './resources/interfaces/herramientas/panel_setting';
import General from './resources/interfaces/herramientas/organizacion/general';
import Area from './resources/interfaces/herramientas/organizacion/area';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Estructura />} >
          <Route path='herramientas' element={<Herramientas />} >
            <Route path='general' element={<General />} />
            <Route path='area' element={<Area />} />
          </Route>
        </Route >
      </Routes >
    </>
  )
}

export default App