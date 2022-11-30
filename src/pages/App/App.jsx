import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import * as piecesAPI from '../../utilities/pieces-api'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NewDuetPage from '../NewDuetPage/NewDuetPage'
import AllDuetsPage from '../AllDuetsPage/AllDuetsPage'
import NavBar from '../../components/NavBar/NavBar'
import DuetDetailPage from "../../pages/DuetDetailPage/DuetDetailPage"

export default function App() {
  const [user, setUser] = useState(getUser())
  const [duetItems, setDuetItems] = useState([])

  useEffect(function () {
    async function getDuets() {
      const duets = await piecesAPI.getAll()
      setDuetItems(duets)
    }
    getDuets()
  }, [])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/duets" element={<NewDuetPage user={user} setUser={setUser} />} />
            <Route path="/all/*" element={<AllDuetsPage duetItems={duetItems} />} />
            <Route path="/all/:duetName" element={<DuetDetailPage duetItems={duetItems} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


