import React from "react";
import "./EventCards.css";

const EventCards = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return <p>No events available</p>;
  }

  return (
    <div>
      <h2>Events</h2>
      <p style={{ color: "gray" }}>Please share the task with them in the specific date</p>
      <div className="event-cards">
        {Object.entries(data).map(([account, events]) => {
          if (account != "Account") {
            return (
              <div className="cardevent" key={account}>
                <h3 className="cardevent-title">{account}</h3>
                <ul className="cardevent-content">
                  {events.map((event, idx) => (
                    <li key={idx}>
                      <span className="name">{event.name}</span>
                      <span className="date">{event.events}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
        })}
      </div>
    </div>
  );
};

export default EventCards;
