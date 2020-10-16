import React, { useEffect } from 'react';
import AOS from 'aos';
import './footer.css'

const Footer = () => {
    /** useEffect es una funcion que permite renderizar la primera vez y cada vez que hay un cambio
     * en el body del componente
     */
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
        AOS.refresh();
    }, []);

    return (
        <div className="section" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 social" id='redes'>
                        <a href="#" className="external facebook" data-animate-hover="shake" data-aos="fade-up">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" className="external instagram" data-animate-hover="shake" data-aos="fade-up">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="mailto:#" className="email" data-animate-hover="shake" data-aos="fade-up">
                            <i className="fa fa-phone"></i>
                        </a>
                    </div>
                    <div className='mediosdepago'>
                    </div>
                    <div className="col-sm-6">
                        <p id='tm'>
                            EloBoostAcademy™
                        </p>
                        <p id='derechos'>
                            Derechos reservados.
                        </p>
                        <a className='terminos' src=''>
                            Terminos y condiciones.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
