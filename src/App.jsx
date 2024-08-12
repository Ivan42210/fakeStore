import {BrowserRouter as Router} from 'react-router-dom'

import './App.css'
import AppRouter from './AppRouter'
import { useEffect, useState } from 'react'
import { getAllUsers } from './Utils/API'

function App() {

  const [allUsers, setAllUsers] = useState(null)

  console.log('tous les utilisateurs')
  console.log(allUsers)

  useEffect(()=>{
    const getUsers = async () =>{
      const response = await getAllUsers();
      setAllUsers(response);
    }

    getUsers()
  },[])

  return (
    <>
      <Router>
          <AppRouter/>
      </Router>
    </>
  )
}

export default App
