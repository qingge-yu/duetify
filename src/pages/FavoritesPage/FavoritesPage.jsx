import { useState, useEffect, useRef } from 'react'

export default function FavoritesPage({ favList }) {

    return (
        <div className='FavoritesPage'>
            <h1>Your Favorite Duets</h1>
            {favList ?
                <>
                    {
                        favList.map((favItem, idx) =>
                            <h2 key={idx}>{favItem.name}</h2>
                        )
                    }
                </>
                :
                <h2>Nothing to see here</h2>
            }
        </div>

    )
}