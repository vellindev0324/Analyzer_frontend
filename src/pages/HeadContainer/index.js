import React, { useState, useEffect } from "react";


const HeadContainer = () => {
    const [inputText, setInputText] = useState("");
    const [load, setLoad] = useState(false);
    const api = "https://statistic-dashboard-python-backend.onrender.com"
    const dev_api = "http://127.0.0.1:5000"
    // Fetch data from Flask API
    const fetchData = async () => {
        try {
            setLoad(true);
            const response = await axios.get(`${api}/api/result_data`);
            setResultCountryCounts(response.data.run_country_counts);
            setResultAccountCounts(response.data.run_account_counts);
            setBalancedCountryCounts(sortbyObject(response.data.balanced_country_counts));
            setBalancedAccountCounts(sortbyObject(response.data.balanced_account_counts));
            setContactedCountriesCounts(sortbyObject(response.data.contacted_countries_counts));
            setYesterdayData(response.data.y_data)
            setChattingNames(response.data.chatting_names)
            setWaitingNames(response.data.waiting_names)
            setAcceptNames(response.data.accept_names)
            setEventByAccount(response.data.events_by_account)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoad(false);
    };

    const handleSearch = async () => {
        const response = await fetch(`${api}/api/submit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: inputText }),
        });

        const data = await response.json();
        setReceiveObj(data)

    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Topbar
                onSearch={setInputText}
                onButton1Click={handleSearch}
                onButton2Click={fetchData}
                load={load}
            />
        </>
    )
}

export default HeadContainer;