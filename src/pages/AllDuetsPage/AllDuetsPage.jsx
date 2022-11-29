import * as piecesAPI from '../../utilities/pieces-api'
import { useState, useEffect } from 'react'
import DuetList from '../../components/DuetList/DuetList'

export default function AllDuetsPage({ user, setUser }) {
    const [duetItems, setDuetItems] = useState([])

    useEffect(function () {
        async function getDuets() {
            const duets = await piecesAPI.getAll()
            setDuetItems(duets)
        }
        getDuets()
    }, [])

    return (
        <div>
            <DuetList duetItems={duetItems} />
        </div>
    )




}
