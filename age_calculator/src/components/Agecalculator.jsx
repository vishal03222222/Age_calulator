import React, { Component } from "react";
import "./AgeCalculator.css"; // Import the external CSS

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
      <div className="container">
        <div className="calculator">
          <h1 className="title">
            JavaScript <br />
            <span className="title-span">Age Calculator</span>
          </h1>
          <div className="input-box">
            <input
              type="date"
              value={birthDate}
              onChange={this.handleDateChange}
              max={new Date().toISOString().split("T")[0]}
              className="input"
            />
            <button onClick={this.calculateAge} className="button">
              Calculate
            </button>
          </div>
          <p className="result">{ageResult}</p>
        </div>
      </div>
    );
  }
}

export default AgeCalculator;
