
import React, { useRef, useState, useCallback } from 'react';
import TableArea from './componentes/table_area';
import '../../../../assets/css/section_general.css';


//Componentes
import { Link } from 'react-router-dom';
import CreateArea from './componentes/create_area';
import BasicPie from './componentes/Charts/ChartPie'


const Area: React.FC = () => {

    return (
        <>

            <div className="referral-program-container">
                <div className="referral-header">
                    <h2>Diseño de Area</h2>
                    <p>Administre, diseñe y observe los distintos recursos de helpdesk pone a su disposicion para gestionar los recursos de su organizacion.</p>
                </div>

                <div className="content-sections">
                    {/* Sección de Código de Referencia */}
                    <div className="referral-code-section">
                        <h3>Nueva Area</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quis!</p>
                        <CreateArea />
                    </div>

                    {/* Sección List empresas */}
                    <div className="how-to-use-section">
                        <BasicPie width={320} height={320} />
                    </div>
                </div>

                <TableArea />


                {/* Bloque Otros Programas */}
                <div className="other-programs">
                    <h2>Otros funciones</h2>
                    <div className="program-cards-grid">

                        <div className="program-card">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Area" className="program-image" />
                            <p><strong>Crear Empresa:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, beatae!</p>
                            <Link to={"/herramientas/general"} className="read-more">Leer Más →</Link>
                        </div>

                        <div className="program-card">
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" alt="Sub-area" className="program-image" />
                            <p><strong>Crear Sub-area:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, beatae!</p>
                            <Link to={"/herramientas/subarea"} className="read-more">Leer Más →</Link>
                        </div>


                        <div className="rocket-card">
                            <a href="#" className="join-rocket-program">Nuevo Componente <strong> +</strong></a>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    );
}
export default Area;