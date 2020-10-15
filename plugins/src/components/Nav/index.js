import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <div class="navbar navbar-default navbar-fixed-top" role="navigation" id="navbar">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand scrollTo" href="#intro">Landing Page</a>
                </div>
                <div class="navbar-collapse collapse" id="navigation">

                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="#intro">Intro</a>
                        </li>
                        <li><a href="#section1">Why Bootstrapious</a>
                        </li>
                        <li><a href="#section2">About us</a>
                        </li>
                        <li><a href="#section3">Testimonials</a>
                        </li>
                        <li><a href="#section4">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Nav;