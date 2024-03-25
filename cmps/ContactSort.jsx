export function ContactSort({ onSetSort, sortBy }) {
  function handleChange({ target }) {
    let { type, value } = target
    if (type === 'select-one') {
      const currDir = Object.values(sortBy)[0]
      onSetSort({ [value]: currDir || 1 })
    }

    if (type === 'checkbox') {
      const currSort = Object.keys(sortBy)[0]
      const dir = sortBy[currSort] === 1 ? -1 : 1
      onSetSort({ [currSort]: dir })
    }
  }

  return (
    <section className="contact-sort">
      <select name="select-sort" id="select-sort" onChange={handleChange}>
        <option value="fullName">Name</option>
        <option value="email">Email</option>
      </select>

      <label htmlFor="sort-dir">Descending</label>
      <input
        type="checkbox"
        name="sort-dir"
        id="sort-dir"
        onChange={handleChange}
      />
    </section>
  )
}