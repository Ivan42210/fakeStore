import { getSingleProduct } from "./API"

const createProductInfoArray = async (cart) => {
    if (!cart || !cart.products || !Array.isArray(cart.products)) {
        console.error("Cart ou ses produits sont indéfinis ou ne sont pas un tableau.");
        return [];
    }

    try {
        const productInfoArray = await Promise.all(
            cart.products.map(async (item) => {
                const productInfo = await getSingleProduct(item.productId);
                return {
                    id: productInfo.id,
                    title: productInfo.title,
                    image: productInfo.image,
                    price: productInfo.price,
                    quantity: item.quantity,
                    date: item.date
                };
            })
        );
        return productInfoArray;
    } catch (error) {
        console.error("Erreur lors de la création du tableau d'informations des produits:", error);
        return [];  // Retourne un tableau vide en cas d'erreur
    }
};


export {createProductInfoArray}