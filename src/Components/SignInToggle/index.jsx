import LoginIcon from '@mui/icons-material/Login';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext';
import SignInForm from '../SigninForm';


export default function SignInToggle(){

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
                <LoginIcon/>
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
                <SignInForm />
            </Popover>
        </>
    )
}


