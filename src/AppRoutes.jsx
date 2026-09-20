import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CardPage from "./pages/CardPage";
import NewCardPage from "./pages/NewCardPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProtectedRoute from "./components/ProtectedRoute";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <MainPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/card/:id"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <CardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-card"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <NewCardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/exit"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <ExitPage onLogout={() => setIsAuth(false)} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<LoginPage onLogin={() => setIsAuth(true)} />}
        />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
