import fallbackEpisodeBanner from '../assets/episode-fallback.svg'

function EpisodeCard({ episode }) {
  const createdDate = new Date(episode.createdDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const episodeBanner = episode.bannerImage || fallbackEpisodeBanner

  const handleImageError = (event) => {
    event.currentTarget.onerror = null
    event.currentTarget.src = fallbackEpisodeBanner
  }

  return (
    <article className="episode-card">
      <img
        src={episodeBanner}
        alt={episode.title}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        width="1200"
        height="675"
        onError={handleImageError}
      />

      <div className="episode-content">
        <div className="episode-top-row">
          <h3>{episode.title}</h3>
          <div className="status-group" aria-label={`Status ${episode.status}`}>
            <span className="status-label">Status:</span>
            <span className={`status-badge status-${episode.status}`}>{episode.status}</span>
          </div>
        </div>

        <p className="episode-description">{episode.description}</p>

        <p className="episode-date">Created: {createdDate}</p>

        <div className="episode-stats">
          <div>
            <span>Views</span>
            <strong>{episode.viewsCount.toLocaleString('en-IN')}</strong>
          </div>
          <div>
            <span>Avg Watch/Listen</span>
            <strong>{episode.avgWatchTime}</strong>
          </div>
          <div>
            <span>Drop-off Before Completion</span>
            <strong>{episode.dropOffBeforeCompletion}</strong>
          </div>
        </div>
      </div>
    </article>
  )
}

export default EpisodeCard
