import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("2024-01-01T00:00:00"); // Set your target date here
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const renderCountdown = () => {
    return (
      <div className="countdown">
        {Object.keys(timeLeft).map((unit, index) => (
          <div key={index} className="time-unit">
            <h2>{timeLeft[unit]}</h2>
            <p>{unit}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Coming Soon</h1>
        <p style={styles.subtitle}>
          Our website is under construction. Stay tuned for something amazing!
        </p>
        {renderCountdown()}
        <form style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email for updates"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #6a11cb, #2575fc)", // Background gradient
    color: "#fff",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  content: {
    maxWidth: "600px",
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  form: {
    marginTop: "30px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    width: "70%",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#fff",
    color: "#2575fc",
    cursor: "pointer",
  },
  countdown: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  "time-unit": {
    margin: "0 10px",
    textAlign: "center",
  },
};

export default ComingSoon;
