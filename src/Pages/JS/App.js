import "../CSS/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import PSILeaderDashboard from "./PSILeaderDashboard.js";
import PageHeader from "../../HeaderAndFooter/PageHeader.js";
import LoginPage from "./LoginPage.js";
import StudentDashboard from "./StudentDashboard.js";
import SessionDetails from "./SessionDetails.js";
import CreateAccount from "./CreateAccount.js";
import ForgotPassword from "./ForgotPassword.js";

function App() {
    console.log("App component rendered");

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Start with false

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("User state changed:", user); // Log the user object
            setIsLoggedIn(!!user); // Set to true if user exists, false if not
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setIsLoggedIn(false); // Update state to reflect the user is logged out
                console.log("User logged out.");
            })
            .catch((error) => {
                console.error("Error logging out: ", error);
            });
    };

    return (
        <Router>
            <main className="App">
                <PageHeader
                    pageTitle="PSI Coordinator"
                    navBarContents={[
                        isLoggedIn
                            ? { text: "LOGOUT", link: "/", onClick: handleLogout } // Display "LOGOUT" if logged in
                            : { text: "LOGIN", link: "/login" }, // Display "LOGIN" if not logged in
                        { text: "ADD SCHEDULE", link: "/addPSISchedule" },
                    ]}
                />
                <Routes>
                    <Route path="/dashboard/leader" element={<PSILeaderDashboard />} />
                    <Route path="/" element={<PSILeaderDashboard />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard/student" element={<StudentDashboard />} />
                    <Route path="/sessiondetails" element={<SessionDetails />} />
                    <Route path="/create/session" element={<SessionDetails />} />
                    <Route path="/create/account" element={<CreateAccount />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;