import { useParams, Link } from 'react-router-dom'
import './DuetDetailPage.css'

export default function DuetDetailPage({ duetItems }) {
    const { duetName } = useParams()

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
                        </div>
                    ))
            }
            <Link to="/all" className="buttonGoBack">Go Back</Link>
        </div>
    )
}

