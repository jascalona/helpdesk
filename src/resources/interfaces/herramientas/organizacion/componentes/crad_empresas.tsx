import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';

interface Empresa {
    co_emp: string;
    nb_emp: string;
    st_estado: string; 
    fe_registro: string;
}

function ListEmpresas() {
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const API_URL = "http://localhost:8080/basetomee/empresas/listar"

    useEffect(() => {
        const fetchEmpresas = async () => {
            try {
                const response = await axios.get<Empresa[]>(API_URL);
                setEmpresas(response.data);
                setError(null);
            } catch (err) {
                console.error("Error al obtener las empresas:", err);
                setError("Error al cargar los datos de la API.");
            } finally {
                setLoading(false);
            }
        };

        fetchEmpresas();
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    // Verificar si no hay registros para mostrar un mensaje
    if (empresas.length === 0) {
        return <p>No hay registros disponibles para mostrar.</p>;
    }

    return (
        <>
            <h2>Total de Registros: {empresas.length}</h2>
            
            {/* El .map() itera sobre el array de empresas */}
            <div className="steps-grid">
                {empresas.map((empresa) => (
                    <div className="step-card" key={empresa.co_emp}>
                        <HomeIcon />
                        <p className="step-description">{empresa.nb_emp}: {empresa.st_estado}</p>
                        <p className="step-reward">{empresa.fe_registro}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListEmpresas;