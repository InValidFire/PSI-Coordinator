import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeDashboard from "./WelcomeDashboard.js";
import PageHeader from "./Header/PageHeader.js";


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
              <Route path="/welcomedashboard" element={<WelcomeDashboard />} />
              <Route path="/" element={<WelcomeDashboard />} />
          </Routes>
        </Router>
      </main>
  );
}
export default App;