import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function SvgIconsSize() {
    const navigate = useNavigate()
    const handleNavigateHome= () => {
      navigate('/')
    }
  return (
    <Box
      sx={{'& > :not(style)': {m: 2,}, }}>
       <Button variant="outlined" startIcon={<HomeIcon />} color="primary" size="big" onClick={ handleNavigateHome}>Home</Button>
    </Box>
    
  );
}