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




          {/* --- C. Controles de Apuesta Inferiores y Tabla de Jugadores --- */}
          <div className="footer-panels">

            {/* Panel Izquierdo: Controles de Apuesta */}
            <div className="bet-input-panel">
              <div className="bet-mode">
                <button className="mode-btn active">Manual</button>
                <button className="mode-btn">Auto</button>
              </div>

              <div className="input-group">
                <label>Bet Amount</label>
                <div className="input-with-actions">
                  <input type="number" value="3,584" readOnly />
                  <div className="actions">
                    <button>1.2x</button>
                    <button className="active">2.9x</button>
                    <button>Max</button>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label>Auto Cashout</label>
                <div className="input-with-actions">
                  <input type="number" value="100.00x" readOnly />
                  <div className="actions">
                    <button>1.2x</button>
                    <button>2.9x</button>
                    <button>10.00x</button>
                  </div>
                </div>
              </div>

              <button className="place-bet-btn">Place Bet</button>
            </div>

            {/* Panel Derecho: Tabla de Jugadores */}
            <div className="live-bets-panel">
              <div className="panel-header">
                <span>2.7K Players</span>
                <span>$7,242.95</span>
              </div>
              <ul className="bet-list">
                {/* Ejemplo de un elemento de la lista */}
                <li className="bet-item">
                  <span className="player">Zbnaw145</span>
                  <span className="multiplier">2x</span>
                  <span className="amount">$80000</span>
                </li>
                <li className="bet-item">
                  <span className="player">ddfjuek95</span>
                  <span className="multiplier">1.2x</span>
                  <span className="amount">$76000</span>
                </li>
                <li className="bet-item my-bet">
                  <span className="player">dejkal68 (you)</span>
                  <span className="multiplier green">.006%</span> {/* Este parece ser un valor de ganancia en el momento */}
                  <span className="amount">$70000</span>
                </li>
                {/* Más items... */}
              </ul>
            </div>

          </div>
        </main>

        {/* === 2.3. BARRA LATERAL DERECHA (Chat) === */}
        <aside className="sidebar-right chat-panel">
          <div className="chat-header">
            <span>Chat</span>
          </div>
          <div className="chat-messages">
            {/* Mensajes de Chat */}
            <div className="message incoming">
              <span className="username">Zbnaw145</span>
              <span className="time">12:00</span>
              <p>khahayak 10 year kb b mana all ko request ki the</p>
            </div>
            <div className="message outgoing">
              <span className="username">dejkal68 (you)</span>
              <span className="time">12:04</span>
              <p>mujhe bro</p>
            </div>
            {/* ... más mensajes */}
          </div>
          <div className="chat-input-area">
            <input type="text" placeholder="Type a message..." />
            <button className="send-btn">
              <SendIcon fontSize="small" />
            </button>
          </div>
        </aside>

      </div>
    </div>
  )
}
export default Estructura