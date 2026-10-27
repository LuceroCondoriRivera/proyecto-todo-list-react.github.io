import { FaFilter } from 'react-icons/fa6'
import { FILTERS } from '../../utils/todos'

function Filter({ filter, onFilterChange }) {
  return (
    <div className="filter">
      <FaFilter className="filter__icon" aria-hidden="true" />
      <select
        className="filter__select"
        aria-label="Filtrar tareas"
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)}
      >
        <option value={FILTERS.ALL}>Todas</option>
        <option value={FILTERS.COMPLETED}>Completadas</option>
        <option value={FILTERS.PENDING}>Incompletas</option>
      </select>
    </div>
  )
}

export default Filter
