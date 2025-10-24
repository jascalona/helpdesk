import CardBack from './back_empresa';
import CardArea from './back_area';
import CardSubarea from './back_subarea';
import HomeIcon from '@mui/icons-material/Home';

function CardResumen() {

    return (
        <>

            <div className="section-resumen">
                <div className="card-resumen">
                    <span><HomeIcon sx={{fontSize: 30}}/></span>
                    <p className="label-card">Empresas</p>
                    <p className="value-card"><CardBack /></p>
                </div>

                <div className="card-resumen">
                    <span><HomeIcon /></span>
                    <p className="label-card">Areas</p>
                    <p className="value-card"><CardArea /></p>
                </div>

                <div className="card-resumen">
                    <span><HomeIcon /></span>
                    <p className="label-card">Sub-areas</p>
                    <p className="value-card"><CardSubarea /></p>
                </div>

            </div>
        </>

    )

}

export default CardResumen