import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';




export default function SignUp(){

    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [number, setNumber] = useState(null)
    const [street, setStreet] = useState(null)
    const [city, setCity] = useState(null)
    const [zipcode, setZipcode] = useState(null)

    const firstNameValidation = (e) => {
            const nameRegex = new RegExp("/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u");
    }


    const style = {
        container: {
            width: '450px',
            display: 'flex',
            flexDirection: 'column',
            p: 2,
            gap: 2,
            position: 'relative'
        }, subContainer:{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            position: 'relative'
        },halfInput: {
            width: '48%'
        }, fullInput: {
            width: '100%'
        }

    }

    return(
        <>
            <Paper sx={style.container}>
                <Box sx={style.subContainer}>
                    <TextField placeholder='Lastname' sx={style.halfInput}/>
                    <TextField placeholder='Firstname' sx={style.halfInput}/>
                    <TextField placeholder='Username' sx={style.fullInput}/>
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