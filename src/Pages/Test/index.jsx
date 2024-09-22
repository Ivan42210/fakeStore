import { useEffect, useState } from "react"



export default function Test(){

    const [geolocation, setGeolocation] = useState('')

    const success = (position) =>{
        return position
    }

    const errorCall = (error) =>{
        console.log(error)
    }

   useEffect(()=>{
    const geoloc = navigator.geolocation.getCurrentPosition(success, errorCall) //.getCurrentPosition(showPosition)


    setGeolocation(geoloc)
   },[])

   console.log(geolocation)

    return(
        <>
            <main>
                
              
            </main>
        </>
    )
}