import React from "react";
import "./CardList.css"; // custom CSS file

const CardList = ({ data, title, description }) => {
  if (!data || Object.keys(data).length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="cardlist-list">
      <div className="cardlist-list-title">
        <h2>{title}</h2>
        {description ? <div style={{fontSize:"5", color:"gray"}}>{description}</div> : <></>}
        </div>

      {data ? Object.entries(data).map(([account, names]) => (
        account &&
        <div className="cardlist" key={account}>
          <h3 className="cardlist-title">{account}</h3>
          <ul className="cardlist-content">
            {names.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      )) : <></>}
      
    </div>
  );
};

export default CardList;
