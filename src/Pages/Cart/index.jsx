import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext';
//import { getSingleProduct } from '../../Utils/API';


export default function Cart(){

    const { cart } = useContext(AuthContext);  // Récupérez le `cart` depuis le contexte
    const [cartItems, setCartItems] = useState([]);
    const [testItems, setTestItems] = useState([])

    console.log('panier')
    console.log(cart)
    console.log('test')
    console.log(testItems)

    const testMap = () => {
        if (cart && cart.products) {
            console.log('Produits du panier:', cart.products);

            const arrayTest = cart.products.map(product => ({
                id: product.productId,
                quant: product.quantity,
            }));

            console.log('arrayTest avant setTestItems:', arrayTest);
            setTestItems(arrayTest);
        } else {
            console.log('cart.products non défini dans testMap');
        }
    };


   useEffect(()=>{

      /*  const test = async() =>{
            const product = await getSingleProduct(1);
            setTestItems(product);
        }

        test()*/

        console.log('useEffect déclenché');

        if (cart && cart.products && cart.products.length > 0) {
            console.log('Appel de testMap depuis useEffect');
            testMap();
        } else {
            console.log('Cart ou cart.products non disponible dans useEffect');
        }

      /* const getProductsById = () => {
            cart.products.map(async (product) =>{
                const prod = await getSingleProduct(product.productId);
                setCartItems(...prod, ...product.quantity)
            })
        } 

        getProductsById()*/

    }, [cart])

    useEffect(() => {
        if (cart && cart.products && cart.products.length === 0) {
            console.log('Tentative avec un délai pour voir si les données arrivent');
            setTimeout(() => {
                console.log('Re-tentative avec testMap après délai');
                testMap();
            }, 3000); // Essayez de ré-exécuter après 3 secondes
        }
    }, [cart]);

    return(
        <>
            <Box component='main' sx={{maxWidth: '1200px', m: '0 auto'}}>
                <Typography>Cart</Typography>

            </Box>
        </>
    )
}