const statusOptions = [
  { value: 'all', label: 'All Statuses' },
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Draft' },
  { value: 'uploading', label: 'Uploading' },
]

const sortOptions = [
  { value: 'date-desc', label: 'Date: Newest First' },
  { value: 'date-asc', label: 'Date: Oldest First' },
  { value: 'title-asc', label: 'Title: A to Z' },
  { value: 'title-desc', label: 'Title: Z to A' },
]

function EpisodeControls({
  searchQuery,
  selectedStatus,
  sortBy,
  onSearchChange,
  onStatusChange,
  onSortChange,
}) {
  return (
    <section className="episode-controls" aria-label="Episode controls">
      <label className="control-group" htmlFor="episode-search">
        <span>Search</span>
        <input
          id="episode-search"
          type="search"
          placeholder="Search by title or description"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>

      <label className="control-group" htmlFor="status-filter">
        <span>Status</span>
        <select
          id="status-filter"
          value={selectedStatus}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="control-group" htmlFor="sort-order">
        <span>Order By</span>
        <select id="sort-order" value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </section>
  )
}

export default EpisodeControls
