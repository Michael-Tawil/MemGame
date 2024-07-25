import { useState,useEffect } from 'react'
import './HEADER.css'
import logo from './imgs/logo.png'

let Bscore = 8;

function HEADER() {
    return (
        <>
        <div id='header'>
            <img src = {logo} alt="Logo" />
            <p>Best Score: {Bscore}</p>
            </div>
        </>
    )
}

export default HEADER
