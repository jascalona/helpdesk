import { Link } from "react-router-dom"
import '../../assets/css/App.css'; // Asumiendo que usarás un archivo CSS para los estilos

// Icons Material UI (Necesitarás más iconos para el encabezado y el juego)
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CasinoIcon from '@mui/icons-material/Casino'; // Icono para 'Casino'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; // Icono para 'Sports'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'; // Icono para 'Lottery'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send'; // Icono para enviar chat

// Sidebar (Para los botones de la izquierda)
import PersonIcon from '@mui/icons-material/Person';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import GroupsIcon from '@mui/icons-material/Groups';




function Estructura() {
  return (
    <div className="container-body">

      {/* ==================== 1. ENCABEZADO (Header) ==================== */}
      <header className="header">
        <div className="logo">
          {/* Reemplaza el texto por un logo o el nombre del sitio (BITPLAY) */}

          <span className="logo-name">HELPDESK</span>
        </div>

        <nav className="header-nav">
          <Link to="/casino" className="nav-link active">
            <CasinoIcon fontSize="small" /> Casino
          </Link>
          <Link to="/sports" className="nav-link">
            <SportsSoccerIcon fontSize="small" /> Sports
          </Link>
          <Link to="/lottery" className="nav-link">
            <ConfirmationNumberIcon fontSize="small" /> Lottery
          </Link>

        </nav>

        <div className="header-actions">
          <div className="balance">
            <span>3,584</span>
          </div>
          <button className="deposit-btn">
            Deposit
          </button>
        </div>
      </header>

      {/* ==================== 2. CONTENIDO PRINCIPAL (Main Layout) ==================== */}
      <div className="main-layout">

        {/* === 2.1. BARRA LATERAL IZQUIERDA (Sidebar) === */}
        <aside className="sidebar-left">

          <Link to="/aboud" className="sidebar-link active">
            <PersonIcon />
          </Link>

          <Link to="/Productos" className="sidebar-link">
            <WidgetsIcon />
          </Link>

          <Link to="/Productos" className="sidebar-link">
            <MultilineChartIcon />
          </Link>

          <Link to="/Productos" className="sidebar-link">
            <DataSaverOffIcon />
          </Link>

          <Link to="/Productos" className="sidebar-link">
            <GroupsIcon />
          </Link>

          {/* Otros enlaces/iconos de la barra lateral izquierda */}
        </aside>

        {/* === 2.2. ÁREA CENTRAL (Main Content) === */}
        <main className="main-content">
          
        </main>



      </div>
    </div>
  )
}
export default Estructura