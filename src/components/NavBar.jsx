import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/assets/img/logoexamm.png" alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{color:'black'}}
                            >
                                Features
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/coming">Action</Link></li>
                                <li><Link className="dropdown-item" to="/coming">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/coming">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:'black'}} to="/coming">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:'black'}} to="/coming">Blog</Link>
                        </li>
                    </ul>
                    <div className="d-flex ms-3">
                        <Link
                            to="/coming"
                            style={{
                                backgroundColor: '#fff', // White background
                                color: '#000', // Black text
                                border: '1px solid #ccc', // Gray outline
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontSize: '1rem',
                                cursor: 'pointer'
                            }}
                            className="btn y me-2"
                        >
                            Login
                        </Link>
                        <Link className="btn btn-primary txt-center" to="/coming">
                            Signup for Free
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
