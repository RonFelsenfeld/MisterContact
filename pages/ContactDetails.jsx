import { contactService } from "../services/contact.service.js"

const { useState, useEffect } = React
const { useParams, Link } = ReactRouterDOM

export function ContactDetails() {
  const [contact, setContact] = useState(null)
  const { contactId } = useParams()

  useEffect(() => {
    loadContact()
  }, [])

  function loadContact() {
    contactService
      .getById(contactId)
      .then(setContact)
      .catch(err => {
        console.error('load contact -> Could not load contact', err)
        showErrorMsg('Could not load contact')
      })
  }

  if (!contact) return <div>Loading details...</div>
  return (
    <section className="contact-details">
      {/* <Link to="/todo">
        <button>Back to list</button>
      </Link> */}

      <p className="contact-id">
        ID: <span>{contact._id}</span>
      </p>
      <p className="contact-name">
        Name: <span>{contact.fullName}</span>
      </p>
      <p className="todo-phone">
        Phone number: <span>{contact.phone}</span>
      </p>
      <p className="todo-email">
        Email Address: <span>{contact.email}</span>
      </p>
    </section>
  )
}
