import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function login(newUser) {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
