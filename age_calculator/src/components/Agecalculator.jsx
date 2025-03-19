
import React, { Component } from "react";

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: "",
      ageResult: "",
    };
  }

  handleDateChange = (e) => {
    this.setState({ birthDate: e.target.value });
  };

  calculateAge = () => {
    const { birthDate } = this.state;

    // Check if the date is empty, show alert and stop function execution
    if (!birthDate) {
      alert("🚨 Please enter your birth date before calculating!");
      return;
    }

    const birth = new Date(birthDate);
    const d1 = birth.getDate();
    const m1 = birth.getMonth() + 1;
    const y1 = birth.getFullYear();

    const today = new Date();
    const d2 = today.getDate();
    const m2 = today.getMonth() + 1;
    const y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = this.getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    this.setState({
      ageResult: `You are ${y3} years, ${m3} month${m3 > 1 ? "s" : ""}, and ${d3} day${d3 > 1 ? "s" : ""} old.`,
    });
  };

  getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  render() {
    const { birthDate, ageResult } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.calculator}>
          <h1 style={styles.title}>
            JavaScript <br />
            <span style={styles.titleSpan}>Age Calculator</span>
          </h1>
          <div style={styles.inputBox}>
            <input
              type="date"
              value={birthDate}
              onChange={this.handleDateChange}
              max={new Date().toISOString().split("T")[0]}
              style={styles.input}
            />
            <button onClick={this.calculateAge} style={styles.button}>
              Calculate
            </button>
          </div>
          <p style={styles.result}>{ageResult}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4203a9, #90bafc)",
    backgroundSize: "400% 400%",
    animation: "gradientBG 6s ease infinite",
  },
  calculator: {
    width: "90%",
    maxWidth: "500px",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "36px",
    color: "#fff",
    fontWeight: "bold",
  },
  titleSpan: {
    color: "#ffff76",
  },
  inputBox: {
    margin: "30px 0",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "10px",
    borderRadius: "8px",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "16px",
    padding: "10px",
  },
  button: {
    background: "#ffff76",
    border: "none",
    outline: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    color: "#333",
    cursor: "pointer",
    transition: "0.3s",
  },
  result: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ffff76",
    textShadow: "0 0 10px rgba(255, 255, 118, 0.8)",
    marginTop: "20px",
  },
};

// Keyframes for background animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`, styleSheet.cssRules.length);

export default AgeCalculator;
