// import * as React from 'react';
 import Box from '@mui/material/Box';
// import SvgIcon from '@mui/material/SvgIcon';
 import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

export default function SvgIconsSize() {
    const navigate = useNavigate()
    
    const handleNavigateHome= () => {
      navigate('/')
    }
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
       <Button variant="outlined" onClick={ handleNavigateHome}>Home</Button>
    
      
    </Box>
    
  );
}