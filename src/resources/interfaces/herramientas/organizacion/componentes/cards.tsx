import { useState } from "react";

function CardResumen() {

    return (
        <>
            <div className="stat-card">
                <p className="stat-label">Ganancias</p>
                <p className="stat-value">$23.980</p>
            </div>
            
            <div className="stat-card">
                <p className="stat-label">Clientes</p>
                <p className="stat-value">$2.400</p>
            </div>
            <div className="stat-card">
                <p className="stat-label">Valor Promedio</p>
                <p className="stat-value">$48</p>
            </div>
            <div className="stat-card">
                <p className="stat-label">Tasa De Reembolso</p>
                <p className="stat-value">4%</p>
            </div>
        </>
    )

}

export default CardResumen