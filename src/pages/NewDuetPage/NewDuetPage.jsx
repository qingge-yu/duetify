import { useState, useEffect, useRef } from 'react'
import * as cartAPI from '../../utilities/cart-api'
import * as piecesAPI from '../../utilities/pieces-api'
import { Link, useNavigate } from 'react-router-dom';
import InstrumentList1 from '../../components/InstrumentList1/InstrumentList1';
import InstrumentList2 from '../../components/InstrumentList2/InstrumentList2';
import Cart from '../../components/Cart/Cart'
import './NewDuetPage.css'

export default function NewDuetPage({ duetItems, setDuetItems }) {
    const [instItems, setInstItems] = useState([])
    const [activeInst1, setActiveInst1] = useState('')
    const [activeInst2, setActiveInst2] = useState('')
    const [cart, setCart] = useState(null)
    const instrumentsRef = useRef([])

    useEffect(function () {
        (async function () {
            const items = await piecesAPI.getAll()
            instrumentsRef.current = [...new Set(items.map(item => item.instrument2))]
            setInstItems(items)
            setActiveInst1(instrumentsRef.current[0])
        })();
        (async function () {
            const cart = await cartAPI.getCart()
            setCart(cart)
        })()
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
                    duetItems={duetItems}
                    setDuetItems={setDuetItems}
                />
            </div>
        </div>
    )
}



