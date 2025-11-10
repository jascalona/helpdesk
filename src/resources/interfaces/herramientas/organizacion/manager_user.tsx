import PersonIcon from '@mui/icons-material/Person';
import '../../../../assets/css/manager_user.css';
import '../../../../assets/css/section_general.css'


//COMPONENTES
import CardUser from './componentes/card_user';
import TabsUser from './componentes/Tabs_user';


function ManagerUser() {
    const metricsData = [
        { value: "2/3", label: "GESTION " },
        { value: "$165", label: "AVERAGE OFFER" },
        { value: "0", label: "UNPAID CONTRACTS" },
        { value: "4", label: "MISSING ITINERARIES" },
    ];

    // 2. Datos para la información del proyecto inferior
    const projectInfo = [
        { label: "GESTION DE SERVICIOS", value: "30" },
        { label: "INGENIERIA DE SOFTWARE", value: "20" },
        { label: "INFRAESTRUCTURA", value: "3" },
        { label: "GERENCIA", value: "3" },
    ];

    return (
        <>

            <div className="referral-program-container">
                <div className="referral-header">
                    <h2>Gestion Usuarios</h2>
                    <p>Administre, diseñe y observe los distintos recursos de helpdesk pone a su disposicion para gestionar los recursos de su organizacion.</p>
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