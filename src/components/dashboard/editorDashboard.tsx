const EditorDashboard = () => {
  return (
    <div className="dashboard editor-dashboard">
      <h1 className="dashboard-title">Editor Dashboard</h1>

      <div className="dashboard-section">
        <h2>Content Management</h2>
        <p>Manage and edit platform content efficiently.</p>
        <div className="grid">
          <div className="card">
            <h3>Recent Articles</h3>
            <ul>
              <li>React Basics</li>
              <li>Optimizing Web Performance</li>
              <li>GraphQL API Tips</li>
            </ul>
          </div>
          <div className="card">
            <h3>Pending Reviews</h3>
            <ul>
              <li>React Router Patterns</li>
              <li>Advanced Redux Practices</li>
            </ul>
          </div>
        </div>
        <div className="buttons">
          <button>Create Article</button>
          <button>Manage Content</button>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Content Calendar</h2>
        <p>Keep track of content schedules and deadlines.</p>
        <button>Open Calendar</button>
      </div>
    </div>
  );
};

export default EditorDashboard;
