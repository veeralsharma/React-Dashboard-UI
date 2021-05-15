import React from 'react'
import Hero from './Hero'
import '../css/Main.css'
function Main() {
    return (
        <div className="main">
            <Hero />
            <div className="main-lower">
                <div className="chart-div container" style={{marginRight:"2%"}}>

                </div>
                <div className="chart-div container">

                </div>
            </div>
        </div>
    )
}

export default Main
