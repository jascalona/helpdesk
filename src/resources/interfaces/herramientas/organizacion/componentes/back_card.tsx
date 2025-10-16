import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

// No es necesaria la interfaz 'Empresa' si solo vamos a contar

const baseURL = "http://localhost:8080/basetomee/empresas/listar";

function CardBack() {
    // 1. Estado para almacenar solo el conteo de empresas (un número)
    const [conteoEmpresas, setConteoEmpresas] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null); 

    React.useEffect(() => {
        // Tipado de la respuesta de axios como un array de cualquier tipo (o un array de 'any')
        axios.get<any[]>(baseURL) // Usamos 'any[]' porque solo nos interesa la longitud
            .then((response) => {
                // 2. Aplicar el COUNT: Usar la longitud del array de respuesta
                setConteoEmpresas(response.data.length);
                setLoading(false); 
            })
            .catch(err => {
                setError("Error al cargar los datos."); 
                setLoading(false);
                console.error(err);
            });
    }, []);

    // Comprobación y manejo de estado (Carga/Error)
    if (loading) {
        return <div>Cargando el conteo de empresas... ⏳</div>;
    }

    if (error) {
        return <div>{error} ❌</div>;
    }

    // Comprobación de conteo (para el caso de que la API devuelva un array vacío)
    if (conteoEmpresas === null || conteoEmpresas === 0) {
        return <div>No se encontraron empresas. 😞</div>;
    }

    return (
        <div>
            <h2>Total de Registros de Empresas:</h2>
            <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#007bff' }}>
                {conteoEmpresas} 
            </p>
        </div>
    );
}

export default CardBack;