import './InstrumentList2.css'

export default function InstrumentList({ instruments, activeInst2, setActiveInst2 }) {
    const listItems = instruments.sort().map((item, idx) =>
        <li
            key={idx}
            onClick={() => setActiveInst2(item)}
        >
            {item}
        </li>
    )

    return (
        <div className='Instruments2'>
            <h2>Instrument 2</h2>
            <div className='InstrumentList2'>
                <ul>
                    {listItems}
                </ul>
            </div>
        </div>
    )
}