import React from "react";
import { useParams } from "react-router-dom";
import PSILeaderDashboard from "../JS/PSILeaderDashboard.js";

const PSILeaderDashboardWrapper = () => {
    const { id } = useParams(); // Retrieve the id from the URL
    return <PSILeaderDashboard id={id} />; // Pass id as a prop to the dashboard
};

export default PSILeaderDashboardWrapper;
