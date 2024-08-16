import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CartCard({image, title, price, category, quantity}){

    const finalPrice = quantity * price

    /* 
              
*/ 
     
    return (
        <>
            <Box sx={{display: 'flex'}}>
                <img    src={image} 
                        alt={title} 
                        aria-label={`product: ${title}, category: ${category}`} 
                        style={{maxWidth: '6em'}}/>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center', gap: 3}}>
                    <Typography variant='h5' color='primary' sx={{fontSize: 15, fontWeight: 600}}>{title}</Typography>
                    <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                            <Typography>Quantity</Typography>
                            <Typography variant='span' color='primary' sx={{fontWeight: 'bold'}}>{quantity}</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                            <Typography>Price</Typography>
                            <Typography variant='span' color='primary' sx={{fontWeight: 'bold'}} >{`${finalPrice}€`}</Typography>
                        </Box>
                       
                    </Box>
                </Box>
            </Box>
              
        </>
    )
}