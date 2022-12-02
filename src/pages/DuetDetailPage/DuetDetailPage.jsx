import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './DuetDetailPage.css'

export default function DuetDetailPage({ duetItems, handleAddToFavList }) {
    const { duetName } = useParams()
    const [youtubeData, setYoutubeData] = useState([])
    const linkName = duetName.replace(/\s+/g, '%20')

    // useEffect(function () {
    //     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${linkName}&key=${process.env.REACT_APP_API_KEY}`)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json()
    //             }
    //             throw response
    //         })
    //         .then(data => {
    //             let video = data.items[0].id
    //             setYoutubeData(video)
    //         })
    //         .catch(err => {
    //             console.log('error fetching data' + err)
    //         })
    // }, [])

    return (
        <div className='DuetDetailPage'>
            <div className="DuetDetails">
                {
                    duetItems
                        .filter((duet) => duet.name === duetName)
                        .map((duet, idx) => (
                            <div key={idx}>
                                <div>
                                    <h1>{duet.name}</h1>
                                    <h2>Instruments:</h2>
                                    <h3> {duet.instrument1}, {duet.instrument2}</h3>
                                    <h2>Style:</h2>
                                    <h3>{duet.style}</h3>
                                    <br />
                                    <a href={`${duet.link}`}>more info at IMSLP website</a>
                                    <button onClick={() => handleAddToFavList(duet.name)} className="favBtn">Add to Favorites</button>
                                </div>
                            </div>
                        ))
                }
                <div className='youtube'>
                    <iframe src={`https://youtube.com/embed/${youtubeData.videoId}`} frameBorder="0"></iframe>
                </div>
            </div>
            <div className='detailPageBtns'>
                <Link to="/all" className="buttonGoAll">Back To Duet Library</Link>
                <Link to="/duets" className="buttonGoFind">Back To Find Duet</Link>
            </div>

        </div >
    )
}