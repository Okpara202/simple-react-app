import { useState } from "react";
import Header from "../components/header";
import { useAuth } from "../authentication/auth";
import AdminDashboard from "../components/dashboard/adminDashboard";
import EditorDashboard from "../components/dashboard/editorDashboard";
import ViewerDashboard from "../components/dashboard/viewerDashboard";

function Dashboard() {
  // Ensure that state persist after refresh
  const [userName] = useState<string | null>(localStorage.getItem("name"));
  const [userRole] = useState<string | null>(localStorage.getItem("role"));

  // Allow logging out
  const { logout } = useAuth();

  // Dynamic rendering
  // Main Dashboard component

  const mainDashboard = () => {
    switch (userRole) {
      case "Admin":
        return <AdminDashboard />;
      case "Editor":
        return <EditorDashboard />;
      case "Viewer":
        return <ViewerDashboard />;
      default:
        return (
          <div className="dashboard">
            <h1>Unauthorized Access</h1>
          </div>
        );
    }
  };

  return (
    <section className="dashboardSection">
      <Header user={userName!} role={userRole!} logout={logout} />
      {mainDashboard()}
    </section>
  );
}

export default Dashboard;
