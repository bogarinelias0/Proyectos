import React from 'react'
import './cuentascs.css'
const Cuentascs = () =>{
    return (
        <div className='cuentascs'>
            <div className='comprar-cuentas-cs'>
                <h1>
                    Para comprar cuentas
                </h1>
            </div>
            <div className="col-sm-4 social" id='redescs'>
                        <a href="https://www.facebook.com/EloAcademyLAS" className="external facebook" data-animate-hover="shake" data-aos="fade-up" id='fbcsgo'>
                            <i className="fa fa-facebook" id='iconfbcs'></i>
                        </a>
                        <a href="https://instagram.com/eloboost_academy?r=nametag" className="external instagram" data-animate-hover="shake" data-aos="fade-up" id='igcs'>
                            <i className="fa fa-instagram" id='iconigcs'></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5493416291344&text=Hola!%20vengo%20de%20la%20pagina%20queria%20ver%20las%20cuentas%20para%20comprar." className="email" data-animate-hover="shake" data-aos="fade-up" id='whappcs'>
                            <i className="fa fa-phone" id='iconwhappcs'></i>
                        </a>
            </div>
            <div className='comprar-items'>
                <h1>
                    Para comprar items
                </h1>
            </div>
            <div className="col-sm-4 social" id='redescs2'>
                        <a href="https://www.facebook.com/EloAcademyLAS" className="external facebook" data-animate-hover="shake" data-aos="fade-up" id='fbcsgo2'>
                            <i className="fa fa-facebook" id='iconfbcs2'></i>
                        </a>
                        <a href="https://instagram.com/eloboost_academy?r=nametag" className="external instagram" data-animate-hover="shake" data-aos="fade-up" id='igcs2'>
                            <i className="fa fa-instagram" id='iconigcs2'></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5493416291344&text=Hola%20Vengo%20de%20la%20pagina!%20queria%20ver%20los%20items%20que%20tienen%20de%20cs%20go%20para%20comprar" className="email" data-animate-hover="shake" data-aos="fade-up" id='whappcs2'>
                            <i className="fa fa-phone" id='iconwhappcs2'></i>
                        </a>
            </div>
        </div>
    )
}
export default Cuentascs;