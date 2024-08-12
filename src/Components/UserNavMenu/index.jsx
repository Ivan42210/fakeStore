import PersonIcon from '@mui/icons-material/Person';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../../AuthContext';
import { Disconnect } from '../Disconnect';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'


export default function UserNavMenu({navMenuItems}){

    const {user} = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState(null)

    console.log(user)


    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
      };

      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
    
    return(
        <>
            <Button onClick={handleClick}>
                <PersonIcon/>
            </Button>
            <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography color={'primary'} sx={{mt:2,mx:2}}>{user.username}</Typography>
                { navMenuItems ? navMenuItems.map(({item, link}, index) =>(
                    <NavLink key={index} to={link}>
                        <Typography paragraph={true} color='primary.main' sx={{ml:2, mt:1, width:'100%'}}>{item}</Typography>
                    </NavLink>
                )): null}
                <Disconnect sx={{m:2}}/>
            </Popover>
        </>
    )
}


UserNavMenu.propTypes={
    navMenuItems: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.string,
        link: PropTypes.string,
      })),
}


