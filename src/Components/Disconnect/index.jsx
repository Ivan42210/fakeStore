import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import PropTypes from 'prop-types';


export function Disconnect({sx}){

    const {logout} = useContext(AuthContext)

    return(
        <>
            <Button sx={sx} variant='contained' onClick={logout}>Disconnect</Button>
        </>
    )
}


Disconnect.propTypes={
     sx: PropTypes.object
}