import axios from 'axios'


const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const datas = res.data;
    return datas
}


const getAllUsers = async () => {
    const res = await axios.get('https://fakestoreapi.com/users');
    const datas = res.data;
    return datas
}

const getAllCarts = async () => {
    const res = await axios.get('https://fakestoreapi.com/carts');
    const datas = res.data;
    return datas
}

const getUserCart = async (userId) => {
    const res = await axios.get(`https://fakestoreapi.com/carts/user/${userId}`);
    const datas = res.data;
    return datas
}

const getUser = async (userId) =>{
    const res = await axios.get(`https://fakestoreapi.com/users/${userId}`);
    const datas = res.data;

    return datas
}




export { getProducts, getAllUsers, getAllCarts, getUserCart, getUser }