import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeDashboard from "./WelcomeDashboard.js";
import PageHeader from "./Header/PageHeader.js";
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
              <Route path="/" element={<WelcomeDashboard />} />
              <Route path="/welcomedashboard" element={<WelcomeDashboard />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </main>
  );
}
export default App;