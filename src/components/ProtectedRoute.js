import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component: RouteComponent }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")

    if (isAuthenticated) {
        return <RouteComponent />
    }

    return <Navigate to="/login" />
}