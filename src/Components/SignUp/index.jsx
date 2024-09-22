import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




export default function SignUp(){

    const style = {
        container: {
            w: '300px',
            display: 'flex',
            flexDirection: 'column',
            p: 2,
            gap: 2,
        },

    }

    return(
        <>
            <Paper sx={style.container}>
                <Box>
                    <TextField placeholder='Lastname'/>
                    <TextField placeholder='Firstname'/>
                    <TextField placeholder='Username'/>
                </Box>
                <TextField placeholder='Email'/>
                <TextField placeholder='Password'/>
                <TextField placeholder='Confirm password'/>
                
                    <TextField  placeholder='Street'/>
                    <TextField  placeholder='Number'/>
                    <TextField  placeholder='City'/>
                    <TextField  placeholder='Zipcode'/>
                <Button variant='contained' color='primary' sx={{mt: 3}}>Submit</Button>
            </Paper>
        </>
    )
}