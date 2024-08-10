import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import {NavLink} from 'react-router-dom'
import { AuthContext } from '../../AuthContext';
import { Disconnect } from '../Disconnect';


const menu = [{
    label: 'Home',
    link: '/'
},
{
   label: 'Test',
   link: '/test' 
}]

export default function Navbar() {

    const {user} = useContext(AuthContext)

    return(
        <>
            <AppBar position='static' sx={{p:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', background:'#ffffff'}}>
                <Box>
                    <Typography variant='h2' sx={{color:"primary.main", fontSize: 26}}>FakeStore</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                    {
                        menu.map(({label, link}, index) => (
                            <NavLink key={index} to={link} style={{padding: '5px', margin: '0 5px'}}>
                                <Typography sx={{color: "primary.main", fontWeight: 'bold'}}>{label}</Typography>
                            </NavLink>
                        ))
                    }
                  <Disconnect/>  
                </Box>
            </AppBar>
        </>
    )
}