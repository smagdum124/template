import React from 'react';

function Landing() {
    const testimonials = [
        {
            id: 1,
            image: "/assets/img/testimonials/testimonials-1.jpg",
            name: "John Doe",
            date: "Oct 2024",
            text: "This platform has truly revolutionized how I approach my studies. The structured tools and resources make it easy to track progress.",
            role: "Student",
        },
        {
            id: 2,
            image: "/assets/img/testimonials/testimonials-2.jpg",
            name: "Jane Smith",
            date: "Oct 2024",
            text: "Highly recommend it for students looking to succeed. The platform's simplicity and efficiency are unmatched.",
            role: "Teacher",
        },
        {
            id: 3,
            image: "/assets/img/testimonials/testimonials-3.jpg",
            name: "Alice Johnson",
            date: "Oct 2024",
            text: "A game-changer for exam preparation! The resources provided helped me pass my exams with flying colors.",
            role: "Educator",
        },
        {
            id: 4,
            image: "/assets/img/testimonials/testimonials-4.jpg",
            name: "Robert Brown",
            date: "Oct 2024",
            text: "The tools and resources here are top-notch. This platform makes managing exams and assignments effortless.",
            role: "Founder",
        },
        {
            id: 5,
            image: "/assets/img/testimonials/testimonials-5.jpg",
            name: "Emma Wilson",
            date: "Oct 2024",
            text: "I love how user-friendly and effective it is. It saves me hours of preparation time while boosting my confidence.",
            role: "Student",
        },
        {
            id: 6,
            image: "/assets/img/testimonials/testimonials-1.jpg",
            name: "Michael Lee",
            date: "Oct 2024",
            text: "Perfect for anyone aiming to achieve great results. I couldn’t ask for a better way to prepare my students.",
            role: "Teacher",
        },
        {
            id: 7,
            image: "/assets/img/testimonials/testimonials-2.jpg",
            name: "Sophia Davis",
            date: "Oct 2024",
            text: "Simply the best platform out there for educators and learners alike. The support team is incredibly helpful too!",
            role: "Educator",
        },
        {
            id: 8,
            image: "/assets/img/testimonials/testimonials-3.jpg",
            name: "David Garcia",
            date: "Oct 2024",
            text: "Thanks to this platform, I aced my exams! The personalized learning paths are a game-changer for serious students.",
            role: "Founder",
        },
        {
            id: 9,
            image: "/assets/img/testimonials/testimonials-4.jpg",
            name: "Olivia Martinez",
            date: "Oct 2024",
            text: "Exceptional experience and great results. This platform has become my go-to for exam preparation and skill building.",
            role: "Student",
        },
    ];
    return (
        <>

            {/* Header Section */}
            <header style={{
                background: 'linear-gradient(to top, rgb(151, 165, 207) 10%, #ffffff 50%)',
                padding: '80px 20px',
                textAlign: 'center',
                height: '120vh',
                overflow: 'hidden',
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
            }}>
                {/* Small Heading */}
                <h6 className='text-primary' style={{ color: '#555', fontSize: '1rem', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 'bolder' }}>
                    Product & Managment Exam Tool
                </h6>

                {/* Large Heading */}
                <h1 style={{ color: '#333', fontSize: '3.5rem', fontWeight: '700', marginBottom: '15px', fontWeight: 'bold' }}>
                    An AI -powered solution for online <br /> exam challenges
                </h1>

                {/* Paragraph */}
                <p style={{
                    color: '#666',
                    fontSize: '1.1rem',
                    marginBottom: '30px',
                    maxWidth: '690px',
                    margin: '0 auto 25px'
                }}>
                    This platform is optimized for educators and students, offering efficiency,accuracy,<br /> and user-friendliness, making it ideal for the digital era.

                </p>

                {/* Buttons */}
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-dark" style={{ position: 'relative' }}>

                        <i class="bi bi-app-indicator" style={{ paddingRight: '5px' }}></i>
                        Signup for Free
                    </button>
                    <button
                        className="btn"
                        style={{
                            backgroundColor: '#fff', // White background
                            color: '#000', // Black text
                            border: '1px solid #ccc', // Gray outline
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        See Exam.io in Action
                    </button>

                </div>

                {/* Image Below Header */}
                <div className="container mt-5" style={{ padding: '0% 5%' }}>
                    <img
                        src="/assets/img/header.png"
                        alt="header display"
                        className="img-fluid mx-auto d-block"
                        style={{
                            // maxWidth: '90%',
                            margin: '0 auto',
                            borderRadius: '10px',
                            width: '90vw'
                        }}
                    />
                </div>
            </header>
            <section style={{ padding: '50px 5%', }}>
                <div style={{ textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                    {/* Title */}
                    <h3 style={{ color: '#333', marginBottom: '30px', fontWeight: '600' }}>
                        Supported and Trusted by Several Top Companies
                    </h3>

                    {/* Logos Section */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '130px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <img src="/assets/img/xbox.png" alt="Brand 1" style={{ maxWidth: '130px', height: 'auto' }} />
                        <img src="/assets/img/playstation.png" alt="Brand 2" style={{ maxWidth: '130px', height: 'auto' }} />
                        <img src="/assets/img/microsoft.png" alt="Brand 3" style={{ maxWidth: '130px', height: 'auto' }} />
                        <img src="/assets/img/google.png" alt="Brand 4" style={{ maxWidth: '130px', height: 'auto' }} />
                        <img src="/assets/img/dropbox.png" alt="Brand 5" style={{ maxWidth: '130px', height: 'auto' }} />
                    </div>
                </div>
            </section>
            {/* examp sceduling  */}
            <div
                className="container-fluid py-5"
                style={{
                    padding: "0 5%",
                }}
            >
                {/* Main Container */}
                <div style={{ paddingBottom: "5vw" }}>
                    <h5 className="text-primary" style={{ textTransform: 'uppercase', textAlign: 'center' }}>Features</h5>
                    <h1 style={{ textAlign: 'center' }} >Explore Our Features for easily <br /> examp experience</h1>
                    <p style={{ textAlign: 'center' }} >Discover seamless exam Solutions: Unloacking Effortless Assesment Experiene</p>
                </div>
                <div
                    style={{
                        border: "3px solid var(--bs-primary)",
                        borderRadius: "20px",
                        padding: "20px",
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    <h4 className=" mb-4" style={{ textAlign: "left", color: '#666' }}>
                        Automatically Exam Scheduling
                    </h4>
                    <p className="text-muted mb-5" style={{ textAlign: "left" }}>
                        Effortlessly organize your exams: Simplify scheduling <br /> with our advanced, automated features.
                    </p>

                    {/* Cards Row */}
                    <div className="row gy-4">
                        {[
                            {
                                status: "Running",
                                start: "10:00",
                                startDay: "Tue, 16 Mar",
                                end: "10:00",
                                endDay: "Wed, 17 Mar",
                                title: "Programming",
                                subject: "Backend",
                                participants: 34,
                                class: "TECH-3A",
                                statusLabel: "5 Hours 37 Minutes 18 Seconds",
                            },
                            {
                                status: "Scheduled",
                                start: "07:00",
                                startDay: "Tue, 16 Mar",
                                end: "16:00",
                                endDay: "Wed, 17 Mar",
                                title: "Animal Science",
                                subject: "Biology",
                                participants: 34,
                                class: "TECH-3A",
                                statusLabel: "5 Hours 37 Minutes 18 Seconds",
                            },
                            {
                                status: "Finished",
                                start: "10:00",
                                startDay: "Tue, 16 Mar",
                                end: "10:00",
                                endDay: "Wed, 17 Mar",
                                title: "Programming",
                                subject: "Backend",
                                participants: 34,
                                class: "TECH-3A",
                                statusLabel: "Finished",
                            },
                        ].map((exam, index) => (
                            <div key={index} className="col-md-4">
                                <div
                                    className="card shadow-sm p-3"
                                    style={{
                                        borderRadius: "15px",
                                    }}
                                >
                                    {/* Card Header: Status and Buttons */}
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        {/* Left: Status */}
                                        <span
                                            className={`badge d-flex justify-content-center align-items-center ${exam.status === "Running"
                                                ? "bg-success"
                                                : exam.status === "Scheduled"
                                                    ? "bg-warning text-dark"
                                                    : "bg-secondary"
                                                }`}
                                            style={{
                                                borderRadius: "50px",
                                                padding: "8px 15px",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                            }}
                                        >
                                            {exam.status}
                                        </span>

                                        {/* Right: Buttons */}
                                        {exam.status === "Running" && (
                                            <button
                                                className="btn btn-sm btn-outline-primary"
                                                style={{
                                                    borderRadius: "50px",
                                                    padding: "5px 15px",
                                                    cursor: "pointer",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Assignment
                                            </button>
                                        )}
                                        {exam.status === "Scheduled" && (
                                            <button
                                                className="btn btn-sm btn-outline-primary"
                                                style={{
                                                    borderRadius: "50px",
                                                    padding: "5px 15px",
                                                    cursor: "pointer",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Assignment
                                            </button>
                                        )}
                                        {exam.status === "Finished" && (
                                            <button
                                                className="btn btn-sm btn-outline-primary"
                                                style={{
                                                    borderRadius: "50px",
                                                    padding: "5px 15px",
                                                    cursor: "pointer",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Live Test
                                            </button>
                                        )}
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <p className="mb-1">Start</p>
                                            <h5 className="mb-0">{exam.start}</h5>
                                            <span className="text-muted">{exam.startDay}</span>
                                        </div>
                                        <div
                                            style={{
                                                position: "relative",
                                                display: "inline-flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "50px",
                                                height: "50px",
                                                border: "2px solid var(--bs-secondary)", // Outer circle
                                                borderRadius: "50%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    width: "35px",
                                                    height: "35px",
                                                    border: "2px solid var(--bs-secondary)", // Inner circle
                                                    borderRadius: "50%",
                                                }}
                                            >
                                                <i className="fas fa-arrow-right text-primary"></i> {/* Arrow */}
                                            </div>
                                        </div>

                                        <div>
                                            <p className="mb-1">End</p>
                                            <h5 className="mb-0">{exam.end}</h5>
                                            <span className="text-muted">{exam.endDay}</span>
                                        </div>
                                    </div>

                                    <hr />

                                    {/* Card Body */}
                                    <div className="d-flex justify-content-between">
                                        <div className="text-start">
                                            <p className="mb-1">
                                                <strong>Title:</strong>
                                            </p>
                                            <p>{exam.title}</p>
                                            <p className="mb-1">
                                                <strong>Participants:</strong>
                                            </p>
                                            <p>{exam.participants}</p>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-1">
                                                <strong>Subject:</strong>
                                            </p>
                                            <p>{exam.subject}</p>
                                            <p className="mb-1">
                                                <strong>Class:</strong>
                                            </p>
                                            <p>{exam.class}</p>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        {/* Left: Status Label */}
                                        <span className="text-primary">{exam.statusLabel}</span>

                                        {/* Right: Buttons */}
                                        <div>
                                            <button
                                                className="btn btn-sm btn-outline-primary me-2"
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <i class="bi bi-share"></i>
                                            </button>
                                            <button className="btn btn-sm btn-outline-primary">
                                                Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Features Row */}
                    <div className="row mt-5 gy-4">
                        {[
                            {
                                title: "Generate Question & Answer",
                                description:
                                    "AI-Powered Exam Creation: Effortlessly Generate Questions and Answers with Our Advanced Artificial Intelligence Platform",
                                image: "/assets/img/generate.png",
                            },
                            {
                                title: "Analyst Exam Result",
                                description:
                                    "Comprehensive Exam Analysis: Leverage the Power of AI for Detailed Examination Result Insights and Data Interpretation",
                                image: "/assets/img/result.png"
                            },
                            {
                                title: "Scanning Document Summary",
                                description:
                                    "Effortless Document Scanning and Summary Generation: Harness Advanced Technology for Swift and Accurate Document Analysis",
                                image: "/assets/img/scanning.png"
                            },
                        ].map((feature, index) => (
                            <div key={index} className="col-md-4">
                                <div
                                    className="card shadow-sm text-left"
                                    style={{
                                        borderRadius: "15px",
                                        background: "linear-gradient(to bottom, #ffffff, #f0f0f0)", // Background shade
                                        padding: "15px", // General padding for content
                                        display: "flex",
                                        flexDirection: "column", // Ensure content stacks vertically
                                        justifyContent: "space-between", // Spread content and push image to the bottom
                                        height: "100%", // Ensures card maintains full height
                                    }}
                                >
                                    <div>
                                        <h5 className="mb-3 text-secondary">{feature.title}</h5>
                                        <p className="text-muted">{feature.description}</p>
                                    </div>
                                    <div>
                                        <img
                                            src={feature.image}
                                            alt=""
                                            style={{
                                                width: "100%", // Ensure image fits card width
                                                borderRadius: "0 0 15px 15px", // Rounded corners for the bottom
                                                marginBottom: "0", // No margin at the bottom
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>

                </div>
            </div>

            {/* report card  */}
            <div
                className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between py-4 min-vh-100"
                style={{ padding: "0 5%" }}
            >
                {/* Left Section with Gradient Wrapper */}
                <div
                    className="p-4 w-100 mb-4 mb-md-0 me-md-4"
                    style={{
                        maxWidth: "550px",
                        background: 'linear-gradient(to top, rgb(191, 199, 223) 10%, #ffffff 50%)',
                        borderRadius: "15px",
                    }}
                >
                    {/* Section: Make Report */}
                    <div
                        className="shadow rounded p-4 bg-white mb-4"
                        style={{ borderRadius: "15px" }}
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="h5 mb-0">Make report for Mudryk</h6>
                            <button
                                className="btn"
                                style={{
                                    backgroundColor: "transparent",
                                    border: "1px solid #007bff",
                                    color: "#007bff",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "5px",
                                }}
                            >
                                <i class="bi bi-stars"></i>
                                Generate
                            </button>
                        </div>
                    </div>

                    {/* Section: Report Details */}
                    <div
                        className="shadow rounded p-4 bg-white"
                        style={{ borderRadius: "15px" }}
                    >
                        <h2 className="h5 mb-3">Mudryk's Programming Class Report</h2>
                        <div className="mb-4">
                            <span>Value</span>
                            <hr />
                            {["Impact", "Impact", "Impact"].map((label, index) => (
                                <div key={index}>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted">{label}</span>
                                        <div className="d-flex">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`me-1 text-${i < 4 - index ? "warning" : "muted"
                                                        }`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {index === 0 && (
                                        <>
                                            <span>Value</span>
                                            <hr />
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted">Score</span>
                            <span className="h5 text-primary">900</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="text-center text-md-start col-12 col-md-5">
                    <h5 className="text-primary" style={{ textTransform: "uppercase", marginBottom: '2vw' }}>
                        Make Report Feature
                    </h5>
                    <h2 className="h4 mb-3" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                        Streamlining Online <br /> Exam Reports for <br /> Students
                    </h2>
                    <p className="text-muted mb-4">
                        Facilitating Student Progress Tracking: This feature streamlines the
                        generation of comprehensive exam reports for students, ensuring quick
                        access to detailed performance summaries.
                    </p>
                    <button className="btn btn-dark d-flex align-items-center justify-content-between">
                        Explore More
                        <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                </div>
            </div>

            {/* QuestionMaker  */}
            <div
                className="container-fluid d-flex align-items-center justify-content-between py-5 min-vh-100"
                style={{ padding: "0 5%" }}
            >
                <div className="row w-100">
                    {/* Left Section */}
                    <div className="col-12 col-md-5">
                        <h2 className="h4 text-primary mb-3">QUESTION CUSTOMISATION GENERATOR</h2>
                        <h1 className="h2 mb-3" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>An effective question <br /> maker and easily <br /> customization</h1>
                        <p className="text-muted mb-4">
                            An effective question maker allows users to create diverse exam
                            questions swiftly, while also offering easy customization options.
                        </p>
                        <button className="btn btn-dark d-flex align-items-center justify-content-between">
                            Explore More
                            <i className="fas fa-arrow-right ms-2"></i>
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="col-12 col-md-7 d-flex align-items-center">
                        <div
                            className="p-4 w-100"
                            style={{
                                background: 'linear-gradient(to top, rgb(191, 199, 223) 10%, #ffffff 50%)',
                                borderRadius: "0 0 15px 15px",
                            }}
                        >
                            <div className="bg-white shadow rounded p-4 w-100">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <h5 className="mb-0">  <div
                                            style={{
                                                position: "relative",
                                                display: "inline-flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "30px",
                                                height: "30px",
                                                border: "2px solid var(--bs-secondary)", // Outer circle
                                                borderRadius: "50%",
                                            }}
                                        >
                                            <i class="bi bi-stars primary"></i>
                                        </div> Mr. Verstappen</h5>
                                        <span className="text-muted">Teacher</span>
                                    </div>
                                    <span
                                        className="badge bg-transparent text-secondary border border-secondary"
                                        style={{ borderRadius: "50px" }}
                                    >
                                        Hogwarts University
                                    </span>
                                </div>
                                <div className="mb-3">
                                    {[
                                        "Create 10 Questions about Sate Kambing",
                                        "Create 50 Questions about Formula 1",
                                        "Create 3 Essay about Harry Potter",
                                        "Can you change number 4",
                                    ].map((text, index) => (
                                        <div key={index} className="d-flex justify-content-end mb-2">
                                            <button className="btn btn-outline-primary" style={{ width: "auto" }}>
                                                {text}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light">
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Ask Me!" />
                                    <button className="btn btn-primary">
                                        <i class="bi bi-stars"></i>Generate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* pricing  */}
            <section id="pricing" className="pricing section" >
                {/* Section Title */}
                <div className="container  "  >
                    <h5 className="text-primary" style={{ textTransform: 'uppercase', textAlign: 'center' }}>Pricing</h5>
                    <h1 style={{ textAlign: 'center' }}>Our Pricing</h1>
                    <p style={{ textAlign: 'center', marginBottom: "3vw " }}>
                        Exxam.iocombines enterprise-grade capabilities with simple way
                    </p>
                </div>
                {/* Pricing Cards */}
                <div className="container">
                    <div className="row gy-4">
                        {/* Personal Plan */}
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
                            <div className="pricing-item">
                                <div style={{
                                    borderRadius: '15px',
                                    border: '1px solid #ddd',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    padding: '20px 20px '
                                }}>
                                    <h3>Personal</h3>
                                    <p className="description">
                                        individualizes learning at an affordable <br /> price learning at your fingertips
                                    </p>
                                    <h4>
                                        <sup>$</sup>20<span> / month</span>
                                    </h4>
                                    <span>Save 35% by paying annually</span>
                                    <a href="#" className="cta-btn">
                                        Get Personal
                                    </a>
                                </div>
                                {/* <p className="text-center small">No credit card required</p> */}
                                <ul>
                                    <li>
                                        <i className="bi bi-check-circle"></i>
                                        <span>Unlimited Orgnization</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Unlimited Real-time Exams</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>50 Assignments </span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>50 AI-genertaed Questions </span>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Business Plan */}
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pricing-item featured">
                                <div style={{
                                    borderRadius: '15px',
                                    border: '1px solid #ddd',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    padding: '20px 20px ',
                                    background: 'linear-gradient(to top, rgb(191, 199, 223) 10%, #ffffff 50%)'
                                }}>
                                    <p className="popular primary" style={{ marginTop: "40px" }}>Best Choice</p>
                                    <h3>Team</h3>
                                    <p className="description">
                                        Collaborative, advanced, cost- <br />effective exam solutions.
                                    </p>
                                    <h4>
                                        <sup>$</sup>149<span> / month</span>
                                    </h4>
                                    <span>Save 35% by paying annually</span>
                                    <a href="#" className="cta-btn">
                                        Get Team
                                    </a>
                                </div>
                                <p className="text-primary small" style={{ padding: '10px 20px' }} >All in Free, plus</p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Collabrorative Learning</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Advnaced Analysis</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Priority Support</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Unlimited Assignments</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>  Import Export Exam Questions </span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Real Time Webcam Sessions</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Unlimited AI-generated Questions</span>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Developer Plan */}
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
                            <div className="pricing-item">
                                <div style={{
                                    borderRadius: '15px',
                                    border: '1px solid #ddd',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    padding: '20px 20px '
                                }}>
                                    <h3>Enterprise</h3>
                                    <p className="description">
                                        Scalable, integrated, premium exam <br /> management suite.
                                    </p>
                                    <h4>
                                        <sup>$</sup>549<span> / month</span>
                                    </h4>
                                    <span>Save 35% by paying annually</span>
                                    <a href="#" className="cta-btn">
                                        Get Enterprise
                                    </a>
                                </div>
                                <p className="text-primary small" style={{ padding: '10px 20px' }} >All in Free, plus</p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Seamless Integration</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Premiusm Features</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>Security & Compliance</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>{" "}
                                        <span>dedicated Account Management</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonial थ्‍ */}
            <section>
                <div
                    className="main-container"
                    style={{
                        padding: "10vw 20px",
                    }}
                >
                    <div
                        style={{
                            padding: "0 20px",
                            background: 'linear-gradient(to top, rgb(151, 165, 207) 10%, #ffffff 50%)',
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                        }}
                    >
                        <h6 className="text-primary"
                            style={{
                                textAlign: "center",
                                fontSize: "1.2rem",
                                marginBottom: "10px",
                                marginTop: "10px",

                            }}
                        >
                            Testimonials
                        </h6>
                        <h1
                            style={{
                                textAlign: "center",
                                fontSize: "3rem",
                                marginBottom: "20px",
                                fontWeight: 'bold'
                            }}
                        >
                            What they say about us
                        </h1>
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "1rem",
                                color: "#555",
                                marginBottom: "40px",
                            }}
                        >
                            Here are some positive reviews about their exam experience managed
                            with our tool.
                        </p>
                        <div
                            className="testimonial-grid"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "20px",
                                padding: "20px",
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    style={{
                                        backgroundColor: "#fff",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "10px",
                                        padding: "20px",
                                        position: "relative",
                                    }}
                                >
                                    {/* Role Button */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            right: "10px",
                                            backgroundColor: "transparent",
                                            color: "#666",
                                            border: "1px solid #666",
                                            borderRadius: "50px",
                                            padding: "8px 16px",
                                            fontSize: "12px",
                                            cursor: "pointer",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {testimonial.role}
                                    </div>

                                    {/* Client Info */}
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                marginRight: "10px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <div>
                                            <h6 style={{ margin: 0, fontSize: "1rem", color: "#333" }}>
                                                {testimonial.name}
                                            </h6>
                                            <small style={{ color: "#666" }}>{testimonial.date}</small>
                                        </div>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p
                                        style={{
                                            color: "#666",
                                            fontSize: "0.9rem",
                                            lineHeight: "1.5",
                                        }}
                                    >
                                        {testimonial.text}
                                    </p>
                                </div>
                            ))}

                            {/* text  */}



                        </div>

                        {/* Responsive Grid */}
                        <style>
                            {`
            @media (max-width: 992px) {
              .testimonial-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 576px) {
              .testimonial-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}
                        </style>
                        <div style={{ justifyContent: 'center', alignItems: 'center', padding: "10vw 20px" }}>
                            <h1
                                style={{
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    marginBottom: '20px',
                                    color: '#333',
                                    lineHeight: '1.2',
                                    textAlign: 'center'
                                }}
                            >
                                Quit squandering time and <br />
                                commence your exam <br /> administration now.
                            </h1>
                            <p
                                style={{
                                    fontSize: '1.2rem',
                                    color: '#555',
                                    marginBottom: '40px',
                                    textAlign: 'center'
                                }}
                            >
                                Optimize Efficiency: Initiate Seamless Exam Management Today
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '20px',
                                    flexWrap: 'wrap', // Ensures responsiveness
                                }}
                            >
                                <button
                                    style={{
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '10px',
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}
                                >
                                    <i class="bi bi-app-indicator" style={{ paddingRight: '5px' }}></i>
                                    Sign up for free
                                </button>
                                <button
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                        border: '1px solid #ccc',
                                        padding: '10px 20px',
                                        borderRadius: '10px',
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                    }}
                                >
                                    See Exam.io in Action
                                </button>
                            </div>



                        </div>

                    </div>


                </div>

            </section>

        </>
    );
}

export default Landing;
