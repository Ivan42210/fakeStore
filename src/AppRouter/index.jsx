import Navbar from "../Components/Navbar";
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "../Pages/Home";
import Test from "../Pages/Test";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import Profile from "../Pages/Profile";
import Cart from "../Pages/Cart";


export default function AppRouter(){

    const {token, user, cart} = useContext(AuthContext);

    console.log("récupérer le token et l'utilisateur")
    console.log(token)
    console.log(user)
    console.log("récupération du panier de l'utilisateur")
    console.log(cart)

    return(
        <>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/test'} element={<Test/>} />
                <Route path='/profile/:id' element={token ? <Profile/> : <Navigate to='/' />}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes> 
        </>
    )
}