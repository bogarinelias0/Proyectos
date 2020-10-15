import React from 'react'
import './footer.css'

const Footer = () =>{
    return (
        <div className="section" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="social">
                                <a href="#" className="external facebook" data-animate-hover="shake" data-aos="fade-up">
                                    <i className="fa fa-facebook" data-aos="fade-up">
                                       
                                    </i>
                                </a>
                                <a href="#" className="external instagram" data-animate-hover="shake" data-animate="fadeInUp">
                                    <i className="fa fa-instagram">
                                    </i>
                                </a>
                                <a href="mailto:#" className="email" data-animate-hover="shake" data-animate="fadeInUp">
                                    <i className="fa fa-envelope">
                                    </i>
                                </a>
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <p></p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer;