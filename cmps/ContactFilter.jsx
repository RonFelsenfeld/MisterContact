import { utilService } from "../services/util.service.js"

const { useState, useEffect, useRef } = React

export function ContactFilter({ onSetFilter, filterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
  onSetFilter = useRef(utilService.debounce(onSetFilter, 300))


  useEffect(() => {
    onSetFilter.current(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    let { value, name: field } = target
    setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
  }

  return (
    <section className="contact-filter">
      <form>
        <input
          type="text"
          id="txt"
          placeholder="Filter by name or phone number"
          name="txt"
          value={filterByToEdit.txt}
          onChange={handleChange}
        />
      </form>
    </section>
  )
}