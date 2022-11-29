export default function NewDuetPage() {
    return <h1>NewDuetPage</h1>
}

// import * as piecesAPI from '../../utilities/pieces-api'
// import { useState, useEffect, useRef } from 'react'
// import DuetCard from '../../components/DuetCard/DuetCard'

// export default function AllDuetsPage({ user, setUser }) {
//     const [duets, setDuets] = useState([])
//     const [active, setActive] = useState('')
//     const duetsRef = useRef([])

//     useEffect(function () {
//         (async function () {
//             const pieces = await piecesAPI.getAll()
//             duetsRef.current = [...new Set(pieces.map(piece => piece.name))]
//             setDuets(pieces)
//             setActive(duetsRef.current[0])
//         })()
//     }, [])

//     return (
//         <div>
//             <p></p>
//             <DuetCard
//                 duets={duetsRef.current}
//                 active={active}
//                 setActive={setActive}
//             />
//         </div>
//     )
// }