import { useParams } from 'react-router-dom'

export default function DuetDetailPage({ duetItems }) {
    const { duetName } = useParams()

    return (
        <>
            {
                duetItems
                    .filter((duet) => duet.name === duetName)
                    .map((duet, idx) => (
                        <div key={idx}>
                            <div>
                                <h1>{duet.name}</h1>
                                <h2>{duet.instrument1}</h2>
                                <h2>{duet.instrument2}</h2>
                                <h3>{duet.style}</h3>
                                <a href={`${duet.link}`}>more info at IMSLP website</a>
                            </div>
                        </div>
                    ))
            }
        </>
    )
}

