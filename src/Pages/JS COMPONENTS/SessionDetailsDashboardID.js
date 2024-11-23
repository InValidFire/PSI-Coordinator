import React from "react";
import { useParams } from "react-router-dom";
import SessionDetails from "../JS/SessionDetails.js";

const SessionDetailsDashboardWrapper = () => {
    const { id1 } = useParams(); // Retrieve id1 from the URL
    const { id2 } = useParams(); // Retrieve id2 from the URL
    return <SessionDetails id1={id1} id2={id2} />; // Pass id as a prop to the dashboard
};

export default SessionDetailsDashboardWrapper;