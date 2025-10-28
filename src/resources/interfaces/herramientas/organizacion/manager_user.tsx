import PersonIcon from '@mui/icons-material/Person';
import '../../../../assets/css/manager_user.css';
import '../../../../assets/css/section_general.css'
import CardUser from './componentes/card_user';

function ManagerUser() {
    return (
        <>
            <div className='referral-program-container'>
                <div className="container-manager">
                    <div className="init-user">
                        <span className='icon-user'>
                            <PersonIcon sx={{ fontSize: 40 }} />
                        </span>
                        <div>
                            <p>Jose Escalona</p>
                            <small>Administrator</small>
                        </div>
                    </div>
                </div>

                <div className="content-sections">


                    <div className="gallery-users">
                        <CardUser id='1' users='10' name='QA' />
                        <CardUser id='2' users='4' name='QA' />
                        <CardUser id='3' users='3' name='QA' />
                        <CardUser id='4' users='1' name='QA' />

                    </div>

                    sudshgdhsghdgsdg

                </div>


            </div>
        </>
    )
}
export default ManagerUser