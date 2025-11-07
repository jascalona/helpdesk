import Avatar from './Avatar';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const UserCard: React.FC = () => {

    const nb_nombre = "Nina Elle";
    const nb_apellido = "(Nina ells)";
    const rating = 4.3;
    const subarea = "QA";
    const isVerified = true;
    const area = "Gestion de Servicios";

    const email = "j.escalona@sycom.com.ve";
    return (
        <div className="user-card">
            <div className="card-header">

                <Avatar name={nb_nombre} surname={nb_apellido} />

                <div className="header-info">
                    <h2 className="user-name" style={{ marginLeft: '10px' }}>
                        {nb_nombre} {isVerified && <CheckCircleIcon className="verified-icon" />}
                        <span className="user-nickname">{nb_apellido}</span>
                    </h2>

                    <div className="user-rating">
                        <StarIcon className="star-icon" />
                        <span className="rating-value">{rating.toFixed(1)}</span>
                        <span className="review-count">({subarea})</span>
                    </div>
                </div>
            </div>

            <div className="card-metrics">
                <div className="metric-box">
                    <p className="metric-label">Area</p>
                    <p className="metric-value">{area}</p>
                </div>
                <div className="metric-box">
                </div>
            </div>

            <div className="card-actions">
                <Button
                    variant="outlined"
                    startIcon={<FavoriteBorderIcon />}
                    className={'action-button'}
                >
                    Favorito
                </Button>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    className={'action-button invite-btn'}
                >
                    Invite
                </Button>
            </div>

            <span style={{textAlign: 'center'}}>{email}</span>
        </div>
    );
};

export default UserCard;