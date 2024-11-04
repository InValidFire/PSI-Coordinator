import React from "react";
import { useParams } from "react-router-dom";
import CreateSession from "../JS/CreateSession.js";

const PSILeaderDashboardWrapper = () => {
    const { id } = useParams(); // Retrieve the id from the URL
    return <CreateSession id={id} />; // Pass id as a prop to the dashboard
};

export default PSILeaderDashboardWrapper;
