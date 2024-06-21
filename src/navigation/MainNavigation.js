import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../Pages/Dashboard";
import Criteria from "../Pages/Criteria";
import Documents from "../Pages/Documents";
import Profile from "../Pages/Profile";

export default function MainNavigation() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/criteria" element={<Criteria />} />
          <Route path="/docs" element={<Documents />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}
