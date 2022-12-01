import { Link } from "react-router-dom"
import "./AllDuetsPage.css"

export default function AllDuetsPage({ duetItems }) {
    return (
        <div className="AllDuetsPage">
            <h1>Duet Library</h1>
            <div className="AllDuetCards">
                {duetItems.map((duet, idx) =>
                    <Link to={`/all/${duet.name}`} key={idx}>
                        <div key={idx} className="DuetCard">
                            <p>{duet.name}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
