
import React, { useRef, useState, useCallback } from 'react';
import '../../../assets/css/section_general.css';

// 1. Definición del Icono (Mejor usar un componente separado)
const StepIcon: React.FC = () => (
    <div className="step-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 15H9V11H7V15H5V9H7V7H9V9H11V7H13V9H15V7H17V9H19V11H17V15H15V11H13V15H11ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4Z" fill="currentColor" />
        </svg>
    </div>
);


// 2. Componente principal en TSX
const general: React.FC = () => {
    // Referencia para acceder al elemento input del código
    const codeInputRef = useRef<HTMLInputElement>(null);
    // Estado para mostrar confirmación de copiado
    const [copyStatus, setCopyStatus] = useState<'COPIAR' | '¡COPIADO!' | 'Error'>('COPIAR');

    // Función para manejar el evento de copiado
    const handleCopy = useCallback(async () => {
        if (codeInputRef.current) {
            try {
                // Seleccionar y copiar el texto del input
                codeInputRef.current.select();
                codeInputRef.current.setSelectionRange(0, 99999);
                await navigator.clipboard.writeText(codeInputRef.current.value);

                // Actualizar estado para mostrar confirmación
                setCopyStatus('¡COPIADO!');
                setTimeout(() => setCopyStatus('COPIAR'), 2000); // Volver al estado original después de 2s

            } catch (err) {
                console.error('Error al intentar copiar: ', err);
                setCopyStatus('Error');
                setTimeout(() => setCopyStatus('COPIAR'), 3000);
            }
        }
    }, []);

    return (
        <div className="referral-program-container">
            <div className="referral-header">
                <h2>Programa de referencias</h2>
                <p>Realice un seguimiento y encuentre todos los detalles sobre nuestro programa de referidos, sus estadísticas e ingresos.</p>
            </div>

            {/* Bloque de Estadísticas */}
            <div className="stats-grid">
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
            </div>

            <div className="content-sections">
                {/* Sección de Código de Referencia */}
                <div className="referral-code-section">
                    <h3>Código de referencia</h3>
                    <p>Copie el código a continuación en su proveedor registrado.</p>
                    <div className="code-info">
                        <p className="generated-date">Generado hace 23 días por softuidesk123</p>
                        <p className="generated-date">(Usado una vez)</p>
                    </div>
                    <div className="code-input-group">
                        <input
                            type="text"
                            value="soft-ui-dashboard-vmek092"
                            readOnly
                            className="referral-code-input"
                            ref={codeInputRef} // Asignamos la referencia
                        />
                        {/* Asignamos el manejador de evento onClick */}
                        <button className="copy-button" onClick={handleCopy}>
                            {copyStatus}
                        </button>
                    </div>
                    <p className="no-codes-message">No puedes generar códigos.</p>
                    <p className="contact-message">Contáctanos para generar más enlaces de referencias.</p>
                </div>

                {/* Sección Cómo utilizar */}
                <div className="how-to-use-section">
                    <h3>Cómo utilizar</h3>
                    <p>Integra tu código de referencia en 3 sencillos pasos.</p>
                    <div className="steps-grid">
                        <div className="step-card">
                            <StepIcon />
                            <p className="step-description">1. Crea y valida tu enlace de referencia y obtén</p>
                            <p className="step-reward">$ 100</p>
                        </div>
                        <div className="step-card">
                            <StepIcon />
                            <p className="step-description">2. Por cada pedido que realices obtendrás</p>
                            <p className="step-reward">10 %</p>
                        </div>
                        <div className="step-card">
                            <StepIcon />
                            <p className="step-description">3. Consigue que otros amigos generen enlaces y obtengan</p>
                            <p className="step-reward">$ 500</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bloque Otros Programas */}
            <div className="other-programs">
                <h2>Otros programas</h2>
                <div className="program-cards-grid">
                    <div className="program-card">
                        <img src="https://via.placeholder.com/300x150" alt="Program Image 1" className="program-image" />
                        <p>Una el #hashtag en una foto en redes sociales y obtén $10 por cada compra que realices.</p>
                        <a href="#" className="read-more">Leer Más →</a>
                    </div>
                    <div className="program-card">
                        <img src="https://via.placeholder.com/300x150" alt="Program Image 2" className="program-image" />
                        <p>Envía el enlace de invitación a 10 amigos y obtén un cupón del 50% para usar en cualquier compra.</p>
                        <a href="#" className="read-more">Leer Más →</a>
                    </div>
                    <div className="rocket-card">
                        <img src="https://via.placeholder.com/100x100" alt="Rocket" className="rocket-image" />
                        <a href="#" className="join-rocket-program">Únase Al Programa Rocketship →</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default general;