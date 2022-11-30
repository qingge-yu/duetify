import './Cart.css'

export default function Cart({ activeInst1, setActiveInst1, activeInst2, setActiveInst2, duetItems, setDuetItems }) {


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
                    <h2 key={idx}>
                        {duet.name}
                    </h2>
                )}
            </div>
        </div>
    )
}