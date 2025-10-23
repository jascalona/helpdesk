import { useState } from 'react';
import axios from 'axios';
import Inputs from './input';

// Importaciones de estilos e iconos
import '../../../../../assets/css/input_organization.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ErrorIcon from '@mui/icons-material/Error';


const API_URL = 'http://localhost:8080/basetomee/subarea/create';

interface FormData {
    nb_subarea: string;
    co_area: number | ''; 
}

function CreateArea() {
    const [formData, setFormData] = useState<FormData>({
        nb_subarea: '',
        co_area: '' // Inicializado como cadena vacía para que el input funcione correctamente
    });

    // Estado para la clave del formulario. 
    const [formKey, setFormKey] = useState(0);

    // Estados para manejar el feedback del usuario
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    // MODIFICACION: Función genérica para manejar los cambios en cualquier input
    const handleChange = (name: keyof FormData, value: string) => {
        setFormData(prevData => {
            let newValue: string | number = value;

            // Lógica de conversión: Si el campo es 'co_area', intenta convertirlo a número
            if (name === 'co_area') {
                // Si el valor es una cadena vacía, mantenla como cadena vacía
                if (value === '') {
                    newValue = '';
                } else {
                    // Intenta convertir a entero (asumiendo que co_area es un código entero)
                    const parsedValue = parseInt(value, 10);
                    // Solo actualiza si es un número válido. Si no lo es, se ignora el cambio o se mantiene el valor original
                    newValue = isNaN(parsedValue) ? prevData.co_area : parsedValue;
                }
            }

            return {
                ...prevData,
                [name]: newValue
            };
        });
        
        // limpiar los mensajes de éxito/error cuando el usuario empieza a escribir
        if (error) setError(null);
        if (success) setSuccess(false);
    };

    //  MODIFICACION: FUNCIÓN AJUSTADA PARA LLAMAR A LA API (POST)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reiniciar estados de feedback
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        // Validar que todos los campos no estén vacíos antes de enviar
        // Se valida que co_area no sea cadena vacía y que sea un número
        if (!formData.nb_subarea || formData.co_area === '' || typeof formData.co_area !== 'number') {
            setError('Todos los campos son obligatorios y el Código de Área debe ser un número.');
            setIsLoading(false);
            return;
        }

        try {
            // El objeto 'formData' ya tiene co_area como un número, listo para enviar
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
                co_area: '' // Limpiado a cadena vacía para reiniciar el input
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
                            errorMessage="El Código de Área debe ser un número entero válido (1 a 10 dígitos)."
                            // Se recomienda usar un patrón más simple para números o el 'type="number"' en el componente `Inputs`
                            pattern="^[0-9]{1,10}$" 
                            // Convertir el número a cadena para el input (si Inputs no lo hace internamente)
                            value={String(formData.co_area)}
                            onChange={(v) => handleChange('co_area', v)}
                        />

                        {/* ----------------- Feedback al Usuario ----------------- */}
                        {isLoading && <p>Cargando, por favor espera...</p>}
                        {error && <p style={{ color: 'red', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><ErrorIcon sx={{ color: 'red', textAlign: 'center' }} /> {error}</p>}
                        {success && <p style={{ color: 'green', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><CheckBoxIcon sx={{ color: 'green' }} /> Subárea creada exitosamente!</p>}
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