import React from 'react'
import Route from './route'
import Departure from './departureTime'
import Calculate from './calculate'


function Main() {
    return (
        <div className="main-container">
            <Route />
            <Departure />
            <Calculate />
        </div>
    )
}

export default Main