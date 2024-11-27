import React from "react";
import { useParams } from "react-router-dom";
import StudentDashboard from "../JS/StudentDashboard.js";

const StudentDashboardWrapper = () => {
    const { id } = useParams(); // Retrieve the id from the URL
    return <StudentDashboard id={id} />; // Pass id as a prop to the dashboard
};

export default StudentDashboardWrapper;