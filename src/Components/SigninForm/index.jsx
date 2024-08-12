
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default function SignInForm(){
    
    const {login, user} = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() =>{
        if(user && user.id) {
            navigate(`/profile/${user.id}`)
        }
    }, [user, navigate])

    const handleOnSubmit = async () => {
        const username = document.getElementById('userName').value;
        const password = document.getElementById('password').value;
        await login(username, password);
    
    }

    return(
        <>
            <Paper elevation={2} sx={{py: 2, px: 4, maxWidth: '300px',  
                                                    display:'flex', 
                                                    flexDirection:'column',
                                                    alignItems:'center'}}>
                <Box component="form" sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <TextField id='userName' label="Username"/>
                    <TextField id='password' type="password" label="Password" />
                </Box>
                <Button variant='contained' color='primary' sx={{mt: 3}} onClick={handleOnSubmit}>Submit</Button>
            </Paper>
        </>
    )
}