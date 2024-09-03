import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext';
import { getSingleProduct } from '../../Utils/API';
import { transformCartToProducts } from '../../Utils/CartUtils';
import CartCard from '../../Components/CartCard';

export default function Cart() {
    const { cart, loading } = useContext(AuthContext);  
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const set = async () => {
            if (cart) {
                const productDatas = await transformCartToProducts(cart);
                const detailedProducts = await Promise.all(
                    productDatas.map(async (item) => {
                        const productDetails = await getSingleProduct(item.productId);
                        return {
                            ...item,
                            ...productDetails, 
                        };
                    })
                );
                setCartItems(detailedProducts);
            }
        };
        set();
    }, [cart]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <>
            {cart && cartItems.length > 0 ? (
                <Box component='main' sx={{maxWidth: '1200px', m: '0 auto', p:2}}>
                    <Typography variant='h3' color='primary' sx={{mt:2, textAlign: 'center'}}>Your cart</Typography>
                    <Paper component='section' sx={{display: 'flex', flexDirection: 'column', gap: 1, p:2, width: '60%' }}>
                        {cartItems.map(({image, title, price, category, quantity}, index) => (
                            <CartCard 
                                key={index}
                                image={image}
                                title={title}
                                price={price}
                                category={category}
                                quantity={quantity}/>
                        ))}
                    </Paper>
                </Box>
            ) : (
                <Typography>Your cart is empty</Typography>
            )}
        </>
    );
}

/*
<Paper component='section' sx={{display: 'flex', flexDirection: 'column', gap: 1, p:2, width: '60%' }}>
                    <Typography>Your cart is empty</Typography>
                </Paper>
   
*/ 