import './InstrumentList1.css'

export default function InstrumentList({ instruments, activeInst1, setActiveInst1 }) {
    const listItems = instruments.sort().map((item, idx) =>
        <li
            key={idx}
            onClick={() => setActiveInst1(item)}
        >
            {item}
        </li>
    )

    return (
        <div className='Instruments1'>
            <h2>Instrument 1</h2>
            <div className='InstrumentList1'>
                <ul>
                    {listItems}
                </ul>
            </div>
        </div>
    )
}