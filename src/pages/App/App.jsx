import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import * as piecesAPI from '../../utilities/pieces-api'
import * as favoritesAPI from '../../utilities/favorites-api'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NewDuetPage from '../NewDuetPage/NewDuetPage'
import AllDuetsPage from '../AllDuetsPage/AllDuetsPage'
import NavBar from '../../components/NavBar/NavBar'
import DuetDetailPage from "../../pages/DuetDetailPage/DuetDetailPage"
import LoginPage from '../../pages/LoginPage/LoginPage'
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [duetItems, setDuetItems] = useState([])
  const [favList, setFavList] = useState(null)

  useEffect(function () {
    (async function () {
      const duets = await piecesAPI.getAll()
      setDuetItems(duets)
    })()
  }, [])

  function refreshPage() {
    window.location.reload(false)
  }

  async function handleAddToFavList(duetId) {
    const updatedFavList = await favoritesAPI.addPieceToFav(duetId)
    setFavList(updatedFavList)
  }

  return (
    <main className="App">
      <header><img src="https://img.icons8.com/dotty/512/spotify.png" alt="logo" /><h4>Duetify</h4></header>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/duets" element={<NewDuetPage user={user} setUser={setUser} duetItems={duetItems} setDuetItems={setDuetItems} onClick={refreshPage} />} />
            <Route path="/all" element={<AllDuetsPage duetItems={duetItems} onClick={refreshPage} />} />
            <Route path="/all/:duetName" element={<DuetDetailPage duetItems={duetItems} handleAddToFavList={handleAddToFavList} />} />
            <Route path="/favorites" element={<FavoritesPage favList={favList} setFavList={setFavList} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
      <footer>All Rights Reserved, &copy; 2022 Duetify &nbsp;</footer>
    </main>
  );
}


