import { Link, Outlet, useLocation } from "react-router-dom"; // 👈 Importamos useLocation
import CardSetting from './componentes/card';
import PersonIcon from '@mui/icons-material/Person';
import GridViewIcon from '@mui/icons-material/GridView';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import GroupsIcon from '@mui/icons-material/Groups';


function Herramientas() {
    // 1. Obtiene la ubicación actual
    const location = useLocation();

    // 2. Comprueba si la ruta actual es exactamente '/herramientas' (la ruta base).
    // Usamos endsWith para manejar URLs como /herramientas/ o /herramientas
    const isBaseRoute = location.pathname.endsWith('/herramientas') || location.pathname.endsWith('/herramientas/');

    // Nota: Si tu ruta base fuera solo '/', usarías: location.pathname === '/' 

    return (
        <>
            {/* 3. Bloque condicional: Solo se renderiza si estamos en la ruta base /herramientas */}
            {isBaseRoute && (
                <>
                    <header className="main-header">
                        <div className="breadcrumbs">
                            <span>Pagina / Herramientas</span>
                            <h2>Panel de Herramientas</h2>
                        </div>
                    </header>


                    <div className="container-card-setting">
                        {/* 4. Todas tus tarjetas de navegación */}
                        <Link to="general">
                            <CardSetting
                                avatarSrc={<PersonIcon />}
                                section="Configuracion General"
                                timeAgo="Diseño Organizacional"
                                recommendation={true}
                                title="En este apartado podra administrar y diseñar distintos recursos de su organizacion"
                                description="A Ricardo le gusta programar en PHP!"
                                salary="Echar un vistazo"
                            />
                        </Link>

                        <CardSetting
                            avatarSrc={<AppsOutageIcon />}
                            section="Componentes"
                            timeAgo="Diseño Organizacional"
                            recommendation={true}
                            title="Gestiona y configura componentes para tus productos o proyectos."
                            description="A Ricardo le gusta programar en PHP!"
                            salary="Echar un vistazo"
                        />

                        <CardSetting
                            avatarSrc={<GridViewIcon />}
                            section="Nuevo Producto"
                            timeAgo="Diseño Organizacional"
                            recommendation={true}
                            title="Integra y configura tu portafolio productos."
                            description="A Ricardo le gusta programar en PHP!"
                            salary="Echar un vistazo"
                        />
                        <Link to={"usermanager"}>
                            <CardSetting
                                avatarSrc={<GroupsIcon />}
                                section="Gestion de Usuarios"
                                timeAgo="Diseño Organizacional"
                                recommendation={true}
                                title="Gestiona usuarios, grupos y solicitudes de acceso."
                                description="A Ricardo le gusta programar en PHP!"
                                salary="Echar un vistazo"
                            />
                        </Link>

                        {/* -------------------------------------- */}
                    </div>
                </>
            )}

            {/* 5. El Outlet SIEMPRE debe estar fuera del condicional 
               para que General se renderice cuando navegas a /herramientas/general */}
            <Outlet />
        </>
    )
}

export default Herramientas;