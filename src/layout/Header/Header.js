
import React from 'react'
import { Link } from 'react-router-dom'
import favicon  from "../../img/favicon.png"
import logo  from "../../img/logo.png"

const Header = () => {
    return (
        <>  
          <header className='position-fixed top-0 start-0 end-0 z-3' style={{backgroundColor:"#222222"}}>
          <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                    <Link to="/" className='text-decoration-none'>
                        <img src={logo} style={{ width: '150px' }} />
                    </Link>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-light"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-5 fw-bold gap-4 mb-lg-0">
                            <li className="nav-item">
                                <a href="#home" className="nav-link active " aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#service" className="nav-link">
                                    Service
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#project" className="nav-link">
                                    Project
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">
                                    contact
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
          </header>
        </>
    )
}

export default Header