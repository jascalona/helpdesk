import PersonIcon from '@mui/icons-material/Person';

interface dpt{
    id: string, 
    users: string,
    name: string,

}

function CardUser({id, users, name}: dpt) {

    return (
        <>
            <div className="card-users">
                <span className='icon-users'>
                    <PersonIcon sx={{ fontSize: 30 }} />
                </span>
                <h2>{users}</h2>
                <p>DPT: <strong>{name}</strong></p>
            </div>
        </>
    )
}
export default CardUser