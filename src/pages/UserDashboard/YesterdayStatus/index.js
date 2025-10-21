import React, { useEffect, useState } from "react";

function YesterdayStatus({stats}) {
    
  return (
    <div style={styles.container}>
      <h2>📊 Yesterday’s Stats</h2>

      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <h3>Total Contacts</h3>
          <p>{stats?stats.y_total_contacts:<></>}</p>
        </div>
        <div style={styles.card}>
          <h3>Accept</h3>
          <p>{stats?stats.y_accept_yesterday:<></>}</p>
          <p>{stats?(Math.round(stats.y_accept_yesterday/stats.y_total_contacts*100)).toString()+"%":<></>}</p>
        </div>
        <div style={styles.card}>
          <h3>Chatting</h3>
          <p>{stats?stats.y_chatting_yesterday:<></>}</p>
          <p>{stats?(Math.round(stats.y_chatting_yesterday/stats.y_total_contacts*100)).toString()+"%":<></>}</p>
        </div>
        <div style={styles.card}>
          <h3>Waiting</h3>
          <p>{stats?stats.y_waiting_yesterday:<></>}</p>
          <p>{stats?(Math.round(stats.y_waiting_yesterday/stats.y_total_contacts*100)).toString()+"%":<></>}</p>
        </div>
      </div>

      <h3>👥 Contacts by Account</h3>
      <ul style={styles.list}>
        {stats?.y_contacts_by_account && Object.entries(stats.y_contacts_by_account).map(([account, count]) => (
          <li key={account}>
            {account}: {count}
          </li>
        ))}
      </ul>
    </div>
  )
  
}

// inline styles for modern card look
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "20px",
  },
  card: {
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  list: {
    background: "#f9f9f9",
    padding: "12px",
    borderRadius: "8px",
    listStyle: "none",
  },
};

export default YesterdayStatus;
