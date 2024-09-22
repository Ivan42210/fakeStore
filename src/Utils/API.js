import axios from 'axios'


const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const datas = res.data;
    return datas
}

const getSingleProduct = async (productId) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
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
    const res = await axios.get(`https://fakestoreapi.com/carts/${userId}`);
    const datas = res.data;
    return datas
}

const getUser = async (userId) =>{
    const res = await axios.get(`https://fakestoreapi.com/users/${userId}`);
    const datas = res.data;

    return datas
}

const addUser = async (email, username,password, firstname,lastname,city,street,number,zipcode,lat,long) =>{
    await axios.post('https://fakestoreapi.com/users', {
        email:email,
        username: username,
        password: password,
        name: {
            firstname: firstname,
            lastname: lastname
        },
        address: {
            city: city,
            street: street,
            number: number,
            zipcode: zipcode,
            geolocation: {
                lat: lat,
                long: long
            }
        }
    })
}




export { getProducts, getAllUsers, getAllCarts, getUserCart, getUser, getSingleProduct, addUser }