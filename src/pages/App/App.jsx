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
import LoginPage from '../../pages/LoginPage/LoginPage'

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
      <header><img src="https://img.icons8.com/dotty/512/spotify.png" alt="logo" /><h4>Duetify</h4></header>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/duets" element={<NewDuetPage user={user} setUser={setUser} duetItems={duetItems} setDuetItems={setDuetItems} />} />
            <Route path="/all/*" element={<AllDuetsPage duetItems={duetItems} />} />
            <Route path="/all/:duetName" element={<DuetDetailPage duetItems={duetItems} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
      <footer>All Rights Reserved, &copy; 2022 Duetify &nbsp;</footer>
    </main>
  );
}


