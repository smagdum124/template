import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import CopyrightSection from './CopyrightSection';

function Footer() {
    return (
        <>
            <footer style={{
                padding: '0 5%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                paddingTop: '10vw',
                paddingBottom: '10vw',
            }}>
                {/* Column 1 */}
                <div style={{ textAlign: 'center' }}>
                    <Link to="/">
                        <img
                            src="/assets/img/logoexamm.png"
                            alt="Logo"
                            style={{ marginBottom: '10px' }}
                        />
                    </Link>
                    <Link to="/coming">
                        <button style={{
                            backgroundColor: 'transparent',
                            color: '#666',
                            border: '1px solid #ddd',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
                            borderRadius: '50px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            fontSize: '14px',
                        }}>
                            Unlimited 14 Days Free Trial
                        </button>
                    </Link>
                </div>

                {/* Column 2 */}
                <div>
                    <h5>Product</h5>
                    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Sitemap</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>User Flow</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Wireframes</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Content</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Flowchart</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>User Flow Diagrams</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Release Notes</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h5>How it Works</h5>
                    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Knowledge Base</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>FAQ</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Reviews</Link></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h5>Pricing</h5>
                    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Plans & Pricing</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Student Discounts</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Education</Link></li>
                    </ul>
                    <h5>Company</h5>
                    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Blog</Link></li>
                        <li><Link to="/coming" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div>
                    <div style={{
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        borderRadius: '10px',
                    }}>
                        <h5 style={{ fontWeight: 'bold' }}>Get in Touch</h5>
                        <p style={{ color: '#666', marginTop: '10px', fontSize: '15px' }}>
                            Have a question? Didn’t find what you’re looking for?
                        </p>
                        <Link to="/coming">
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'black',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    padding: '10px 52px',
                                    cursor: 'pointer',
                                    marginTop: '10px',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    display: 'block',
                                    margin: '10px auto',
                                    textAlign: 'center',
                                }}
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

            </footer>
            {/* CopyrightSection */}
            <CopyrightSection />
        </>
    );
}

export default Footer;
