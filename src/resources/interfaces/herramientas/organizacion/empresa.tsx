
import React, { useRef, useState, useCallback } from 'react';
import '../../../../assets/css/section_general.css';


//Componentes
import CardResumen from './componentes/cards';
import CreateEmpresa from './componentes/create_empresa';
import ListEmpresas from './componentes/crad_empresas';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import BasicPie from './componentes/Charts/ChartPie'


// Definición del Icono (Mejor usar un componente separado)
const StepIcon: React.FC = () => (
    <div className="step-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 15H9V11H7V15H5V9H7V7H9V9H11V7H13V9H15V7H17V9H19V11H17V15H15V11H13V15H11ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4Z" fill="currentColor" />
        </svg>
    </div>
);


// Componente principal en TSX
const general: React.FC = () => {
    // Referencia para acceder al elemento input del código
    const codeInputRef = useRef<HTMLInputElement>(null);

    return (
        <>

            <div className="referral-program-container">
                <div className="referral-header">
                    <h2>Diseño de Empresa</h2>
                    <p>Administre, diseñe y observe los distintos recursos de helpdesk pone a su disposicion para gestionar los recursos de su organizacion.</p>
                </div>

                <div className="content-sections">
                    {/* Sección de Código de Referencia */}
                    <div className="referral-code-section">
                        <h3>Nueva Empresa</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quis!</p>
                        <CreateEmpresa />
                    </div>

                    {/* Sección List empresas */}
                    <div className="how-to-use-section">
                        <BasicPie width={320} height={320} />
                    </div>
                </div>

                <ListEmpresas />



                {/* Bloque Otros Programas */}
                <br />
                <div className="other-programs">
                    <h2>Otros funciones</h2>
                    <div className="program-cards-grid">

                        <Link to={"/herramientas/empresa"} >
                            <div className="program-card">
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Area" className="program-image" />
                                <p><strong>Crear Empresa:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, beatae!</p>

                            </div>
                        </Link>


                        <Link to={"/herramientas/area"} >
                            <div className="program-card">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" alt="Area" className="program-image" />
                                <p><strong>Crear Area:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, beatae!</p>

                            </div>
                        </Link>

                        <Link to={"/herramientas/subarea"} >
                            <div className="program-card">
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" alt="Sub-area" className="program-image" />
                                <p><strong>Crear Sub-area:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, beatae!</p>
                                Leer Más →
                            </div>
                        </Link>


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
export default general;