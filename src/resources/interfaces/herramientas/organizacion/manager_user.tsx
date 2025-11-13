import '../../../../assets/css/manager_user.css';
import '../../../../assets/css/section_general.css'
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';


//COMPONENTES
import TabsUser from './componentes/Tabs_user';


function ManagerUser() {
    const metricsData = [
        { value: "20", label: "SOLICITUDES" },
        { value: "10", label: "SOLICITUDES" },
        { value: "5", label: "SOLICITUDES" },
        { value: "104", label: "SOLICITUDES" },
    ];

    // 2. Datos para la información del proyecto inferior
    const projectInfo = [
        { label: "GESTION DE SERVICIOS", value: "30" },
        { label: "INGENIERIA DE SOFTWARE", value: "20" },
        { label: "INFRAESTRUCTURA", value: "3" },
        { label: "GERENCIA", value: "3" },
    ];

    const pages = "Usuarios"

    return (
        <>
            <header className="main-header">
                <div className="header-nav">
                    <a href="#" className="back-link">
                        <span className="icon-back"><ArrowBackIosIcon sx={{ fontSize: 13 }} /></span>
                        <span>Pagina \ {pages}</span>
                    </a>
                </div>

                <div className="header-actions-group">

                    <div className="icon-action chat-icon">
                        <MessageIcon />
                    </div>
                    
                    <div className="icon-action notification-icon">
                        <NotificationsIcon /><span className="badge">2</span>
                    </div>

                    {/* Botones de acción */}
                    <button className="action-button team-button">
                        <span className="icon-team">👤</span>
                        Team
                    </button>
                    <button className="action-button project-button">
                        <span className="icon-plus">+</span>
                        Project
                    </button>

                    {/* Avatar del usuario */}
                    <div className="sesion-user">
                        <Avatar />
                    </div>
                </div>
            </header>

            <div className="referral-program-container">
                <div className="referral-header">
                    <h2>Gestion Usuarios</h2>

                    <div className='h-btn' style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                        <small>Administre, diseñe y observe los distintos recursos de helpdesk pone a su disposicion para gestionar los recursos de su organizacion.</small>
                        <div className="group-btn">
                            <button className='apply-button' style={{ marginRight: 10 }}>+ Proyecto</button>
                            <button className='apply-button'>Componente</button>
                        </div>
                    </div>

                </div>

                <div className="summary-card">
                    {/* Sección de Métricas Superiores */}
                    <div className="metrics-grid">
                        {metricsData.map((item, index) => (
                            // El último item no lleva el separador vertical en la vista de escritorio
                            <div key={index} className={`metric-item ${index < metricsData.length - 1 ? 'has-separator' : ''}`}>
                                <h3>{item.value}</h3>
                                <small>{item.label}</small>
                            </div>
                        ))}
                    </div>

                    {/* Separador horizontal */}
                    <hr className="divider" />

                    {/* Sección de Información del Proyecto Inferior */}
                    <div className="info-grid">
                        {projectInfo.map((item, index) => (
                            <div key={index} className="info-item">
                                <small>{item.label}</small>
                                <span>Users: {item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <br />

                <TabsUser />

            </div>
            <br /><br />
        </>
    );
}
export default ManagerUser