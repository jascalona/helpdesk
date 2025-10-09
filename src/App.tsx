import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';

//Componentes
import Estructura from './resources/componentes/Estructura/Estructura';
import Herramientas from './resources/interfaces/herramientas/panel_setting';


function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Estructura />} >
          <Route path='herramientas' element={<Herramientas />} />
        </Route >

      </Routes >
    </>
  )
}

export default App