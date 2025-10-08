import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';

//Componentes
import Estructura from './resources/componentes/Estructura';

function App() {

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Estructura />} />
      </Routes >
    </>
  )
}

export default App
