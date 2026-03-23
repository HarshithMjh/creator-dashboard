import EpisodeCard from './EpisodeCard'

function EpisodeList({ episodes }) {
  if (episodes.length === 0) {
    return (
      <section className="empty-state" aria-live="polite">
        <h2>No episodes match your filters</h2>
        <p>Try changing search text, status, or order options.</p>
      </section>
    )
  }

  return (
    <section className="episode-list" aria-label="Episode list">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </section>
  )
}

export default EpisodeList
