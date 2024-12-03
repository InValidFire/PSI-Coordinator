import "./Pages/CSS/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import LoginPage from "./Pages/JS/LoginPage.js";
import CreateAccount from "./Pages/JS/CreateAccount.js";
import ForgotPassword from "./Pages/JS/ForgotPassword.js";
import DashboardID from "./Pages/JS COMPONENTS/PSIDashboardID.js";
import SessionDashboardID from "./Pages/JS COMPONENTS/SessionDetailsDashboardID.js";
import StudentDashboardID from "./Pages/JS COMPONENTS/StudentDashboardID.js";
import CreateSession from "./Pages/JS/CreateSession.js";
import SessionSignup from "./Pages/JS/SessionSignup.js";

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
                <Routes>
                    <Route path="/dashboard/leader/:id" element={<DashboardID />} />
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/session/details/:id1/:id2" element={<SessionDashboardID />} />
                    <Route path="/create/session/:id" element={<CreateSession />} />
                    <Route path="/create/account" element={<CreateAccount />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/dashboard/student/:id" element={<StudentDashboardID />} />
                    <Route path="/session/signup/:id" element={<SessionSignup />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;