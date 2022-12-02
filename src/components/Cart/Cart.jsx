import './Cart.css'
import { Link } from 'react-router-dom';

export default function Cart({ activeInst1, setActiveInst1, activeInst2, setActiveInst2, duetItems }) {

    const handleToggleInst1 = () => {
        setActiveInst1(null)
    }

    const handleToggleInst2 = () => {
        setActiveInst2(null)
    }

    return (
        <div className='cartTitle'>
            <h2>Your Duets</h2>
            <div className='Cart'>
                <h1 onClick={handleToggleInst1}>{activeInst1}</h1>
                <h1 onClick={handleToggleInst2}>{activeInst2}</h1>
                {duetItems.map((duet, idx) =>
                    <Link to={`/all/${duet.name}`} key={idx}>
                        <h3 className="duetPiece">
                            {duet.name}
                        </h3>
                    </Link>
                )}
            </div>
        </div>
    )
}