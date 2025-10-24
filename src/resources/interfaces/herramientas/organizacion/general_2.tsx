
import React, { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/css/general.css';
import CardEmpresa from './componentes/back_empresa';
import CradAreak from './componentes/back_area';
import CardSubarea from './componentes/back_subarea';
import CardArea from './componentes/back_area';

//Componentes Graficos
import BasicPie from './componentes/ChartPie'
import ArcDesign from './componentes/CharBar'

function General_2() {
    return (
        <>
            <div className="referral-program-container">
                <h1>Diseño Organizacional</h1>
                <p>Administre, diseñe y observe los distintos recursos de helpdesk pone a su disposicion para gestionar los recursos de su organizacion.</p>

                <div className="stats-grid">
                    <div className="stat-card">
                        <BasicPie />
                    </div>
                    <div className="stat-card">
                        <ArcDesign title="Porcentaje de Registros Area" data={12} />

                    </div>
                    <div className="stat-card">
                        <ArcDesign title="Porcentaje de Registros Sub-area" data={28} />
                    </div>
                </div>

                <div className="referral-details">
                    <div className="referral-code-section">
                        <h2>Referencia de Servicios</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, doloremque?</p>
                        <small>Ultimos cambios realizados por:<span className="highlight">jescalona</span></small>
                        <small>(Used one time)</small>
                        <div className="links-services">
                            <ul>
                                <Link to={"/herramientas/subarea"}><li>Administrar Servicios de Empresas</li></Link>
                                <Link to={"/herramientas/area"}><li>Administrar Servicio de area</li></Link>
                                <Link to={"/herramientas/area"}><li>Administrar Servicio de Subarea</li></Link>
                            </ul>
                        </div>
                        <p className="note">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, esse..</p>
                    </div>

                    <div className="how-to-use-section">
                        <h2>Resumen de Registros</h2>
                        <div className="steps-grid">
                            <div className="step-card">
                                <span className="step-icon">📦</span>
                                <p>Cantidad de registros Empresas</p>
                                <p className="step-value"><CardEmpresa /></p>
                            </div>
                            <div className="step-card">
                                <span className="step-icon">📦</span>
                                <p>Cantidad de registros Area</p>
                                <p className="step-value"><CardArea /></p>
                            </div>
                            <div className="step-card">
                                <span className="step-icon">📦</span>
                                <p>Cantidad de registros Sub-Area</p>
                                <p className="step-value"><CardSubarea /></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bloque Otros Programas */}
                <br />
                <div className="other-programs">
                    <h2>Otros funciones</h2>
                    <div className="program-cards-grid">

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
export default General_2;