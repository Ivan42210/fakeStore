import { useEffect, useState } from "react";
import SignIn from "../../Components/SignIn";
import { getAllUsers } from "../../Utils/API";

export default function Test(){

    const [userTest, setUserTest] = useState('')

    /* visibiulity on all user information*/
    console.log('tous les utilisateurs');
    console.log(userTest)

    useEffect(()=>{
       const returnUsers = async () =>{
            const response = await getAllUsers();
            setUserTest(response);
       }

       returnUsers()
    }, []);


    return(
        <>
            <main style={{  display: 'flex', 
                            flexDirection:'column', 
                            height: '100vh',
                            alignItems: 'center',
                            justifyContent: 'center' }}>
                <SignIn />
            </main>
        </>
    )
}