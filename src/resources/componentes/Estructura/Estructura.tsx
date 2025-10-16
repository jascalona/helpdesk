import { Link, Outlet } from "react-router-dom";

//Icon sidebar
import PersonIcon from '@mui/icons-material/Person';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import SettingsIcon from '@mui/icons-material/Settings';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';


function Estructura() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span style={{ fontSize: 20, fontWeight: 600, }}>Helpdesk</span>
        </div>
        <nav className="navigation">
          <ul>
            <li className="active">
              <Link to={"/Para ti"}>
                <PersonIcon className="menu-icon" /> Para ti
              </Link>
            </li>
            <li>
              <Link to={"/Solicitudes"}>
                <ConfirmationNumberIcon className="menu-icon" /> Solicitudes
              </Link>
            </li>
            <li>
              <Link to={"/Productos"}>
                <WidgetsIcon className="menu-icon" /> Productos
              </Link>
            </li>
            <li>
              <Link to={"/Indicadores"}>
                <MultilineChartIcon className="menu-icon" /> Indicadores
              </Link>
            </li>
            <li>
              <Link to={"/Reportes"}>
                <DataSaverOffIcon className="menu-icon" /> Reportes
              </Link>
            </li>

            <br /><br />

            <li>
              <Link to={"/herramientas"}>
                <SettingsIcon className="menu-icon" /> Herramientas
              </Link>
            </li>

          </ul>
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="main-content">
        {/* ¡Aquí se renderizaran los componentes sub-rutas! */}
        <Outlet />

      </main>
    </div>
  );

};

export default Estructura