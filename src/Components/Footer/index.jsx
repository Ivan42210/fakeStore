import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer(){
    return(
        <>
            <Box sx={{bgcolor: 'primary.main', p: 1, color: 'white', display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0, width: '100%'}}>
                <Typography variant='p'>Created by Ivan Chavaren 2024</Typography>
            </Box>
        </>
    )
}