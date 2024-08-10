import Navbar from "../Components/Navbar";
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "../Pages/Home";
import Test from "../Pages/Test";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import Profile from "../Pages/Profile";

export default function AppRouter(){

    const {token, user} = useContext(AuthContext);

    console.log("récupérer le token et l'utilisateur")
    console.log(token)
    console.log(user)

    return(
        <>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/test'} element={<Test/>} />
                <Route path='/profile/:id' element={token ? <Profile/> : <Navigate to='/test' />}/>
            </Routes> 
        </>
    )
}