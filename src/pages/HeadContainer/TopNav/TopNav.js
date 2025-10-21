import React, { useState } from "react";
import "./TopNav.css";

const Topbar = ({ onSearch, onButton1Click, onButton2Click, load }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <div className="topbar">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>

      <div className="topbar-buttons">
        <button className="topbar-btn" onClick={onButton1Click}>
          Search
        </button>
        <button className="topbar-btn" onClick={onButton2Click}>
          {!load?"Reload":"Loading..."}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
