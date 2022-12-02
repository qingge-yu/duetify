import { Link } from 'react-router-dom'
import './FavoritesPage.css'

export default function FavoritesPage({ favList, setFavList }) {
    const favDuets = favList.favPieces

    return (
        <div className='FavoritesPage'>
            <h1>Your Favorite Duets</h1>
            {favDuets.length ?
                <div className='allFavCards'>
                    {
                        favDuets.map((favDuet, idx) => (
                            <Link key={idx} to={`/all/${favDuet}`} className='favCard'>
                                <p key={idx}>{favDuet}</p>
                            </Link>
                        ))
                    }
                </div>
                :
                <h2>Nothing to see here</h2>
            }
        </div >

    )
}