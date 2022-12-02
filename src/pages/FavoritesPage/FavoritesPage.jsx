import { Link } from 'react-router-dom'

export default function FavoritesPage({ favList, setFavList }) {
    const favDuets = favList.favPieces

    return (
        <div className='FavoritesPage'>
            <h1>Your Favorite Duets</h1>
            {favDuets.length ?
                <>
                    {
                        favDuets.map((favDuet, idx) => (
                            <Link key={idx} to={`/all/${favDuet}`}>
                                <p key={idx}>{favDuet}</p>
                            </Link>
                        ))
                    }
                </>
                :
                <h2>Nothing to see here</h2>
            }
        </div >

    )
}