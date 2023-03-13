import React from "react"
import "../css/forJumbo.css"
import { TypeAnimation } from 'react-type-animation';
import { Responsive } from "semantic-ui-react";

const Jumbo = () => {
   
    return(
        <div>
            {/* desktop view */}
        <Responsive minWidth={1024}>
        <div id="jumboWrapper"
            onMouseEnter={() => {
                document.getElementById("abilities").style.fontSize = "2em"
                document.getElementById("logoWrapper").style.width = "1400px"
                document.getElementById("needs").style.fontSize = "0"
                document.getElementById("crossLine").style.width = "0"
            }}>
            <div id="logoWrapper">
                <h1 id="t1">My Speical <span id="abilities">Abilities</span></h1>
                <h1 id="needs">Needs</h1>
                <div id="crossLine"></div>
            </div>
            <TypeAnimation
                sequence={['Just be who you are!', 1000000000, '']}
                speed={1}
                wrapper="h1"
                repeat={Infinity}
            />
        </div >
        </Responsive>

        {/* mobile view */}
        <Responsive maxWidth={1023}>
        <div id="jumboWrapper"
            onMouseEnter={() => {
                document.getElementById("abilities").style.fontSize = "1.4em"
                document.getElementById("needs").style.fontSize = "0"
                document.getElementById("crossLine").style.width = "0"
            }}>
            <div id="logoWrapper">
                <h1 id="t1">My Speical <span id="abilities">Abilities</span></h1>
                <h1 id="needs">Needs</h1>
                <div id="crossLine"></div>
            </div>
            <TypeAnimation
                sequence={['Just be who you are!', 1000000000, '']}
                speed={1}
                wrapper="h1"
                repeat={Infinity}
            />
        </div >
        </Responsive>
        </div>
    )
}

export default Jumbo