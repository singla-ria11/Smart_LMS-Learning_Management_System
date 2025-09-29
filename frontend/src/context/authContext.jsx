//

import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext();

const backendURL = "http://localhost:3000";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // login user
  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        backendURL + "/smartlms/api/auth/login",
        {
          email,
          password,
        }
      );
      // save into state
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data)); // storing user info in local storage
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  // logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // storing user info in local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
