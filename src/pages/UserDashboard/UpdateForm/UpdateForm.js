import React, { useState, useEffect } from "react";
import "./UpdateForm.css";

function UpdateForm({ options = [], onSubmit, state }) {
    const [keyword, setKeyword] = useState("");
    const [selectedValue, setSelectedValue] = useState(null);
    const [showUpdated, setShowUpdated] = useState(false);
    const [res, setRes] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!keyword || !selectedValue) {
            alert("Please enter a keyword and select a value!");
            return;
        }
        onSubmit(keyword, selectedValue);
        setKeyword("");
        setSelectedValue(null);
        setShowUpdated(true); // show Updated
    };

    useEffect(() => {
        if (showUpdated) {
            const timer = setTimeout(() => {
                setShowUpdated(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showUpdated]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="update-form">
                <input
                    type="text"
                    placeholder="Enter keyword..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="update-input"
                />
                <ul className="update-list">
                    {options.map((item) => (
                        <li
                            key={item}
                            className={`update-list-item ${selectedValue === item ? "selected" : ""}`}
                            onClick={() => setSelectedValue(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="update-actions">
                    <button type="submit" className="update-submit">
                        Update
                    </button>
                    {showUpdated && (res ?
                        <span key={Date.now()} className="update-success">
                            Updated
                        </span>
                        :
                        <span key={Date.now()} className="update-failed">
                            Not Exist
                        </span>
                    )}
                </div>
            </div>
        </form>
    );
}

export default UpdateForm;
