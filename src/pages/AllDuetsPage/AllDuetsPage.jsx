import * as piecesAPI from '../../utilities/pieces-api'
import { Link } from "react-router-dom"

export default function AllDuetsPage({ duetItems }) {
    return (
        duetItems.map((duet, idx) =>
            <div key={idx}>
                <Link to={`/all/${duet.name}`}>
                    {duet.name}
                </Link>
            </div>
        )
    )
}
