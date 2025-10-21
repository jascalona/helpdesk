import CardBack from './back_empresa';
import CardArea from './back_area';
import CardSubarea from './back_subarea';

function CardResumen() {

    return (
        <>


            <div className="stat-card">
                <p className="stat-label">Total de empresas</p>
                <p className="stat-value"><CardBack /></p>
            </div>
            
            <div className="stat-card">
                <p className="stat-label">Total de areas</p>
                <p className="stat-value"><CardArea /></p>
            </div>

            <div className="stat-card">
                <p className="stat-label">Total de sub-areas</p>
                <p className="stat-value"><CardSubarea /></p>
            </div>
            <div className="stat-card">
                <p className="stat-label">Otros</p>
                <p className="stat-value">...</p>
            </div>
        </>
    )

}

export default CardResumen