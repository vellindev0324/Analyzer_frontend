import React from "react";
import UserDashboard from "./pages/UserDashboard";
import HeadContainer from "./pages/HeadContainer/TopNav/TopNav"
import "./StatsDashboard.css"; // custom CSS file

function App() {
  

  return (
    <div  className="dashboard">
      {/* <HeadContainer/> */}
      <UserDashboard/>      
    </div>
  );
}

export default App;
