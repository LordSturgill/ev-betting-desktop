
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [bets, setBets] = useState([]);

  const fetchBets = async () => {
    try {
      const res = await axios.get("http://localhost:8000/odds/positive_ev");
      setBets(res.data);
    } catch (err) {
      console.error("Failed to fetch bets", err);
    }
  };

  useEffect(() => {
    fetchBets();
    const interval = setInterval(fetchBets, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Positive EV Bets</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Team</th>
            <th>Sportsbook</th>
            <th>Odds</th>
            <th>Implied Prob</th>
            <th>+EV (%)</th>
          </tr>
        </thead>
        <tbody>
          {bets.map((bet, idx) => (
            <tr key={idx}>
              <td>{bet.team}</td>
              <td>{bet.sportsbook}</td>
              <td>{bet.odds}</td>
              <td>{(bet.implied_prob * 100).toFixed(1)}%</td>
              <td style={{ color: bet.ev > 0 ? "green" : "red" }}>{bet.ev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
