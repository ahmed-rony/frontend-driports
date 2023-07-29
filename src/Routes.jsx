import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Layout from "components/Layout/Layout";
import Login from "pages/Login";
import Register from "pages/Register";
import Success from "./pages/Success/Success";
import { PrivateRoute } from "utils/PrivateRoute";
const Conversation = React.lazy(() => import("pages/Conversation"));
const Map = React.lazy(() => import("pages/Map"));
const Vehicle = React.lazy(() => import("pages/Vehicle"));
const DriversOne = React.lazy(() => import("pages/DriversOne"));
const Drivers = React.lazy(() => import("pages/Drivers"));
const ReportViewOne = React.lazy(() => import("pages/ReportViewOne"));
const ReportView = React.lazy(() => import("pages/ReportView"));
const ReportViewTwo = React.lazy(() => import("pages/ReportViewTwo"));
const Reports = React.lazy(() => import("pages/Reports"));
const Dahboard = React.lazy(() => import("pages/Dahboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* ===============  PROTECTED  ================= */}
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateRoute />}>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<Dahboard />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/reportviewtwo" element={<ReportViewTwo />} />
              <Route path="/reportview/:id" element={<ReportView />} />
              <Route path="/reportviewone" element={<ReportViewOne />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/driversone" element={<DriversOne />} />
              <Route path="/vehicle" element={<Vehicle />} />
              <Route path="/map" element={<Map />} />
              <Route path="/conversation" element={<Conversation />} />
            </Route>
          </Route>
          {/* ===============  PROTECTED  ================= */}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
