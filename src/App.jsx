import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/cards/Cards";
// import AgentCardInfo from "./components/agentCardinfo/AgentCardInfo";

// import AgentCard from "./components/agentCard/AgentCard";
import { Outlet } from "react-router-dom";

function App() {

 
  return (
    <div className="wrapper">
      <div className="box1">
        {/* <AgentCardInfo />
        <AgentCard/> */}
      </div>
      <div className="box2">
        <Outlet/>
        <Cards />
      </div>
    </div>
  );
}

export default App;
