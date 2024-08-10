import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import { getUser } from '../Utils/API';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null)


    useEffect(()=> {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
            fetchUser(savedToken);
        }
    },[]);

    const login = async (username, password) =>{
        try{
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password
            });
            const {token} = response.data;
            setToken(token);
            localStorage.setItem('token', token);
            await fetchUser(token)
        }catch(error){
            console.error(error);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
    };

   const fetchUser = async(token) =>{
        try{
            const decoded = jwtDecode(token);
            const userId = decoded.sub;
            const userData = await getUser(userId);
            setUser(userData)

        } catch (error){
            console.error("Failed to fetch user data", error)
        }
    }


    return(
        <AuthContext.Provider value={{token, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
