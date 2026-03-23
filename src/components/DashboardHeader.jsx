function DashboardHeader({ totalCount, visibleCount }) {
  return (
    <header className="dashboard-header">
      <div>
        <p className="dashboard-kicker">Creator Studio</p>
        <h1>Episodes Dashboard</h1>
        <p className="dashboard-subtitle">
          Manage your content pipeline, track episode performance, and monitor publication status.
        </p>
      </div>

      <div className="dashboard-totals">
        <div className="metric-pill">
          <span>Total Episodes</span>
          <strong>{totalCount}</strong>
        </div>
        <div className="metric-pill">
          <span>Visible Results</span>
          <strong>{visibleCount}</strong>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
