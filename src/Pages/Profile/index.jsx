import './Profile.css'
import { useContext } from "react"
import { AuthContext } from "../../AuthContext"
import Typography from '@mui/material/Typography';

export default function Profile(){

    const {user} = useContext(AuthContext);



    return(
        <>
            <main>
                <Typography variant='h3' color='primary' sx={{textAlign: 'center', mt:3}}>Hi <span>{user.name.firstname}</span></Typography>
            </main>
        </>
    )
}