import './InstrumentList1.css'

export default function InstrumentList({ instruments, activeInst1, setActiveInst1 }) {
    const listItems = instruments.map((item, idx) =>
        <li
            key={idx}
            onClick={() => setActiveInst1(item)}
        >
            {item}
        </li>
    )

    return (
        <div className='InstrumentList1'>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}