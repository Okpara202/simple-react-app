import { useState } from "react";
import Header from "../components/header";
import { useAuth } from "../authentication/auth";

function Dashboard() {
  // Ensure that state persist after refresh
  const [userName] = useState<string | null>(localStorage.getItem("name"));
  const [userRole] = useState<string | null>(localStorage.getItem("role"));

  // Allow logging out
  const { logout } = useAuth();

  return (
    <section className="dashboardSection">
      <Header user={userName!} role={userRole!} logout={logout} />
    </section>
  );
}

export default Dashboard;
