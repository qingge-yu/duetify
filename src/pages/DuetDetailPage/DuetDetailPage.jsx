import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import './DuetDetailPage.css'

export default function DuetDetailPage({ duetItems }) {
    const { duetName } = useParams()
    const [youtube, setYoutube] = useState([])
    const linkName = duetName.replace(/\s+/g, '%20')

    // function findYoutube() {
    //     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${linkName}&key=${process.env.REACT_APP_API_KEY}`)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json()
    //             }
    //             throw response
    //         })
    //         .then(data => {
    //             return data.items
    //         })
    //         .catch(err => {
    //             console.log('error fetching data' + err)
    //         })
    // }
    // findYoutube()

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
                            </div>
                            <div className='youtube'>
                                {
                                    // <img src={`${{ youtube }.snippet.thumbnails.default.url}`} key={idx}></img>
                                }
                            </div>
                        </div>
                    ))
            }
            <div className='detailPageBtns'>
                <Link to="/all" className="buttonGoAll">Back To Duet Library</Link>
                <Link to="/duets" className="buttonGoFind">Back To Find Duet</Link>
            </div>
        </div >
    )
}
