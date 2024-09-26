import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PSILeaderDashboard from "./PSILeaderDashboard.js";
import PageHeader from "./HeaderAndFooter/PageHeader.js";


function App() {
  return (
      <main className="App">
          <PageHeader
              pageTitle=
                  {
                      "Welcome!"
                  }
              navBarContents=
                  {
                      [{
                          'text': "LOGOUT",
                          'link': "Logout"
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
          </Routes>
        </Router>
      </main>
  );
}
export default App;