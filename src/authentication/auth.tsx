import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

// Define the shape of the context value
interface AuthContextType {
  user: string | null;
  role: string | null;
  login(userName: string, userRole: string): void;
  isAuthenticated: boolean;
  logout(): void;
}

// Create the AuthContext with the default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const isAuthenticated = localStorage.getItem("name") !== null ? true : false;
  const login = (userName: string, userRole: string) => {
    // login function
    setUser(userName);
    setRole(userRole);
  };

  const logout = () => {
    // Logout function
    setUser(null);
    setRole(null);
    // clear local storage from persisiting state
    localStorage.removeItem("name");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, role, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for accessing the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
