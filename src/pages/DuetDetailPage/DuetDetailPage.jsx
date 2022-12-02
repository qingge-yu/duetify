import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as favoritesAPI from '../../utilities/favorites-api'
import './DuetDetailPage.css'

export default function DuetDetailPage({ duetItems }) {
    const { duetName } = useParams()
    const [youtubeData, setYoutubeData] = useState([])
    const linkName = duetName.replace(/\s+/g, '%20')
    const [favList, setFavList] = useState(null)

    useEffect(function () {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${linkName}&key=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then(data => {
                let video = data.items[0].id
                setYoutubeData(video)
            })
            .catch(err => {
                console.log('error fetching data' + err)
            })
    }, [])

    useEffect(function () {
        (async function () {
            const list = await favoritesAPI.getFav()
            setFavList(list)
        })()
    }, [])

    async function handleAddToFavList(duetId) {
        const updatedFavList = await favoritesAPI.addPieceToFav(duetId)
        setFavList(updatedFavList)
    }

    return (

        <div className='DuetDetailPage'>
            {
                duetItems
                    .filter((duet) => duet.name === duetName)
                    .map((duet, idx) => (
                        <div key={idx}>
                            <div className="DuetDetails">
                                <h1>{duet.name}</h1>
                                <h2>Instruments:</h2>
                                <h3> {duet.instrument1}, {duet.instrument2}</h3>
                                <h2>Style:</h2>
                                <h3>{duet.style}</h3>
                                <br />
                                <a href={`${duet.link}`}>more info at IMSLP website</a>
                                <button onClick={() => handleAddToFavList(duet._id)}>Add to Favorites</button>
                            </div>
                        </div>
                    ))
            }
            <div className='youtube'>
                <iframe src={`https://youtube.com/embed/${youtubeData.videoId}`} frameBorder="0"></iframe>
            </div>
            <div className='detailPageBtns'>
                <Link to="/all" className="buttonGoAll">Back To Duet Library</Link>
                <Link to="/duets" className="buttonGoFind">Back To Find Duet</Link>
            </div>

        </div >
    )
}