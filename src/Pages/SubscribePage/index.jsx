import { Typography } from "@mui/material";
import SignUp from "../../Components/SignUp";



export default function SubscribePage(){

    const style = {
        main: {
            maxWidth: '1200px',
            margin: '2em auto 2em auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
    }

    return (
        <>
            <main style={style.main}>
                    <Typography variant='h3' color='primary'>Sign up</Typography>
                    <SignUp/>
                
            </main>
        </>
    )
}