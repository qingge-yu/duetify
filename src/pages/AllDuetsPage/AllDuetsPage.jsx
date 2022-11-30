import { Link } from "react-router-dom"
import "./AllDuetsPage.css"

export default function AllDuetsPage({ duetItems }) {
    return (
        <div className="AllDuetsPage">
            <h1>All Duet Pieces</h1>
            <div className="AllDuetCards">
                {duetItems.map((duet, idx) =>
                    <Link to={`/all/${duet.name}`}>
                        <div key={idx} className="DuetCard">
                            <p>{duet.name}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
