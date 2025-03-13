import { useState } from "react";
import Header from "../components/header";
import { useAuth } from "../authentication/auth";

function Dashboard() {
  // Ensure that state persist after refresh
  const [user] = useState<string | null>(localStorage.getItem("name"));
  const [role] = useState<string | null>(localStorage.getItem("role"));

  // Allow logging out
  const { logout } = useAuth();

  return (
    <section className="dashboardSection">
      <Header user={user!} role={role!} logout={logout} />
    </section>
  );
}

export default Dashboard;
