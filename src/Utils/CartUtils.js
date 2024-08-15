const transformCartToProducts = (cart) => {
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

export {transformCartToProducts};