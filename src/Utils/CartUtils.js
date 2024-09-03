const transformCartToProducts = (cart) => {
    if (!cart || typeof cart !== 'object' || !Array.isArray(cart.products) || cart.products.length === 0) {
        console.error('Le panier est invalide, non défini, ou ne contient pas de produits');
        return [];
    }

    const date = cart.date;

    return cart.products.map(product => {
        return {
            productId: product.productId,
            quantity: product.quantity,
            date: date,
        };
    });
};

export { transformCartToProducts };




/*const transformCartToProducts = (cart) => {
    if (!cart || cart.length === 0) {
        console.error('Le panier est vide ou non défini');
        return [];
    }

    return cart.flatMap(item => {
        if (!item.products || item.products.length === 0) {
            console.error('Item sans produits ou produits non défini');
            return [];
        }

        const date = item.date;

        return item.products.map(product => {
            const productClean = {
                productId: product.productId,
                quantity: product.quantity,
                date: date,
            };

           
            return productClean;
        });
    });
};

export {transformCartToProducts};*/