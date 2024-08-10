import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';


export function Disconnect(){

    const {logout} = useContext(AuthContext)

    return(
        <>
            <Button onClick={logout}>Disconnect</Button>
        </>
    )
}