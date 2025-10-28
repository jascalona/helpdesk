import PersonIcon from '@mui/icons-material/Person';


interface dpt {
    id: string,
    users: string,
    name: string,
    percentage: string,
}

function CardUser({ id, users, name }: dpt) {
    return (
        <>
            <div className="card-metric">
                <div className="card-header">
                    <span className='icon-container'>
                        <PersonIcon sx={{ fontSize: 30, color: '#fff' }} />
                    </span>
                </div>
                <div className="card-body">
                    <h2 className="metric-value">{users}</h2>
                    <p className="metric-name">{name}</p>
                </div>
            </div>
        </>
    )
}

export default CardUser;