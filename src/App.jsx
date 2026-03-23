import { useEffect, useMemo, useState } from 'react'
import './App.scss'
import DashboardHeader from './components/DashboardHeader'
import EpisodeControls from './components/EpisodeControls'
import EpisodeList from './components/EpisodeList'
import Pagination from './components/Pagination'
import episodesData from './data/episodes.json'

function sortEpisodes(episodes, sortBy) {
  const sorted = [...episodes]

  if (sortBy === 'date-desc') {
    sorted.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
  } else if (sortBy === 'date-asc') {
    sorted.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate))
  } else if (sortBy === 'title-asc') {
    sorted.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortBy === 'title-desc') {
    sorted.sort((a, b) => b.title.localeCompare(a.title))
  }

  return sorted
}

function App() {
  const episodesPerPage = 4
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [sortBy, setSortBy] = useState('date-desc')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredEpisodes = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    const filtered = episodesData.filter((episode) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        episode.title.toLowerCase().includes(normalizedQuery) ||
        episode.description.toLowerCase().includes(normalizedQuery)

      const matchesStatus = selectedStatus === 'all' || episode.status === selectedStatus

      return matchesSearch && matchesStatus
    })

    return sortEpisodes(filtered, sortBy)
  }, [searchQuery, selectedStatus, sortBy])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedStatus, sortBy])

  const totalPages = Math.max(1, Math.ceil(filteredEpisodes.length / episodesPerPage))

  const currentPageEpisodes = useMemo(() => {
    const startIndex = (currentPage - 1) * episodesPerPage
    const endIndex = startIndex + episodesPerPage
    return filteredEpisodes.slice(startIndex, endIndex)
  }, [currentPage, filteredEpisodes])

  const handlePageChange = (nextPage) => {
    const safePage = Math.min(Math.max(nextPage, 1), totalPages)
    setCurrentPage(safePage)
  }

  return (
    <main className="app-container">
      <DashboardHeader totalCount={episodesData.length} visibleCount={filteredEpisodes.length} />

      <EpisodeControls
        searchQuery={searchQuery}
        selectedStatus={selectedStatus}
        sortBy={sortBy}
        onSearchChange={setSearchQuery}
        onStatusChange={setSelectedStatus}
        onSortChange={setSortBy}
      />

      <p className="results-meta">
        Showing {currentPageEpisodes.length} of {filteredEpisodes.length} filtered episodes
      </p>

      <EpisodeList episodes={currentPageEpisodes} />

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </main>
  )
}

export default App
