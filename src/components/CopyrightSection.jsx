import React from 'react';

function CopyrightSection() {
    return (
        <footer style={{
            backgroundColor: '#f8f9fa',
            padding: '0 5% 3%',
            display: 'flex',
            flexWrap: 'wrap', // Allows wrapping for small screens
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.9rem',
            color: '#666',
            gap: '10px', // Adds spacing between items in a wrap scenario
        }}>
            {/* Left Side */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                textAlign: 'center' // Centers text in narrow screens
            }}>
                <span style={{ fontWeight: 'bold' }} >&copy; 2024 Exxam.io</span>
                <span>&bull;</span>
                <a href="#" style={{ textDecoration: 'none', color: '#666', fontWeight: 'bold' }}>Terms of Use</a>
                <span>&bull;</span>
                <a href="#" style={{ textDecoration: 'none', color: '#666', fontWeight: 'bold' }}>Security</a>
                <span>&bull;</span>
                <a href="mailto:info@exxam.com" style={{ textDecoration: 'none', color: '#666', fontWeight: 'bold' }}>info@exxam.com</a>
            </div>

            {/* Right Side */}
            <div style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center', // Centers icons in narrow screens
                width: '100%',
                maxWidth: '200px' // Ensures proper alignment for small screens
            }}>
                <a href="#" style={{ color: '#666', fontSize: '1.5vw' }}>
                    <i className="fab fa-x-twitter"></i> {/* For X (Twitter) */}
                </a>
                <a href="#" style={{ color: '#666', fontSize: '1.5vw', marginLeft: '10px' }}>
                    M {/* Placeholder for "M" */}
                </a>
                <a href="#" style={{ color: '#666', fontSize: '1.5vw', marginLeft: '10px' }}>
                    <i className="fab fa-linkedin"></i> {/* For LinkedIn */}
                </a>
                <a href="#" style={{ color: '#666', fontSize: '1.5vw', marginLeft: '10px' }}>
                    <i className="fab fa-instagram"></i> {/* For Instagram */}
                </a>
                <a href="#" style={{ color: '#666', fontSize: '1.5vw', marginLeft: '10px' }}>
                    <i className="fab fa-youtube"></i> {/* For YouTube */}
                </a>

            </div>
        </footer>
    );
}

export default CopyrightSection;
