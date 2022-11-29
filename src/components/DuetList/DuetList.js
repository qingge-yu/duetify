export default function DuetList({ duetItems }) {
    const list = duetItems.map(duet =>
        <div key={duet}>
            {duet.name}
        </div>)
    return <div>{list}</div>
}