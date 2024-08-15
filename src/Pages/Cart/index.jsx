import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext';
import { getSingleProduct } from '../../Utils/API';
import { transformCartToProducts } from '../../Utils/CartUtils';
import CartCard from '../../Components/CartCard';
//import { getSingleProduct } from '../../Utils/API';


export default function Cart(){

    const { cart } = useContext(AuthContext);  
    const [cartItems, setCartItems] = useState([]);
   
    useEffect(() => {
        const set = async () => {
            const array = await cart; 
            const productDatas = await transformCartToProducts(array);
    
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
        };
    
        set();
    }, [cart]);


    return(
        <>
            <Box component='main' sx={{maxWidth: '1200px', m: '0 auto'}}>
                <Typography variant='h3' color='primary' sx={{mt:2, textAlign: 'center'}}>Your cart</Typography>
                <Box component='section' sx={{display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {cartItems.map(({image, title, price, category, quantity}, index) => (
                        <CartCard 
                            key={index}
                            image={image}
                            title={title}
                            price={price}
                            category={category}
                            quantity={quantity}/>
                    )
                    )}
                </Box>
            </Box>
        </>
    )
}