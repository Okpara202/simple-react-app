const AdminDashboard = () => {
  return (
    <div className="dashboard admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="dashboard-section">
        <h2>User Management</h2>
        <p>View and manage platform users.</p>
        <button>Manage Users</button>
      </div>

      <div className="dashboard-section">
        <h2>Platform Analytics</h2>
        <p>View detailed analytics and system performance.</p>
        <div className="grid">
          <div className="card">
            <h3>Site Visits</h3>
            <p>120,000 visits this month</p>
          </div>
          <div className="card">
            <h3>Active Users</h3>
            <p>5,234 users online</p>
          </div>
        </div>
        <button>View Analytics</button>
      </div>

      <div className="dashboard-section">
        <h2>System Logs</h2>
        <p>Monitor system activities and logs.</p>
        <button>View Logs</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
