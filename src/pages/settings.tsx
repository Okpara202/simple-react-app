import { useState } from "react";
import { useAuth } from "../authentication/auth";
import Header from "../components/header";
import { Navigate } from "react-router-dom";

function Settings() {
  // Ensure that state persist after refresh
  const [userName] = useState<string | null>(localStorage.getItem("name"));
  const [userRole] = useState<string | null>(localStorage.getItem("role"));

  // Allow logging out
  const { logout } = useAuth();

  if (userRole !== "Admin") {
    <Navigate to="/dashboard" />;
  }

  return (
    <section>
      <Header user={userName!} role={userRole!} logout={logout} />
    </section>
  );
}

export default Settings;
