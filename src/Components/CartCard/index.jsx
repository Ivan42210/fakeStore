import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function CartCard({image, title, price, category, quantity}){

    const finalPrice = quantity * price
     
    return (
        <>
            <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2}}>
                <img    src={image} 
                        alt={title} 
                        aria-label={`product: ${title}, category: ${category}`} 
                        style={{maxWidth: '6em'}}/>
                <Typography variant='h5' color='primary'>{title}</Typography>
                <Typography variant='span' color='primary' >{quantity}</Typography>
                <Typography variant='span' color='primary' >{`${finalPrice}€`}</Typography>
            </Paper>  

        </>
    )
}