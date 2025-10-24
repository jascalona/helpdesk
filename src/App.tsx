import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';

//Componentes
import Estructura from './resources/componentes/Estructura/Estructura';
import Herramientas from './resources/interfaces/herramientas/panel_setting';
import General from './resources/interfaces/herramientas/organizacion/general_2';
import Area from './resources/interfaces/herramientas/organizacion/area';
import Subarea from './resources/interfaces/herramientas/organizacion/subarea';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Estructura />} >
          <Route path='herramientas' element={<Herramientas />} >
            <Route path='general' element={<General />} />
            <Route path='area' element={<Area />} />
            <Route path='subarea' element={<Subarea />} />

          </Route>
        </Route >
      </Routes >
    </>
  )
}

export default App