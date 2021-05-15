import React from 'react'
import Hero from './Hero'
import '../css/Main.css'
import Pie from './Charts/Pie'
import Bar from './Charts/Bar'

function Main() {
    return (
        <div className="main">
            <Hero />
            <div className="main-lower">
                <div className="chart-div container" style={{marginRight:"2%"}}>
                    <Pie />
                </div>
                <div className="chart-div container">
                    <Bar />
                </div>
            </div>
        </div>
    )
}

export default Main
