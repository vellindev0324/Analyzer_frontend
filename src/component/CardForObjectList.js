import React from "react";
// import "./StatsCard.css"; // custom CSS for styling

const CardForObjectList = ({ title, data }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <ul className="card-list">
        {data ?
          Object.entries(data).map(([key, value]) => (
            <li key={key ? key : "unknown"} className="card-item">
              <span className="card-key">{key || "Unknown"}</span>
              <span className="card-value">{value}</span>
            </li>
          ))
          : <></>
        }
      </ul>
    </div>
  );
};

export default CardForObjectList;
