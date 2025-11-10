import Avatar from './Avatar';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';


interface Usuario {
    coUsuario: string,
    nbNombre: string,
    nbApellido: string,
    txEmail: string,
    nucelular: string,
    coarea: string
}


function UserCard() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const API_URL = "http://localhost:8080/basetomee/usuario/list";


    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get<Usuario[]>(API_URL);
                setUsuarios(response.data);
                setError(null);
            } catch (err) {
                console.error("Error al obtener los usuarios:", err);
                setError("Error al cargar los datos de la API.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsuarios();
    }, []);

    if (loading) {
        return <p>Cargando...</p>
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>
    }

    if (usuarios.length === 0) {
        return <p>No hay registros disponibles para mostrar</p>
    }


    //<h2>Total de Registros: {usuarios.length}</h2>

    return (
        <>

            
            {
                usuarios.map((usuario) => (

                    <div className="user-card" key={usuario.nbNombre}>
                        <div className="card-header">

                            <Avatar name={usuario.nbNombre} surname={usuario.nbApellido} />

                            <div className="header-info">
                                <h2 className="user-name" style={{ marginLeft: '10px' }}>
                                    {usuario.nbNombre} 
                                    <span className="user-nickname">{usuario.nbApellido} <CheckCircleIcon className="verified-icon" /></span>
                                </h2>

                                <div className="user-rating">
                                    <StarIcon className="star-icon" />
                                    <span className="rating-value">Sub-Area</span>
                                    <span className="review-count">(QA)</span>
                                </div>
                            </div>
                        </div>

                        <div className="card-metrics">
                            <div className="metric-box">
                                <p className="metric-label">Info</p>
                                <p className="metric-value">{usuario.txEmail}</p>
                                <p className="metric-value">{usuario.nucelular}</p>
                            </div>
                            <div className="metric-box">
                            </div>
                        </div>

                        <div className="card-actions">
                            <Button
                                variant="outlined"
                                startIcon={<ModeEditOutlineRoundedIcon />}
                                className={'action-button'}
                            >
                                Editar
                            </Button>

                        </div>

                        <span style={{ textAlign: 'center' }}>Gestion de Servicios</span>
                    </div>
                ))
            }
        </>
    );
};

export default UserCard;