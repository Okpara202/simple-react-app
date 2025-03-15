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

  return (
    <section className="dashboardSection">
      <Header user={userName!} role={userRole!} logout={logout} />

      {/* Dynamic dashboard rendering */}
      {userRole === "Admin" ? (
        <AdminDashboard />
      ) : userRole === "Editor" ? (
        <EditorDashboard />
      ) : userRole === "Viewer" ? (
        <ViewerDashboard />
      ) : (
        <div className="dashboard">
          <h1>Unauthorized Access</h1>
        </div>
      )}
    </section>
  );
}

export default Dashboard;
