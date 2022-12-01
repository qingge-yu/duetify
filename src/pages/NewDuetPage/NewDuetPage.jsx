import { useState, useEffect, useRef } from 'react'
import * as piecesAPI from '../../utilities/pieces-api'
import InstrumentList1 from '../../components/InstrumentList1/InstrumentList1';
import InstrumentList2 from '../../components/InstrumentList2/InstrumentList2';
import Cart from '../../components/Cart/Cart'
import './NewDuetPage.css'

export default function NewDuetPage({ duetItems, setDuetItems }) {
    const [instItems, setInstItems] = useState([])
    const [activeInst1, setActiveInst1] = useState('')
    const [activeInst2, setActiveInst2] = useState('')
    const instrumentsRef = useRef([])

    useEffect(function () {
        (async function () {
            const items = await piecesAPI.getAll()
            instrumentsRef.current = [...new Set(items.map(item => item.instrument2))]
            setInstItems(items)
            setActiveInst1(instrumentsRef.current[0])
            setActiveInst2(instrumentsRef.current[0])
        })();
    }, [])

    return (
        <div className='NewDuetPage'>
            <div>
                <InstrumentList1
                    instruments={instrumentsRef.current}
                    activeInst1={activeInst1}
                    setActiveInst1={setActiveInst1}
                />
            </div>
            <div>
                <InstrumentList2
                    instruments={instrumentsRef.current}
                    activeInst2={activeInst2}
                    setActiveInst2={setActiveInst2}
                />
            </div>
            <div>
                <Cart
                    activeInst1={activeInst1}
                    setActiveInst1={setActiveInst1}
                    activeInst2={activeInst2}
                    setActiveInst2={setActiveInst2}
                    duetItems={duetItems.filter(item => (
                        item.instrument1 === activeInst1 &&
                        item.instrument2 === activeInst2 ||
                        item.instrument1 === activeInst2 &&
                        item.instrument2 === activeInst1))}
                    setDuetItems={setDuetItems}
                />
            </div>
        </div>
    )
}



