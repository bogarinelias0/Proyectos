import React from 'react'
import './tft.css'
const Tft = () =>{
    return (
        <div className='tftbackground' id='tft'>
            <div className='texto-dentro-tft'>
                <h1>
                    Team Fight Tactics
                </h1>
            </div>
            <div className='infotft'>
                <h2>
                    Para saber los precios de
                </h2>
                <ul>
                    <li>
                        Elo Boost
                    </li>
                    <li>
                        Coaching Tecnico Profesional
                    </li>
                    <li>
                        Venta de cuentas
                    </li>
                </ul>
            </div>
            <div className='botontft'>
                <a href=''>
                    Consultar!
                </a>
            </div>
        </div>
    )
}
export default Tft;