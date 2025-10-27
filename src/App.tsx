import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';

//Componentes
import Estructura from './resources/componentes/Estructura/Estructura';
import Herramientas from './resources/interfaces/herramientas/panel_setting';
import General from './resources/interfaces/herramientas/organizacion/general';
import Area from './resources/interfaces/herramientas/organizacion/area';
import Subarea from './resources/interfaces/herramientas/organizacion/subarea';
import Empresa from './resources/interfaces/herramientas/organizacion/empresa';
import ManagerUser from './resources/interfaces/herramientas/organizacion/manager_user';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Estructura />} >

          <Route path='herramientas' element={<Herramientas />} >
            <Route path='general' element={<General />} />
            <Route path='empresa' element={<Empresa />} />
            <Route path='area' element={<Area />} />
            <Route path='subarea' element={<Subarea />} />

            <Route path='usermanager' element={<ManagerUser />} />



          </Route>

        </Route >
      </Routes >
    </>
  )
}

export default App