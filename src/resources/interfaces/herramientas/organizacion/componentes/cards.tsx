import CardBack from './back_empresa';
import CardArea from './back_area';

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
                <p className="stat-value"></p>
            </div>
            <div className="stat-card">
                <p className="stat-label">Tasa De Reembolso</p>
                <p className="stat-value">4%</p>
            </div>
        </>
    )

}

export default CardResumen