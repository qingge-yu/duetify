import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NewDuetPage from '../NewDuetPage/NewDuetPage'
import AllDuetsPage from '../AllDuetsPage/AllDuetsPage'
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/duets/new" element={<NewDuetPage user={user} setUser={setUser} />} />
            <Route path="/all" element={<AllDuetsPage user={user} setUser={setUser} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


