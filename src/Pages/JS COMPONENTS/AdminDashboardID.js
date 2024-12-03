import React from "react";
import { useParams } from "react-router-dom";
import AdminDashboard from "../JS/AdminDashboard.js";

const AdminDashboardWrapper = () => {
    const { id } = useParams(); // Retrieve the id from the URL
    return <AdminDashboard id={id} />; // Pass id as a prop to the dashboard
};

export default AdminDashboardWrapper;