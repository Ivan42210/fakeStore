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




