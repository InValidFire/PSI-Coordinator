import "../CSS/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PSILeaderDashboard from "./PSILeaderDashboard.js";
import PageHeader from "../../HeaderAndFooter/PageHeader.js";
import LoginPage from "./LoginPage.js";
import StudentDashboard from "./StudentDashboard.js";
import SessionDetails from "./SessionDetails.js";
import CreateAccount from "./CreateAccount.js";


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
              <Route path="/dashboard/leader" element={<PSILeaderDashboard />} />
              <Route path="/" element={<PSILeaderDashboard />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard/student" element={<StudentDashboard />} />
              <Route path="/sessiondetails" element={<SessionDetails />}/>
              <Route path={"/create/session"} element={<SessionDetails/>}/>
              <Route path="/create/account" element={<CreateAccount/>}/>
          </Routes>
        </Router>
      </main>
  );
}
export default App;