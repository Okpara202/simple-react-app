const ViewerDashboard = () => {
  return (
    <div className="dashboard viewer-dashboard">
      <h1 className="dashboard-title">Viewer Dashboard</h1>

      <div className="dashboard-section">
        <h2>Explore Articles</h2>
        <p>Discover and read articles tailored to your interests.</p>
        <div className="grid">
          <div className="card">
            <h3>Trending Articles</h3>
            <ul>
              <li>Understanding Cloud Computing</li>
              <li>10 CSS Tricks for Responsive Design</li>
              <li>AI in Modern Applications</li>
            </ul>
          </div>
          <div className="card">
            <h3>Recommended for You</h3>
            <ul>
              <li>Custom Hooks in React</li>
              <li>Web Accessibility Guidelines</li>
            </ul>
          </div>
        </div>
        <button>Browse Articles</button>
      </div>
    </div>
  );
};

export default ViewerDashboard;
