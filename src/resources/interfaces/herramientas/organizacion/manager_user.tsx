import PersonIcon from '@mui/icons-material/Person';
import '../../../../assets/css/manager_user.css';
import '../../../../assets/css/section_general.css'


//COMPONENTES
import CardUser from './componentes/card_user';
import TabsUser from './componentes/Tabs_user';


function ManagerUser() {
    return (
        <>

            <div className="referral-program-container">
                <div className="referral-header">
                    <h2>Gestion Usuarios</h2>
                    <p>Administre, diseñe y observe los distintos recursos de helpdesk pone a su disposicion para gestionar los recursos de su organizacion.</p>
                </div>

                <TabsUser />



            </div>
            <br /><br />
        </>
    );
}
export default ManagerUser