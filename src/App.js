import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PSILeaderDashboard from "./PSILeaderDashboard.js";
import PageHeader from "./HeaderAndFooter/PageHeader.js";
import LoginPage from "./LoginPage.js";


function App() {
  return (
      <main className="App">
          <PageHeader
              pageTitle=
                  {
                      "PSI Coordinator"
                  }
              navBarContents=
                  {
                      [
                          {
                              'text': "LOGOUT",
                              'link': "Logout"
                          },
                          {
                              'text': "LOGIN",
                              'link': "Login"
                          },
                          {
                              'text' : "ADD SCHEDULE",
                              'link': "/addPSISchedule"
                          }

                      ]
                  }
          />
        <Router>
          <Routes>
              <Route path="/welcomedashboard" element={<PSILeaderDashboard />} />
              <Route path="/" element={<PSILeaderDashboard />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </main>
  );
}
export default App;