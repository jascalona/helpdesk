import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// 🛠️ Interfaz actualizada para reflejar los datos de un único usuario.
interface User {
  name: string;
  surname: string;
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}
function stringAvatar(fullName: string) {
  const parts = fullName.split(' ');
  let initials = '';

  if (parts.length > 1) {
    initials = `${parts[0][0]}${parts[1][0]}`;
  } else if (parts.length === 1 && parts[0].length > 0) {
    initials = parts[0][0];
  }
  
  initials = initials.toUpperCase();


  return {
    sx: {
      bgcolor: stringToColor(fullName),
    },
    children: initials,
  };
}

function AvatarIcon({ name, surname }: User) {
  const fullName = `${name} ${surname}`;

  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar(fullName)} sx={{ width: 50, height: 50, marginRight: '15px' }} />       
    </Stack>
  );
}

export default AvatarIcon;