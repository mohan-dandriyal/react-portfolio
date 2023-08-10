
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                    <Link to="/"><h1 className=''>PRINCE</h1></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-5 mb-lg-0">
                            <li className="nav-item">
                                <Link to="" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service" className="nav-link">
                                    Service
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Blog" className="nav-link">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    contact
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default Header