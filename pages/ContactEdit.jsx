import { contactService } from "../services/contact.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { saveContact } from "../store/actions/contact.actions.js"

const { useState, useEffect } = React
const { Link, useNavigate, useParams } = ReactRouterDOM

export function ContactEdit() {
  const [contactToEdit, setContactToEdit] = useState(contactService.getEmptyContact())
  const navigate = useNavigate()
  const { contactId } = useParams()

  useEffect(() => {
    console.log(contactId);
    if (contactId) loadContact()
  }, [contactId])

  function loadContact() {
    contactService
      .getById(contactId)
      .then(setContactToEdit)
      .catch(err => {
        console.error('Edit contact -> Could not load contact', err)
        showErrorMsg('Could not load contact')
        navigate('/contact')
      })
  }

  function handleChange({ target }) {
    let { value, name: field } = target
    setContactToEdit((prevContact) => ({ ...prevContact, [field]: value }))
  }

  function onSaveContact(ev) {
    ev.preventDefault()
    console.log('contactToEdit', contactToEdit);
    if (!contactToEdit.fullName) contactService.fullName = 'Anonymous'

    saveContact(contactToEdit)
      .then(() => {
        showSuccessMsg('Contact Saved!')
        navigate('/contact')
      })
      .catch(err => {
        console.log('Had issues in saving contact', err)
        showErrorMsg('Had issues in saving contact')
      })
  }

  return <section className="contact-edit">
    <h2>{contactToEdit._id ? 'Edit' : 'Add'} Contact</h2>

    <form onSubmit={onSaveContact} >
      <label htmlFor="fullName">Name: </label>
      <input type="text"
        name="fullName"
        id="fullName"
        placeholder="Enter new name"
        value={contactToEdit.fullName}
        onChange={handleChange}
      />

      <label htmlFor="phone">Phone: </label>
      <input type="tel"
        name="phone"
        id="phone"
        placeholder="New phone number"
        value={contactToEdit.phone}
        onChange={handleChange}
      />


      <label htmlFor="email">Email: </label>
      <input type="email"
        name="email"
        id="email"
        placeholder="New email address"
        value={contactToEdit.email}
        onChange={handleChange}
      />

      <div>
        <button>{contactToEdit._id ? 'Save' : 'Add'}</button>
        <Link to="/contact">Cancel</Link>
      </div>
    </form>
  </section>
}