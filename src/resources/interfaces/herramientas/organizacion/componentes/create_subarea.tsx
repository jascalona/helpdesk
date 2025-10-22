import { useState } from 'react';
import axios from 'axios';
import Inputs from './input';
import { Link } from 'react-router-dom';


// Importaciones de estilos e iconos
import '../../../../../assets/css/input_organization.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ErrorIcon from '@mui/icons-material/Error';

import AdsClickIcon from '@mui/icons-material/AdsClick';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


const API_URL = 'http://localhost:8080/basetomee/subarea/create';

// Definicion de la estructura de los datos del formulario para tipado
interface FormData {
    nb_subarea: string;
    co_area: string;
}

function CreateArea() {
    // Estado para almacenar los valores del formulario
    const [formData, setFormData] = useState<FormData>({
        nb_subarea: '',
        co_area: '',
    });

    // Estado para la clave del formulario. 
    const [formKey, setFormKey] = useState(0);

    // Estados para manejar el feedback del usuario
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    // Función genérica para manejar los cambios en cualquier input
    const handleChange = (name: keyof FormData, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // limpiar los mensajes de éxito/error cuando el usuario empieza a escribir
        if (error) setError(null);
        if (success) setSuccess(false);
    };

    // FUNCIÓN AJUSTADA PARA LLAMAR A LA API (POST)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reiniciar estados de feedback
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        // Validar que todos los campos no estén vacíos antes de enviar
        if (!formData.nb_subarea || !formData.co_area) {
            setError('Todos los campos son obligatorios.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post(API_URL, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('Empresa creada con éxito:', response.data);

            setSuccess(true);

            // Limpiar el formulario después de un registro exitoso
            setFormData({
                nb_subarea: '',
                co_area: ''
            });

            // Incremento de la clave para forzar el reinicio de los Inputs
            setFormKey(prevKey => prevKey + 1);

        } catch (err) {
            // Manejo de errores de Axios
            console.error('Error al crear la empresa:', err);

            let errorMessage = 'Error de red o el servidor no responde.';
            if (axios.isAxiosError(err) && err.response) {
                errorMessage = err.response.data.message || `${err.response.data}: Intenta más tarde.`;
            }

            setError(errorMessage);
            setSuccess(false);

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="plantilla">
                <div className="formulario" style={{marginRight: '15px'}}>
                    <form onSubmit={handleSubmit} key={formKey}>
                        {/* -------------------- Inputs -------------------- */}

                        <Inputs
                            label="Nombre de la Subarea"
                            placeholder="Por ejemplo, QA"
                            required={true}
                            errorMessage="El nombre debe tener al menos 2 caracteres y no contener símbolos."
                            pattern="^[A-Za-z0-9\s]{2,10}$"
                            value={formData.nb_subarea}
                            onChange={(v) => handleChange('nb_subarea', v)}
                        />

                        <Inputs
                            label="Codigo de Area"
                            placeholder="Por ejemplo, 3"
                            required={true}
                            errorMessage="El estado debe tener un rango comprendido de 1 a 10 caracteres y no contener símbolos."
                            pattern="^[A-Za-z0-9\s]{1,10}$"
                            value={formData.co_area}
                            onChange={(v) => handleChange('co_area', v)}
                        />

                        {/* ----------------- Feedback al Usuario ----------------- */}
                        {isLoading && <p>Cargando, por favor espera...</p>}
                        {error && <p style={{ color: 'red', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><ErrorIcon sx={{ color: 'red', textAlign: 'center' }} /> {error}</p>}
                        {success && <p style={{ color: 'green', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><CheckBoxIcon sx={{ color: 'green' }} /> Empresa creada exitosamente!</p>}
                        <br />
                        <button className='crear-button'
                            type="submit"
                            // Deshabilitar el boton mientras se está cargando
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creando...' : 'Crear'}
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}
export default CreateArea;