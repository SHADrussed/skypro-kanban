import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CardPage from "./pages/CardPage";
import NewCardPage from "./pages/NewCardPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./contexts/AuthContext";

function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuth={!!user}>
              <MainPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/card/:id"
          element={
            <ProtectedRoute isAuth={!!user}>
              <CardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-card"
          element={
            <ProtectedRoute isAuth={!!user}>
              <NewCardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/exit"
          element={
            <ProtectedRoute isAuth={!!user}>
              <ExitPage />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
