import { useState } from "react";
import axios from "axios";
import React from "react";


const areaURL = "http://localhost:8080/basetomee/area/list";

function CardArea() {

    //Estado para alamacenar solo el conteo de area
    const [conteoAreas, setConteoAreas] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    React.useEffect(() => {

        //Tipado de la respuesta de axios como arrary
        axios.get<any[]>(areaURL)
            .then((response) => {
                //Aplicar el COUNT usando la longitud del array de retorno
                setConteoAreas(response.data.length);
                setLoading(false);
            })
            .catch(error => {
                setError("Error al cargar los datos");
                setLoading(false);
                console.error(error);
            });
    }, []);

    //Comprobacion y manejo del estado (Carga/error)
    if (loading) {
        return <div>Carngando...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    //Comprobacion de conteo 
    if (conteoAreas == null || conteoAreas == 0) {
        return <div>No se encontraron registros</div>
    }

    return (
        <>
            <p style={{ fontSize: '40px', fontWeight: 'bold', color: '#007bff' }}>
                {conteoAreas}
            </p>
        </>
    )

}
export default CardArea