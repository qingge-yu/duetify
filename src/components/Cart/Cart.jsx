import './Cart.css'

export default function Cart({ activeInst1, setActiveInst1, activeInst2, setActiveInst2, duetItems, setDuetItems }) {
    function findDuet() {
        duetItems.forEach(duet => {
            if (duet.instrument1 === activeInst1 || duet.instrument1 === activeInst2 || duet.instrument2 === activeInst1 || duet.instrument2 === activeInst2) {
                return duet
            }
        })
    }

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
                <h2></h2>
            </div>
        </div>
    )
}