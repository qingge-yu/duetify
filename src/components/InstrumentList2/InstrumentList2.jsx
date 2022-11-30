export default function InstrumentList({ instruments, activeInst2, setActiveInst2 }) {
    const listItems = instruments.map((item, idx) =>
        <li
            key={idx}
            onClick={() => setActiveInst2(item)}
        >
            {item}
        </li>
    )

    return (
        <ul>
            {listItems}
        </ul>
    )
}