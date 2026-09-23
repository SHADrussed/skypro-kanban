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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuth={!!user}>
              <MainPage user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/card/:id"
          element={
            <ProtectedRoute isAuth={!!user}>
              <CardPage user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-card"
          element={
            <ProtectedRoute isAuth={!!user}>
              <NewCardPage user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/exit"
          element={
            <ProtectedRoute isAuth={!!user}>
              <ExitPage user={user} onLogout={() => setUser(null)} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <LoginPage
              onLogin={(user) => {
                setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
              }}
            />
          }
        />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
