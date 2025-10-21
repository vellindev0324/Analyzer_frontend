import React, { useState } from "react";
// import InputBox from "./component/InputBox";
import CardForText from "./component/CardForText";
// import CardForChart from "./component/CardForChart";
import CardForList from "./component/CardForObjectList";


export default function StatsDashboard({ data }) {
  const [search, setSearch] = useState("");

  if (!data) {
    return <div className="loading">Loading data...</div>;
  }
  const numberInfo = data.df_number || {};

  return (
    <div className="dashboard">
      {/* Search Bar */}
      <div>
        <h1>Stats Dashboard</h1>
      </div>
      {/* Number Info */}
      <div style={{display:"block"}}>
        <div style={{display:"flex"}}>
          <CardForText numberInfo={numberInfo} text="Total Contaction in " />
          <CardForText numberInfo={data.df_by_ran_total} text="Total Run in " />
          <CardForText numberInfo={data.df_by_accept_total} text="Total Acception in " />
          <CardForText numberInfo={data.df_by_chatting_total} text="Total Chatting in " />
          <CardForText numberInfo={data.df_by_balanced_total} text="Total Balanced in " />
        </div>
        <div style={{display:"flex"}}>
          <CardForList data={data.df_by_ran} title="Run" />
          <CardForList data={data.df_by_accept} title="Accept" />
          <CardForList data={data.df_by_chatting} title="Chatting" />
          <CardForList data={data.df_by_balanced} title="Balanced" />
        </div>
      </div>
      
      {/* {
      data?Object.entries(data).map(([name, count])=>{
          <CardForList data={count} title={name}/>
      }):<></>     
      } */}
    </div>

  );
}
