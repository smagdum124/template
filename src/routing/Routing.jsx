import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import About from "./pages/About";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ComingSoon from "../pages/ComingSoon";

function Routing() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coming" element={<ComingSoon/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default Routing;
